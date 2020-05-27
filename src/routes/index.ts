import { Application, Request, Response } from 'express';
import { CourseController } from '../controllers/courseController';

export class Routes {
  public courseController: CourseController = new CourseController();

  public routes(app: Application): void {
    app
      .route('/api/courses')
      .get(this.courseController.getCourses)
      .post(this.courseController.addNewCourse);

    app
      .route('/api/courses/:courseId')
      .get(this.courseController.getCourseById)
      .put(this.courseController.updateCourseById)
      .delete(this.courseController.deleteCourseById);

    app.route('/api/dummy').get(this.courseController.seedDummyData);
  }
}
