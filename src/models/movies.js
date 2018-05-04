const moviesDb = require('../../queries/main')
const uuid = require('uuid/v4')

const getAll = () => {
  const movies = moviesDb.getAll()
  return movies.then(result => {
    return result
  })
}

const getMovie = (id) => {
  const movie = moviesDb.getMovie(id)
  return movie.then(result => {
    return result[0]
  })
}

const addMovie = (body) => {
  const errors = []
  const id = uuid()
  const title = body.title
  const director = body.director
  const year = body.year
  const rating = body.rating
  const url = body.url



  if (!id || !title || !director || !year || !rating || !url) {
    errors.push('Missing id, title, director, year, rating, or url')
    return errors
  } else {
    const newMovie = moviesDb.addMovie(id, title, director, year, rating, url)
    return newMovie.then(result => {

      return result[0]
    })
  }
}

const saveMovieDetails = (id, body) => {
  const errors = []
  const title = body.title
  const director = body.director
  const year = body.year
  const rating = body.rating
  const url = body.url



  if (!id || !title || !director || !year || !rating || !url) {
    errors.push('Missing id, title, director, year, rating, or url')
    return errors
  } else {
    const edited = moviesDb.saveMovieDetails(id, title, director, year, rating, url)
    return edited.then(result => {
      
      return result[0]
    })
  }
}

const deleteMovie = (id) => {
  const errors = []

  if (!id) {
    errors.push({error: 'Movie id is required'})
    const result = { errors }
    return result
  }
  const deleteMovie = moviesDb.deleteMovie(id)
  return deleteMovie.then(result => {
    return result
  })
}


module.exports = {
  getAll,
  getMovie,
  addMovie,
  saveMovieDetails,
  deleteMovie
}
