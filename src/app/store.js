import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import doctorReducer from "../features/doctor/doctorSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";

import specializeReducer from "../features/specialize/specializeSlice";
import blogReducer from "../features/blogs/blogSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import uploadReducer from "../features/upload/uploadSlice";
import bCategoryReducer from "../features/bcategory/bcategorySlice";
import couponReducer from "../features/coupon/couponSlice";



export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        doctor: doctorReducer,
        pCategory: pCategoryReducer,
        specialize: specializeReducer,
        blog:blogReducer,
        enquiry:enquiryReducer,
        upload:uploadReducer,
        bCategory:bCategoryReducer,
        coupon:couponReducer,
    },

});