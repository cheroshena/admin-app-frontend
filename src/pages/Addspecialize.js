import React, { useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createSpecialize, getASpecialize, resetState, updateASpecialize } from '../features/specialize/specializeSlice';

let schema = yup.object().shape({
    title: yup.string().required("Specialize is Required"),
});

export const Addspecialize = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getSpecializeId = location.pathname.split("/")[3];
    const newSpecialize = useSelector((state) => state.specialize);
    const { isSuccess, isError, isLoading, createdSpecialize, specialName, updatedSpecialize } = newSpecialize;

    useEffect(() => {
        if (getSpecializeId !== undefined) {
            dispatch(getASpecialize(getSpecializeId));


        } else {
            dispatch(resetState());
        }
    }, [getSpecializeId]);

    useEffect(() => {
        if (isSuccess && createdSpecialize) {
            toast.success("Specialize Added Successfullly!");
        }
        if (isSuccess && updatedSpecialize) {
            toast.success("Speciality Updated Successfully!")
            navigate("/admin/list-docbrand")
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }

    }, [isSuccess, isError, isLoading]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: specialName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (getSpecializeId !== undefined) {
                const data = { id: getSpecializeId, specializeData: values };
                dispatch(updateASpecialize(data));
                dispatch(resetState());

            } else {
                dispatch(createSpecialize(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                    navigate("/admin/list-docbrand");
                }, 3000);

            }


        },
    });
    return (
        <div>
            <h3 className="mb-4 title">{getSpecializeId !== undefined ? "Edit" : "Add"} Doctor Specialization</h3>
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
                        {getSpecializeId !== undefined ? "Edit" : "Add"} Doctor Specialize
                    </button>
                </form>
            </div>
        </div>
    )
}
