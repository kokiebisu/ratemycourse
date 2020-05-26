import { Application, Request, Response } from 'express';
import { CourseController } from '../controllers/courseController';

export class Routes {
  public courseController: CourseController = new CourseController();

  public routes(app: Application): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send('hello world');
    });

    app
      .route('/courses')
      .get(this.courseController.getCourses)
      .post(this.courseController.addNewCourse);

    app
      .route('/courses/:id')
      .get(this.courseController.getCourseById)
      .put(this.courseController.updateCourseById)
      .delete(this.courseController.deleteCourseById);
  }
}
