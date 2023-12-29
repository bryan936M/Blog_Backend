import { IBlogRepository } from "../Repository/IBlogRepository";
import { IUseCase } from "./IUseCase";

interface IBlogId {
  id: string,
}

export default class DeleteBlog implements IUseCase<IBlogId, void> {
  constructor (private readonly _blogRepository: IBlogRepository) {}
  
  public async execute(input: IBlogId): Promise<void> {

    return this._blogRepository.deleteWithId(input.id).catch((err: any) => { return err.message; });
    
  }
}