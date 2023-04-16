import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

//get all Enquiries
const getEnquiries = async () => {
    const response = await axios.get(`${base_url}enquiry/`);

    return response.data;
};

//Delete a Enquiry
const deleteAEnquiry = async (id) => {
    const response = await axios.delete(`${base_url}enquiry/${id}`, config);

    return response.data;
};

//Get a Enquiry
const getEnquiry = async (id) => {
    const response = await axios.get(`${base_url}enquiry/${id}`);
    return response.data;
};


//Update a Enquiry
const udpateEnquiry = async (enq) => {
    const response = await axios.put(
        `${base_url}enquiry/${enq.id}`,
        { status: enq.enqData },
        config
    );
    return response.data;
};

const enquiryService = {
    getEnquiries,
    deleteAEnquiry,
    getEnquiry,
    udpateEnquiry,
};


export default enquiryService;