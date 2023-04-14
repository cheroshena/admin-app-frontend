import React, { useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createBrand, resetState } from '../features/brand/brandSlice';

let schema = yup.object().shape({
    title: yup.string().required("Brand is Required"),
});

const Addbrand = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newBrand = useSelector((state) => state.brand);
    const { isSuccess, isError, isLoading, createdBrand } = newBrand;
    useEffect(() => {
        if (isSuccess && createdBrand) {
            toast.success("Brand Added Successfullly!");
          }
          if (isError) {
            toast.error("Something Went Wrong!");
          }

    },[isSuccess, isError, isLoading]);
    const formik = useFormik({
        initialValues: {
            title: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {

            dispatch(createBrand(values));
            formik.resetForm();

            setTimeout(() => {
                dispatch(resetState());
                navigate("/admin/list-brand");
            }, 3000);
        },
    });
    return (
        <div>
            <h3 className="mb-4 title">Add Product Brand</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput type="text"
                        label="Enter Product Brand"
                        name="title"
                        onChng={formik.handleChange("title")}
                        onBlr={formik.handleBlur("title")}
                        val={formik.values.title}
                        id="brand"
                    />
                    <div className="error">
                        {
                            formik.touched.title && formik.errors.title
                        }
                    </div>
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        Add Product Brand
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Addbrand