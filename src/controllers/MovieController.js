const Movie = require('../models/Movie')

// Retorna todos os filmes
exports.index = async (req, res) => {
  try {
    const movies = await Movie.find()

    return res.send({ movies })
  } catch (error) {
    return res.send({ error: error.message }).status(500)
  }
}

// Criar um novo filme
exports.create = async (req, res) => {
  try {
    const movie = await Movie.create(req.body)

    return res.send({ movie })
  } catch (error) {
    return res.send({ error: error.message }).status(500)
  }
}

// Buscar filme
exports.find = async (req, res) => {
  try {
    const movies = await Movie.find({
      Title: { $regex: `.*${req.params.title}.*` },
    })

    return res.send({ movies })
  } catch (error) {
    return res.send({ error: error.message }).status(500)
  }
}
