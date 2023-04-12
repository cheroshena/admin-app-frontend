import React, { useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createSpecialize } from '../features/specialize/specializeSlice';

let schema = yup.object().shape({
    title: yup.string().required("Specialize is Required"),
});

export const Addspecialize = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newSpecialize = useSelector((state) => state.specialize);
    const { isSuccess, isError, isLoading, createdSpecialize } = newSpecialize;
    useEffect(() => {
        if (isSuccess && createdSpecialize) {
            toast.success("Specialize Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }

    }, [isSuccess, isError, isLoading]);
    const formik = useFormik({
        initialValues: {
            title: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {

            dispatch(createSpecialize(values));
            formik.resetForm();

            setTimeout(() => {
                navigate("/admin/list-docbrand");
            }, 3000);
        },
    });
    return (
        <div>
            <h3 className="mb-4 title">Add Doctor Specialization</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput type="text"
                        label="Enter Doctor Specialization"
                        name="title"
                        onChng={formik.handleChange("title")}
                        onBlr={formik.handleBlur("title")}
                        val={formik.values.title}
                        id="specialize"
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
                        Add Product Specialize
                    </button>
                </form>
            </div>
        </div>
    )
}
