const express = require('express')
const router = express.Router()
const courseController = require('../controllers/course_controllers.js');
// Retrieve all users
router.get('/', courseController.findAll);
// Create a new user
router.post('/', courseController.create);
// Retrieve a single user with id
router.get('/:id', courseController.findOne);
// Update a user with id
router.put('/:id', courseController.update);
// Delete a user with id
router.delete('/:id', courseController.delete);
module.exports = router
