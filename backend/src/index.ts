import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001
const allowedOrigins = ['https://akuskova.netlify.app', 'http://localhost:5174']


app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}))
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})