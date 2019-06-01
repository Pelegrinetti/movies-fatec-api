const router = require('express').Router()

const MovieController = require('./controllers/MovieController')

router.get('/', (req, res) => res.send({ api_version: '1.0.0' }))

router
  .route('/movie')
  .get(MovieController.index)
  .post(MovieController.create)

router.get('/movie/:title', MovieController.find)

module.exports = router
