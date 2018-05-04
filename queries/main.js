const knex = require('./db')

const getAll = () => {
  return knex('movies')
    .select('')
}

const getMovie = (id) => {

  return knex('movies')
    .where({ id })
} 


const addMovie = (id, title, director, year, rating, url) => {

  return knex
    .insert( { id, title, director, year, rating, url } )
    .into('movies')
    .returning('*')
}

const saveMovieDetails = (id, title, director, year, rating, url) => {

  return knex('movies')
    .where({ id })
    .update( { title, director, year, rating, url } )
    .returning('*')
}

const deleteMovie = (id) => {
  return knex('movies')
    .where({ id })
    .del()
    .returning('*')
}

module.exports = {
  getAll,
  getMovie,
  addMovie,
  saveMovieDetails,
  deleteMovie
}
