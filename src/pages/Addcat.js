import React, { useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createCategory } from '../features/pcategory/pcategorySlice';

let schema = yup.object().shape({
    title: yup.string().required("Category is Required"),
});
const Addcat = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newCategory = useSelector((state) => state.pCategory);
    const { isSuccess, isError, isLoading, createdCategory } = newCategory;
    useEffect(() => {
        if (isSuccess && createdCategory) {
            toast.success("Category Added Successfullly!");
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

            dispatch(createCategory(values));
            formik.resetForm();

            setTimeout(() => {
                navigate("/admin/list-category");
            }, 3000);
        },
    });
    return (
        <div>
            <h3 className="mb-4 title">Add Product Category</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput type="text"
                        label="Enter Product Category"
                        name="title"
                        onChng={formik.handleChange("title")}
                        onBlr={formik.handleBlur("title")}
                        val={formik.values.title}
                        id="category"
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
                        Add Product Category
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Addcat