import * as express from 'express';
import { Request, Response } from 'express';

export abstract class BaseController {
  /**
   * Implementation the subclasses will figure out
   */

  protected abstract executeImplementation(
    req: Request,
    res: Response
  ): Promise<void | any>;

  /**
   * What we will call in the route handler
   */
  public async execute(req: Request, res: express.Response): Promise<void> {
    try {
      await this.executeImplementation(req, res);
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`);
      console.log(err);
      this.fail(res, 'An unexpected error occured');
    }
  }

  public static jsonResponse(res: Response, code: number, message: string) {
    return res.status(code).json({ message });
  }

  public ok<T>(res: Response, dto?: T) {
    if (!!dto) {
      res.type('application/json');
      return res.status(200).json(dto);
    } else {
      return res.status(200);
    }
  }

  public created(res: Response) {
    return res.status(201);
  }

  public clientError(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      400,
      message ? message : 'Unauthorized'
    );
  }

  public badRequest(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      400,
      message ? message : 'Bad request'
    );
  }

  public unauthorized(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      401,
      message ? message : 'Unauthorized'
    );
  }

  public forbidden(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      403,
      message ? message : 'Forbidden'
    );
  }

  public notFound(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      404,
      message ? message : 'Not Found'
    );
  }

  public tooMany(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      429,
      message ? message : 'Too many requests'
    );
  }

  public fail(res: Response, error: Error | string) {
      console.log(error);
      return res.status(500).json({
          message: error.toString();
      })
  }
}
