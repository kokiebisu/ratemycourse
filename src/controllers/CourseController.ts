import * as mongoose from 'mongoose';
import { CourseSchema } from '../models/Course';
import { Request, Response } from 'express';
import { data } from '../data/courseDummyData';

const CourseModel = mongoose.model('Course', CourseSchema);

interface Course {
  name: string;
  professor: string;
  description: string;
  happy: number;
  sad: number;
  angry: number;
  everydayStudy: number;
  midtermStudy: number;
  finalStudy: number;
}

export class CourseController {
  private dummyData: Array<Course> = data;

  /**
   * Adds new student to model
   * @param {Request} req
   * @param {Response} res
   */
  public addNewCourse = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    let newCourse = new CourseModel(req.body);
    try {
      const data = await newCourse.save();
      return res.json(data);
    } catch (err) {
      return res.send(err);
    }
  };

  /**
   * Get all available courses
   * @param req
   * @param res
   */
  public getCourses = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await CourseModel.find({});
      return res.json(data);
    } catch (err) {
      return res.send(err);
    }
  };

  /**
   * Retrieves courses based on the given id
   * @param req
   * @param res
   */
  public getCourseById = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await CourseModel.findById(req.params.courseId);
      return res.json(data);
    } catch (err) {
      return res.send(err);
    }
  };

  /**
   * Updates the course document based on the given content
   * @param req
   * @param res
   */
  public updateCourseById = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await CourseModel.findOneAndUpdate(
        { _id: req.params.courseId },
        req.body,
        { new: true }
      );
      return res.json(data);
    } catch (err) {
      return res.send(err);
    }
  };

  /**
   * Deletes the course based on the given id
   * @param req
   * @param res
   */
  public deleteCourseById = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await CourseModel.findOneAndRemove({
        _id: req.params.courseId,
      });
      return res.json(data);
    } catch (err) {
      return res.send(err);
    }
  };

  /**
   * Seeds dummy documents to the collection to start off
   * @param req
   * @param res
   * @param data
   */
  public seedDummyData = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      await CourseModel.collection.insert(this.dummyData);
      return res.json({
        message: `Successfully sent ${this.dummyData.length} sample documents`,
      });
    } catch (err) {
      return res.send(err);
    }
  };
}
