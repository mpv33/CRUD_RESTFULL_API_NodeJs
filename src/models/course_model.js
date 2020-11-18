const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    course_id: String,
    course_title: String,
    course_description: String,
    course_duration: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', CourseSchema);