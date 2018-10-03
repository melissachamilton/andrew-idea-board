const Schema = require('mongoose').Schema

const IdeaSchema = new Schema({
  title: String,
  description: String,
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
