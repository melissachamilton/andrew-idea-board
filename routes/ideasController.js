const router = require('express').Router({ mergeParams: true })
const { User, Idea } = require('../db/model')

router.post('/', (req, res) => {
  const newIdea = new Idea()
  User.findById(req.params.userId)
    .then((user) => {
      user.ideas.push(newIdea)
      return user.save()
    })
    .then((user) => {
      res.send(user)
    })
})

module.exports = router
