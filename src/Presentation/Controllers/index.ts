// Handle Requests and Responses

import express, {Request, Response} from "express";
import WriteBlogController from "./WriteBlogController";
import ReadBlogsController from "./ReadBlogsController";
import UpdateBlogController from "./UpdateBlogController";
import DeleteBlogController from "./DeleteBlogController";



export default class BlogController {

  constructor(
    private readonly writeBlogController: WriteBlogController,
    private readonly readBlogsController: ReadBlogsController
  ){}

  public route(app: express.Application) {
    app.get('/', this.index);
    app.post('/create', this.create);
    app.get('/read', this.read);
  }
  
  public index(req: Request, res: Response) {
    res.send('This is the blog service!')
  }

  public create(req: Request, res: Response) {
    
    this.writeBlogController.handle(req, res);
  
  }

  
  public read(req: Request, res: Response) {
  
    this.readBlogsController.handle(req, res);
    
  }

  
  public update(req: Request, res: Response) {
  
    UpdateBlogController.handle(req, res);

  }

  
  public delete(req: Request, res: Response) {
  
    DeleteBlogController.handle(req, res);
  
  }
  
  
}

export {default as WriteBlogController} from "./WriteBlogController";
export {default as ReadBlogsController} from "./ReadBlogsController";
