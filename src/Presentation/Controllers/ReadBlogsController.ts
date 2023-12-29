import { Request, Response } from "express";
import IController from "./Icontroller";
import { ReadBlogs } from "../../Application";
import sendResponse from "../../Utils/FormateData";


export default class ReadBlogsController implements IController {

  constructor(private readonly _read: ReadBlogs) {}

  public async handle(req: Request, res: Response): Promise<void> {
      console.log('ReadBlogsController...')
      const results = await this._read.execute();
      console.log(results);
      sendResponse(res, results);
  
    }

}