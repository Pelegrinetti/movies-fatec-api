const db = require('../database')

const MovieSchema = db.Schema(
  {
    Poster: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = db.model('Movie', MovieSchema)
