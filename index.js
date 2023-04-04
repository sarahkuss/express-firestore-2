import express from 'express'
import cors from 'cors'

// import CRUD functions
import { addNewTV, getAllTv } from './src/tvLibrary.js'

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json())

// get all tv shows
app.get('/tvshows', getAllTv )
// add tvshows
app.post('/tvshows', addNewTV)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
