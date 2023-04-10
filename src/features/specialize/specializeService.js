import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getSpecializes = async () => {
    const response = await axios.get(`${base_url}specialize/`);

    return response.data;
};

const specializeService = {
    getSpecializes,
};

export default specializeService;