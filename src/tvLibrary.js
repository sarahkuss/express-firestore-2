import {db} from './dbConnect.js'

export function addNewTV(req, res) {
  const newTV = req.body

  // CREATE: Add new tv show
  db.collection('tvShows').add(newTV)
  .then(doc => res.status(201).send(`New tv Added: ${doc.id}`)) //doc --> singular component in document database
  .catch(err => res.status(500).send(err))
}

// READ: get all shows
export async function getAllTv(req,res) {
  const collection = await db.collection('tvShows').get()
    .catch(err => res.status(500).send(err))

    const tvShowList = collection.docs.map(
      tvShow => ( {...tvShow.data(), id: tvShow.id} )
      )
    res.status(201).send(tvShowList)
}

