import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getDoctors = async () => {
    const response = await axios.get(`${base_url}doctor/`);

    return response.data;
};

const createDoctor = async (doctor) => {
    const response = await axios.post(`${base_url}doctor/`, doctor, config);
  
    return response.data;
  };

const doctorService = {
    getDoctors,
    createDoctor,
};

export default doctorService;