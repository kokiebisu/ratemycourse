const Course = require('../models/Course');

module.exports = app => {
  app.get('/courses', async (req, res) => {
    try {
      const courses = await Course.find();
      console.log(courses);
      res.status(200).json({
        status: 'success',
        courses
      });
    } catch (err) {
      res.status(404).json({
        status: 'error',
        message: err
      });
    }
  });

  app.post('/courses', async (req, res) => {
    try {
      const newCourse = await Course.create(req.body);
      res.status(200).json({
        status: 'success',
        newCourse
      });
    } catch (err) {
      res.status(404).json({
        status: 'error',
        message: err
      });
    }
  });

  app.get('/courses/:id', async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        course
      });
    } catch (err) {
      res.status(404).json({
        status: 'error',
        message: err
      });
    }
  });
};
