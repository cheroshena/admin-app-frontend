import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

//Admin Login
const login = async (user) => {
    const response = await axios.post(`${base_url}user/admin-login`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

//Get All Orders
const getOrders = async () => {

    const response = await axios.get(`${base_url}user/getallorders/`, config);

    return response.data;
};

//get all Channels
const getChannels = async () => {

    const response = await axios.get(`${base_url}user/getallchannels/`, config);

    return response.data;
};

//get single order
const getOrder = async (id) => {
    const response = await axios.post(
        `${base_url}user/getorderbyuser/${id}`,
        "",
        config
    );

    return response.data;
};

//get single channel
const getChannel = async (id) => {
    const response = await axios.post(
        `${base_url}user/getchannelbyuser/${id}`,
        "",
        config
    );

    return response.data;
};

//get Monthly orders
const getMonthlyOrders = async () => {
    const response = await axios.get(
        `${base_url}user/getMonthWiseOrderIncome`,
        config
    );

    return response.data;
};

//get Monthly orders
const getYearlyStats = async () => {
    const response = await axios.get(
        `${base_url}user/getyearlyorders`,
        config
    );

    return response.data;
};


const authService = {
    login,
    getOrders,
    getChannels,
    getOrder,
    getChannel,
    getMonthlyOrders,
    getYearlyStats,
}

export default authService;