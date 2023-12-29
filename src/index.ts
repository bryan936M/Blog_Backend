import { ReadBlogs, WriteBlog } from "./Application";
import ApiServer from "./Presentation/ApiServer";
import BlogController from "./Presentation/Controllers";
import {WriteBlogController, ReadBlogsController} from "./Presentation/Controllers";
import InMemoryRepository from "./Repository/InMemoryRepository";


const blogRepository = new InMemoryRepository();

const writeBlog = new WriteBlog(blogRepository);
const readBlogs = new ReadBlogs(blogRepository);

const writeBlogController = new WriteBlogController(writeBlog);
const readBlogsController = new ReadBlogsController(readBlogs);

const blogController = new BlogController(writeBlogController, readBlogsController);

new ApiServer(blogController).start(3000);