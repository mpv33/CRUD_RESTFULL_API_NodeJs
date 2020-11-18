const Course = require('../models/course_model.js');
// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
Course.find()
  .then(course => {
  res.send(course);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while getting list of users."
});
});
};
// Create and Save a new User
exports.create = (req, res) => {
// Validate request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}
// Create a new User
const course = new Course({
    course_id: req.body.course_id,
    course_title: req.body.course_title,
    course_description: req.body.course_description,
    course_duration: req.body.course_duration
});
// Save user in the database
course.save()
  .then(data => {
  res.send(data);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while creating new user."
});
});
};
// Find a single User with a id
exports.findOne = (req, res) => {
 Course.findById(req.params.id)
  .then(c => {
  if(!c) {
   return res.status(404).send({
   message: "User not found with id " + req.params.id
 });
}
 res.send(c);
}).catch(err => {
  if(err.kind === 'ObjectId') {
    return res.status(404).send({
    message: "User not found with id " + req.params.id
  });
}
return res.status(500).send({
  message: "Error getting user with id " + req.params.id
});
});
};
// Update a User identified by the id in the request
exports.update = (req, res) => {
// Validate Request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}
// Find user and update it with the request body
Course.findByIdAndUpdate(req.params.id, {
    course_id: req.body.course_id,
    course_title: req.body.course_title,
    course_description: req.body.course_description,
    course_duration: req.body.course_duration
}, {new: true})
.then(c => {
 if(!c) {
   return res.status(404).send({
   message: "course not found with id " + req.params.id
 });
}
res.send(c);
}).catch(err => {
if(err.kind === 'ObjectId') {
  return res.status(404).send({
  message: "course not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Error updating user with id " + req.params.id
});
});
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
Course.findByIdAndRemove(req.params.id)
.then(c => {
if(!c) {
  return res.status(404).send({
  message: "course not found with id " + req.params.id
});
}
res.send({message: "course deleted successfully!"});
}).catch(err => {
if(err.kind === 'ObjectId' || err.name === 'NotFound') {
  return res.status(404).send({
  message: "course not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Could not delete user with id " + req.params.id
});
});
};