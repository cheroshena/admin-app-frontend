import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

//get all Blogs
const getBlogs = async () => {
    const response = await axios.get(`${base_url}blog/`);

    return response.data;
};

//Create New Blog
const createBlog = async (blog) => {
  const response = await axios.post(`${base_url}blog/`, blog, config);

  return response.data;
};

//Update a Blog
const updateBlog = async (blog) => {
  const response = await axios.put(`${base_url}blog/${blog.id}`, { 
    title: blog.blogData.title , 
    description: blog.blogData.description, 
    category: blog.blogData.category,
    images: blog.blogData.images }, config);

  return response.data;
};

//Get a Blog
const getBlog = async (id) => {
  const response = await axios.get(`${base_url}blog/${id}`, config);

  return response.data;
};

//Delete a Blog
const deleteBlog = async (id) => {
  const response = await axios.delete(`${base_url}blog/${id}`, config);

  return response.data;
};


const blogService = {
    getBlogs,
    createBlog,
    updateBlog,
    getBlog,
    deleteBlog,
};

export default blogService;