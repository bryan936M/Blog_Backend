import { IBlog } from "../Domain/Blog";
import { IBlogRepository } from "../Interfaces/IBlogRepository";

export default class InMemoryRepository implements IBlogRepository {
  private readonly _blogs: IBlog[] = [];

  readAll(): Promise<IBlog[]> {
    return Promise.resolve(this._blogs);
  }
  create(blog: IBlog): Promise<{ id: string }> {
    this._blogs.push(blog);
    return Promise.resolve({ id: blog.id });
  }
  findWithId(id: string): Promise<IBlog | null> {
    const blog = this._blogs.find((b) => b.id === id);
    return Promise.resolve(blog || null);
  }
  update(blog: IBlog): Promise<IBlog> {
    throw new Error("Method not implemented.");
  }
  deleteWithId(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
