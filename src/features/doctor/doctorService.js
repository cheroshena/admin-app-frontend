import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

//get all Doctors
const getDoctors = async () => {
    const response = await axios.get(`${base_url}doctor/`);

    return response.data;
};

//Create New Doctor
const createDoctor = async (doctor) => {
    const response = await axios.post(`${base_url}doctor/`, doctor, config);
  
    return response.data;
  };

  //Update a Doctor
const updateDoctor = async (doctor) => {
    const response = await axios.put(`${base_url}doctor/${doctor.id}`, { 
      name: doctor.doctorData.name , 
      gender: doctor.doctorData.gender, 
      qulification: doctor.doctorData.qulification,
      discription: doctor.doctorData.discription,
      regno: doctor.doctorData.regno,
      specialize: doctor.doctorData.specialize,
      expirience: doctor.doctorData.expirience,
      timeduration: doctor.doctorData.timeduration,
      quantity: doctor.doctorData.quantity,
      images: doctor.doctorData.images }, config);
  
    return response.data;
  };
  
  //Get a Doctor
  const getDoctor = async (id) => {
    const response = await axios.get(`${base_url}doctor/${id}`, config);
  
    return response.data;
  };
  
  //Delete a Doctor
  const deleteDoctor = async (id) => {
    const response = await axios.delete(`${base_url}doctor/${id}`, config);
  
    return response.data;
  };

const doctorService = {
    getDoctors,
    createDoctor,
    updateDoctor,
    getDoctor,
    deleteDoctor,
};

export default doctorService;