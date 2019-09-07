const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
  name: { type: String, required: true },
  professor: { type: String, required: true },
  description: { type: String, required: true }
});

const Course = mongoose.model('courses', CourseSchema);

module.exports = Course;
