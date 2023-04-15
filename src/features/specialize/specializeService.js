import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

//get all Specializes
const getSpecializes = async () => {
    const response = await axios.get(`${base_url}specialize/`);

    return response.data;
};

//Create New Specialize
const createSpecialize = async (specialize) => {
    const response = await axios.post(`${base_url}specialize/`, specialize, config);

    return response.data;
};

//Update a Specialize
const updateSpecialize = async (specialize) => {
    const response = await axios.put(`${base_url}specialize/${specialize.id}`, { title: specialize.specializeData.title }, config);

    return response.data;
};

//Get a Specialize
const getSpecialize = async (id) => {
    const response = await axios.get(`${base_url}specialize/${id}`, config);

    return response.data;
};

//Delete a Specialize
const deleteSpecialize = async (id) => {
    const response = await axios.delete(`${base_url}specialize/${id}`, config);

    return response.data;
};

const specializeService = {
    getSpecializes,
    createSpecialize,
    updateSpecialize,
    getSpecialize,
    deleteSpecialize,
};

export default specializeService;