const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/movie-db', {
  useNewUrlParser: true,
  useCreateIndex: true,
})

module.exports = mongoose
