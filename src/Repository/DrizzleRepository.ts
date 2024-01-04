import { NeonHttpDatabase } from "drizzle-orm/neon-http";
import { IBlog } from "../Domain/Blog";
import Blog from "../Domain";
import { IBlogRepository } from "../Interfaces/IBlogRepository";
import { blog } from "../Utils/db/schema";

export default class DrizzleRepository implements IBlogRepository {
  constructor(private readonly db: NeonHttpDatabase) {}

  async readAll(): Promise<IBlog[]> {
    const blogs = await this.db.select().from(blog).execute();

    return;
  }
  async create(blog: IBlog): Promise<{ id: string }> {
    throw new Error("Method not implemented.");
  }
  async findWithId(id: string): Promise<IBlog | null> {
    throw new Error("Method not implemented.");
  }
  async update(blog: IBlog): Promise<IBlog> {
    throw new Error("Method not implemented.");
  }
  async deleteWithId(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}