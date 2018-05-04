const model = require('../models/movies')

const getAll = (req, res, next) => {
  const data = model.getAll()
  data.then(result => {
    res.status(200).json({result})
  })
}

const getMovie = (req, res, next) => {
  const id = req.params.id
  const data = model.getMovie(id)
  data.then(result => {
    if (data.errors) {
      res.status(404).json({
        error: {
          message: `Could not find shift by ID`,
          errors: data.errors
        }
      })
    } else {
      res.status(200).json({ data })
    }
  })
}

const addMovie = (req, res, next) => {
  const data = model.addMovie(req.body)
  data.then(result => {
    if (data.errors) {
      res.status(400).json( { message: `Could not create new movie`, errors: data.errors })
    }
    res.status(201).json({result})
  })
}

const saveMovieDetails = (req, res, next) => {
  const id = req.params.id
  const body = req.body

  const data = model.saveMovieDetails(id, body)
  data.then(result => {
    if (data.errors) {
      res.status(400).json( { message: `Could not save movie details`, errors: data.errors })
    }
    res.status(201).json({result})
  })

}

const deleteMovie = (req, res, next) => {
  const id = req.params.id


  const data = model.deleteMovie(id)
  data.then(result => {
    
    if (data.errors) {
      res.status(404).json({error: `ID ${id} not found`})
    } else {
      res.status(200).json({message: `Sucessfully deleted movie ${id}`})
    }
  })
}

module.exports = {
  getAll,
  getMovie,
  addMovie,
  saveMovieDetails,
  deleteMovie
}
