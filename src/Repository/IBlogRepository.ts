import { IBlog } from "../Domain/Blog";

export interface IBlogRepository {
  readAll(): Promise<IBlog[]>;
}
