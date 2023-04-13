import React, { useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createNewBlogCat } from '../features/bcategory/bcategorySlice';


let schema = yup.object().shape({
    title: yup.string().required("Blog category is Required"),
});

const Addblogcat = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newBlogCategory = useSelector((state) => state.bCategory);
    const { isSuccess, isError, isLoading, createBlogCategory } = newBlogCategory;
    useEffect(() => {
        if (isSuccess && createBlogCategory) {
            toast.success("Blog Category Added Successfullly!");
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

            dispatch(createNewBlogCat(values));
            formik.resetForm();

            setTimeout(() => {
                navigate("/admin/blog-category-list");
            }, 3000);
        },
    });
    return (
        <div>
            <h3 className="mb-4 title">Add Blog Category</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        name="title"
                        onChng={formik.handleChange("title")}
                        onBlr={formik.handleBlur("title")}
                        val={formik.values.title}
                        id="blogcat"
                        label="Enter Blog Category"
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
                        Add Blog Category
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Addblogcat