import * as express from 'express';
import { Request, Response } from 'express';

class CourseController {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.callRouter();
  }

  public callRouter() {
    this.router.get('/courses', this.getAllCourses);
  }

  private getAllCourses = (req: Request, res: Response) => {
    console.log('getallcourses called');
  };
}

export default CourseController;
