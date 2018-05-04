const uuid = require('uuid/v4')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: uuid(), title: 'Mulholland Drive', director: 'David Lynch', year: '2001', rating: '11.1', url: 'https://pics.filmaffinity.com/mulholland_drive-308967071-large.jpg'},
        {id: uuid(), title: 'The Holy Mountain', director: 'Alejandro Jodorwosky', year: '1973', rating: '27.9', url: 'https://i.pinimg.com/originals/b1/a6/1a/b1a61a2e2abc5ab743f17c51f73debf7.jpg'},
        {id: uuid(), title: 'Solaris', director: 'Andrei Tarkovsky', year: '1976', rating: '39.3', url: 'https://s-media-cache-ak0.pinimg.com/originals/0b/b5/7c/0bb57cfe8e199d8f04e5e2be4d0500c6.jpg'},
        {id: uuid(), title: 'Antichrist', director: 'Lars von Trier', year: '2009', rating: '66.6', url: 'https://78.media.tumblr.com/8508d5b458ff2a4f8619025af0fd534d/tumblr_mmck7tdQF91s80h8lo1_500.png'},
        {id: uuid(), title: '2001: A Space Odyssey', director: 'Stanley Kubrick', year: '1968', rating: '17.5', url: 'https://ia.media-imdb.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg'},
        {id: uuid(), title: 'THX 1138', director: 'George Lucas', year: '1971', rating: '49.0', url: 'https://i.pinimg.com/originals/0a/f7/cf/0af7cf4e94eb1df5b59775e8f94b8858.png'},
        {id: uuid(), title: 'Meow', director: 'Dandy Kitten', rating: '46.7', url: 'https://filmmomaticreviews.files.wordpress.com/2017/07/00608xqngy1fdmg61is2ej30jc0wmgtl.jpg?w=636'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT * FROM movies;`
      )
    })
}
