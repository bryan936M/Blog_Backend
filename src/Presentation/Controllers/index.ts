// Handle Requests and Responses

import express, {Request, Response, NextFunction} from "express";
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
    app.post('/create',((req, res, next) => this.create(req, res, next)));
    app.get('/read', ((req, res, next) => this.read(req, res, next)));
  }
  
  public index(req: Request, res: Response) {
    res.send('This is the blog service!')
  }

  public create(req: Request, res: Response, next: NextFunction) {
    
    this.writeBlogController.handle(req, res).catch(err => {
      next(err);
    });
  
  }

  
  public read(req: Request, res: Response, next: NextFunction) {
    
    console.log('BlogController.read...')
    this.readBlogsController.handle(req, res).catch(err => {
      next(err);
    });;
    
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
