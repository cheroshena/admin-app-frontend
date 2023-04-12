import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getSpecializes = async () => {
    const response = await axios.get(`${base_url}specialize/`);

    return response.data;
};
const createSpecialize = async (specialize) => {
    const response = await axios.post(`${base_url}specialize/`, specialize, config);

    return response.data;
};

const specializeService = {
    getSpecializes,
    createSpecialize,
};

export default specializeService;