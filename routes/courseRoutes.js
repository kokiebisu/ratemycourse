const mongoose = require('mongoose');

const Router = mongoose.Router();
const Course = mongoose.model('courses');

Router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      status: 'success',
      courses,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
});

Router.post('/', async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(200).json({
      status: 'success',
      newCourse,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
});

Router.get('/:id', async (req, res) => {
  try {
    id = req.params.id;
    console.log();
    const course = await Course.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      course,
    });
  } catch (err) {
    res.status(404).json({
      status: 'error',
      message: err,
    });
  }
});
