import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";


const login = async (user) => {
    const response = await axios.post(`${base_url}user/admin-login`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const getOrders = async () => {
    
    const response = await axios.get(`${base_url}user/getallorders/`, config);

    return response.data;
};

const getChannels = async () => {
    
    const response = await axios.get(`${base_url}user/getallchannels/`, config);

    return response.data;
};



const authService = {
    login,
    getOrders,
    getChannels,
}

export default authService;