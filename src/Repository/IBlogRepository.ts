import { IBlog } from "../Domain/Blog";

export interface IBlogRepository {
  readAll(): Promise<IBlog[]>;
  create(blog: IBlog): Promise<{id: string}>;
  findWithId(id: string): Promise<IBlog | null>;
  update(blog: IBlog): Promise<IBlog>;
}
