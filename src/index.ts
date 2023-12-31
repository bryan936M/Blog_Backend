import ApiServer from "./Presentation/ApiServer";
import InMemoryRepository from "./Repository/InMemoryRepository";
import { ReadBlogs, WriteBlog } from "./Application";
import {WriteBlogController, ReadBlogsController} from "./Presentation/Controllers";
import BlogController from "./Presentation/Controllers";
import {testConnection} from "./db";



async function main() {
  await testConnection();
  
  const blogRepository = new InMemoryRepository();
  
  const writeBlog = new WriteBlog(blogRepository);
  const readBlogs = new ReadBlogs(blogRepository);
  
  const writeBlogController = new WriteBlogController(writeBlog);
  const readBlogsController = new ReadBlogsController(readBlogs);
  
  const blogController = new BlogController(writeBlogController, readBlogsController);
  
  new ApiServer(blogController).start(3000);
}

main();