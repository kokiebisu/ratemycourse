import * as express from 'express';
import { Request, Response } from 'express';


export class CourseController extends BaseController {

  protected async executeImplementation(req: Request, res: Response): Promise<void | any> {
    try {

    } catch (err) {
      return this.fail(err.toString())
    }
  }

  // public path = '/';
  // public router = express.Router();

  // constructor() {
  //   this.callRouter();
  // }

  // public callRouter() {
  //   this.router.get('/courses', this.getAllCourses);
  // }

  // private getAllCourses = (req: Request, res: Response) => {
  //   console.log('getallcourses called');
  // };
}

export default CourseController;
