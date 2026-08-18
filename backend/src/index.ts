import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001
const allowedOrigins = ['https://akuskova.netlify.app', 'http://localhost:5174', 'http://localhost:5173']

// For every incoming request checks the origin, no origin is allowed, allowed origins, otherwise is an error
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true) // no error, allow the request
    } else {
      callback(new Error('Not allowed by CORS')) // reject the request with an error
    }
  }
}))
app.use(express.json()) // parses json bodies 

interface PexelsResponse {
  photos: {
    id: number
    src: { medium: string; large: string }
    alt: string
    photographer: string
  }[]
}
// defines a new route, when someone makes a GET request to /api/data, the server will fetch data from the Pexels API and return it as JSON
app.get('/api/data', async (req, res) => {
  res.set('Cache-Control', 'no-store')
  try { // sends a request to the Pexels API asking for photos, nature for right now
    const response = await fetch('https://api.pexels.com/v1/curated?per_page=80', {
      headers: {
        'Authorization': process.env.PEXELS_API_KEY as string
      }
    })
    if (!response.ok) throw new Error(`API responded with ${response.status}`)
    const data = await response.json() as PexelsResponse// parses the response as JSON
    const randomPhoto = data.photos[Math.floor(Math.random() * data.photos.length)]
    res.json(randomPhoto) // sends the data back to the frontend as JSON
  } catch (error) { 
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch data' })
  }
})


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

