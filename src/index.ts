import ApiServer from "./Presentation/ApiServer";
import InMemoryRepository from "./Repository/InMemoryRepository";
import BlogController from "./Presentation/Controllers";
import { ReadBlogs, WriteBlog } from "./Application";
import {WriteBlogController, ReadBlogsController} from "./Presentation/Controllers";
import {testConnection} from "./Utils/db";



async function main() {
  await testConnection();
  
  // Repository
  const blogRepository = new InMemoryRepository();
  
  // Use Cases
  const writeBlog = new WriteBlog(blogRepository);
  const readBlogs = new ReadBlogs(blogRepository);
  
  // Controllers
  const writeBlogController = new WriteBlogController(writeBlog);
  const readBlogsController = new ReadBlogsController(readBlogs);
  
  const blogController = new BlogController(writeBlogController, readBlogsController);
  
  new ApiServer(blogController).start(3000);
}

main();