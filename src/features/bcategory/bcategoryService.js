import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getBcategorys = async () => {
    const response = await axios.get(`${base_url}blogcategory/`);

    return response.data;
};

const bcategoryService = {
    getBcategorys,
};

export default bcategoryService;