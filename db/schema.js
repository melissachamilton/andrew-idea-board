const Schema = require('mongoose').Schema

const IdeaSchema = new Schema({
  title: {
    type: String,
    default: 'New Title'
  },
  description: {
    type: String,
    default: 'New Description'
  }
})

const UserSchema = new Schema({
  userName: String,
  password: String,
  ideas: [IdeaSchema],
})

module.exports = {
  UserSchema,
  IdeaSchema,
}
