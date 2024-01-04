import { NeonHttpDatabase } from "drizzle-orm/neon-http";
import { BlogClass } from "../Domain";
import { IBlogRepository } from "../Interfaces/IBlogRepository";
import { blog } from "../Utils/db/schema";

export default class DrizzleRepository implements IBlogRepository {
  constructor(private readonly db: NeonHttpDatabase) {}

  async readAll(): Promise<BlogClass[]> {
    const blogs = await this.db.select().from(blog).execute();

    if (!blogs) {
      return [];
    }

    return blogs.map((blog) => {
      return new BlogClass({
        id: blog.id,
        title: blog.title,
        content: blog.content,
        createdAt: new Date(blog.createdAt),
        coverImg: blog.coverImg,
        author: blog.author,
      });
    });
  }
  async create(blog: BlogClass): Promise<{ id: string }> {
    throw new Error("Method not implemented.");
  }
  async findWithId(id: string): Promise<BlogClass | null> {
    throw new Error("Method not implemented.");
  }
  async update(blog: BlogClass): Promise<BlogClass> {
    throw new Error("Method not implemented.");
  }
  async deleteWithId(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}