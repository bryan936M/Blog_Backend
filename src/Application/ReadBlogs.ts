import makeBlog from "../Domain";
import { IBlog } from "../Domain/Blog";
import { IBlogRepository } from "../Repository/IBlogRepository";
import { IUseCase } from "./IUseCase";

class BlogOutput {
  constructor(
    public coverImg: string,
    public title: string,
    public content: string,
    public author: string,
    public createdAt: Date
  ) {}

  public static from(blog: IBlog): BlogOutput {
    return new BlogOutput(
      blog.coverImg,
      blog.title,
      blog.content,
      blog.author,
      blog.createdAt
    );
  }
}

export default class ReadBlogs implements IUseCase<any, BlogOutput[]> {

  constructor(private readonly _blogRepository: IBlogRepository) {}

  public async execute(): Promise<BlogOutput[]> {
    
    return this._blogRepository.readAll().then((blogs) => {
      
      return blogs.map((blog) => BlogOutput.from(blog));
    });

  }
}
