import Blog from '../Domain';
import { IBlogRepository } from "../Repository/IBlogRepository";
import { IUseCase } from "./IUseCase";


interface IWriteBlogInput {
  title: string;
  coverImg: string;
  content: string;
  author: string;
}

interface IWriteBlogOutput {
  id: string,
}


export default class WriteBlog implements IUseCase<IWriteBlogInput, IWriteBlogOutput> {

  constructor (private readonly _blogRepository: IBlogRepository) {}

  public async execute(input: IWriteBlogInput): Promise<IWriteBlogOutput> {
    
    const blog = Blog.create({
      title: input.title,
      content:input.content,
      coverImg:input.coverImg,
      author:input.author,
      createdAt: new Date(Date.now())

    });

    return await this._blogRepository.create(blog);

  }
}