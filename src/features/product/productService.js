import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

//get all Products
const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};

//Create New Product
const createProduct = async (product) => {
  const response = await axios.post(`${base_url}product/`, product, config);

  return response.data;
};

//Update a Product
const updateProduct = async (product) => {
  const response = await axios.put(`${base_url}product/${product.id}`, { 
    title: product.productData.title , 
    description: product.productData.description, 
    price:product.productData.price,
    brand:product.productData.brand,
    category: product.productData.category,
    tags:product.productData.tags,
    quantity:product.productData.quantity,
    images: product.productData.images }, config);

  return response.data;
};

//Get a Product
const getProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`, config);

  return response.data;
};

//Delete a Product
const deleteProduct = async (id) => {
  const response = await axios.delete(`${base_url}product/${id}`, config);

  return response.data;
};

const productService = {
  getProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
};

export default productService;