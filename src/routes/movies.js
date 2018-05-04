const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/movies')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getMovie)
router.post('/', ctrl.addMovie)
router.put('/:id', ctrl.saveMovieDetails)
router.delete('/:id', ctrl.deleteMovie)

module.exports = router
