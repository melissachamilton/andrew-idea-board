const router = require('express').Router()
const { User } = require('../db/model')

// Show All
router.get('/', async (req, res) => {
  const users = await User.find()
  res.send(users)
})

// router.get('/', (req, res) => {
//   User.find()
//     .then((response) => {
//       res.send(response)
//     })
// })

// Show One
router.get('/:id', async (req, res) => {
  // const user = await User.find({ _id: req.params.id })
  const user = await User.findById(req.params.id)
  res.send(user)
})

// Create
router.post('/', async (req, res) => {
  const user = await User.create(req.body)
  res.send(user)
})

// Update
router.put('/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(user)
})

// Delete
router.delete('/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})


module.exports = router
