import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getDoctors = async () => {
    const response = await axios.get(`${base_url}doctor/`);

    return response.data;
};

const doctorService = {
    getDoctors,
};

export default doctorService;