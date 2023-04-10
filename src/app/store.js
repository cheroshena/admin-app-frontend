import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import doctorReducer from "../features/doctor/doctorSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import colorReducer from "../features/color/colorSlice";
import specializeReducer from "../features/specialize/specializeSlice";
import blogReducer from "../features/blogs/blogSlice";
import bcategoryReducer from "../features/bcategory/bcategorySlice";
import enquiryReducer from "../features/enquiry/enquirySlice";



export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        doctor: doctorReducer,
        pCategory: pCategoryReducer,
        color: colorReducer,
        specialize: specializeReducer,
        blog:blogReducer,
        bcategory: bcategoryReducer,
        enquiry:enquiryReducer,
    },

});