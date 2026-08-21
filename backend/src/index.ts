import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001
const allowedOrigins = ['https://akuskova.netlify.app', 'http://localhost:5174', 'http://localhost:5173']
let cachedPhotos: PexelsResponse["photos"] | null = null;
let cachedAt = 0;
const CACHE_MS = 5 * 60_000; 

interface PexelsResponse {
  photos: {
    id: number
    src: { medium: string; large: string }
    alt: string
    photographer?: string
  }[]
}
interface AnthropicResponse {
  content: { 
  type: string; 
  text: string }[]
  id: string
  model: string
  role: string
  stop_reason: string
}

// CORS configuration below handles no-origin case explicitly, sends out a custom error, and is scalable for furutre subdomains of websites.
app.use(cors({ 
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true) //if no origin or the origin is in the allowed origins, allow the request
    } else {
      callback(new Error('Not allowed by CORS')) // sends an error that the origin is not allowed
    }
  }
}))
app.use(express.json()) // parses json bodies 


// defines a new route, when someone makes a get request to /api/data, the server will fetch data from the Pexels API and return it as JSON
app.get('/api/data', async (req, res) => {  //async is a promise to get information, await is a promise to wait for the information to be returned before continuing
  res.set('Cache-Control', 'no-store')
  try { // sends a request to the Pexels API asking for photos, nature for right now
    if (!cachedPhotos || Date.now() - cachedAt > CACHE_MS) {
      const response = await fetch('https://api.pexels.com/v1/curated?per_page=80', {
        headers: {
          'Authorization': process.env.PEXELS_API_KEY as string //env can be both stribng or undefined, so we need to tell typescript that it is a string
        }
      })
      if (!response.ok) throw new Error(`API responded with ${response.status}`)

      const data = await response.json() as PexelsResponse// parses the response as JSON
      cachedPhotos = data.photos; // cache the photos
      cachedAt = Date.now(); // update the cache timestamp
    }
    const excludeIds= new Set(
      ((req.query.exclude as string) || "")
        .split(",")
        .filter(Boolean)
        .map(Number)
    )

    const available = cachedPhotos.filter((p) => !excludeIds.has(p.id));

    if (available.length === 0) {
      const randomPhoto =
        cachedPhotos[Math.floor(Math.random() * cachedPhotos.length)];
      return res.json({ ...randomPhoto, exhausted: true });
    }
      const randomPhoto = available[Math.floor(Math.random() * available.length)]
      res.json(randomPhoto) // sends the data back to the frontend as JSON
  } catch (error) { 
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch data' })
  }
})


app.post('/api/caption', async (req, res) => {
  console.log("Key loaded?", process.env.ANTHROPIC_API_KEY?.slice(0, 10));
  try {
    const { imageUrl, alt } = req.body as { imageUrl?: string; alt?: string }
    if (!imageUrl) return res.status(400).json({ error: 'imageUrl required' })

    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY as string,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',   // cheap + fast
        max_tokens: 100,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Write a single-sentence caption for this image. Do not use markdown, headings, hashtags, or quote marks. Return only the plain caption text${
                alt ? ` Pexels described it as: "${alt}".` : ''
              }`,
            },
            {
              type: 'image',
              source: { type: 'url', url: imageUrl },
            },
          ],
        }],
      }),
    })

    if (!anthropicResponse.ok) {
      throw new Error(`Anthropic responded with ${anthropicResponse.status}`)
    }
    const data = await anthropicResponse.json() as AnthropicResponse
    const caption = data.content?.[0]?.text?.trim() ?? ''
    res.json({ caption })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to generate caption' })
  }
})


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

