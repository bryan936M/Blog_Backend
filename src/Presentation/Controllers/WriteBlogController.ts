import { Request, Response } from "express";
import { WriteBlog } from "../../Application";
import IController from "./Icontroller";
import sendResponse from "../../Utils/FormateData";


export default class WriteBlogController implements IController{

  constructor(private _write: WriteBlog) {}

  public async handle(req: Request, res: Response): Promise<void> {

    const results = await this._write.execute(req.body);

    return sendResponse(res, results);

  }

}
