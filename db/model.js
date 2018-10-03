const mongoose = require('mongoose')
const { UserSchema, IdeaSchema } = require('./schema')

const UserModel = mongoose.model('User', UserSchema)
const IdeaModel = mongoose.model('Idea', IdeaSchema)

module.exports = {
  User: UserModel,
  Idea: IdeaModel,
}
