import React, { useEffect, useState } from 'react';
import CustomInput from "../components/CustomInput";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from '../features/upload/uploadSlice';
import { createDoctors, resetState } from '../features/doctor/doctorSlice';
import { getSpecializes } from '../features/specialize/specializeSlice';


let schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    gender: yup.string().required("Gender is Required"),
    qulification: yup.string().required("Qulification is Required"),
    discription: yup.string().required("Description is Required"),
    regno: yup.string().required("Med.Register number is Required"),
    specialize: yup.string().required("Speciality is Required"),
    expirience: yup.string().required("Expirence is Required"),
    timeduration: yup.string().required("Available time duration is Required"),
    quantity: yup.string().required("Channeling Availability is Required"),
});


const Adddoctor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [images, setImages] = useState([]);

    useEffect(() => {

        dispatch(getSpecializes());

    }, []);

    const NewDoctor = useSelector((state) => state.doctor);
    const imgState = useSelector((state) => state.upload.images);
    const bCatState = useSelector((state) => state.specialize.specializes)
    const { isSuccess, isError, isLoading, createdDoctor } = NewDoctor;

    useEffect(() => {
        if (isSuccess && createdDoctor) {
            toast.success("Doctor Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }

    }, [isSuccess, isError, isLoading]);

    const img = [];
    imgState.forEach(i => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        })
    });


    useEffect(() => {

        formik.values.images = img;
    }, [img])

    const formik = useFormik({
        initialValues: {
            name: "",
            gender: "",
            qulification: "",
            discription: "",
            regno: "",
            specialize: "",
            expirience: "",
            timeduration: "",
            quantity: "",
            images: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {

            dispatch(createDoctors(values));
            formik.resetForm();

            setTimeout(() => {
                dispatch(resetState());
                navigate("/admin/list-doctor");
            }, 30000);
        },
    });

    const [desc, setDesc] = useState();
    const handleDesc = (e) => {
        setDesc(e);
    };
    return (
        <div>
            <h3 className="mb-4 title">Add Doctor</h3>
            <div>
                <form onSubmit={formik.handleSubmit} className="d-flex gap-3 flex-column">
                    <div className="mt-4">
                        <CustomInput type="text"
                            label="Enter Doctor Name"
                            name="name"
                            onChng={formik.handleChange("name")}
                            onBlr={formik.handleBlur("name")}
                            val={formik.values.name}
                        />
                        <div className="error">
                            {
                                formik.touched.name && formik.errors.name
                            }
                        </div>

                    </div>
                    <div className="mt-4">
                        <CustomInput type="text"
                            label="Enter Gender"
                            name="gender"
                            onChng={formik.handleChange("gender")}
                            onBlr={formik.handleBlur("gender")}
                            val={formik.values.gender}
                        />
                        <div className="error">
                            {
                                formik.touched.gender && formik.errors.gender
                            }
                        </div>

                    </div>
                    <div className="mt-4">
                        <CustomInput type="text"
                            label="Enter Qulififation"
                            name="qulification"
                            onChng={formik.handleChange("qulification")}
                            onBlr={formik.handleBlur("qulification")}
                            val={formik.values.qulification}
                        />
                        <div className="error">
                            {
                                formik.touched.qulification && formik.errors.qulification
                            }
                        </div>

                    </div>
                    <div className="mb-3">
                        <ReactQuill
                            className='mt-3'
                            theme="snow"
                            value={formik.values.discription}
                            name="discription"
                            onChange={formik.handleChange("discription")}
                        />
                    </div>
                    <div className="error">
                        {
                            formik.touched.discription && formik.errors.discription
                        }
                    </div>
                    <div className="mt-4">
                        <CustomInput type="text"
                            label="Enter Register No"
                            name="regno"
                            onChng={formik.handleChange("regno")}
                            onBlr={formik.handleBlur("regno")}
                            val={formik.values.regno}
                        />

                    </div>
                    <select name="specialize"
                        onChange={formik.handleChange("specialize")}
                        onBlur={formik.handleBlur("specialize")}
                        value={formik.values.specialize}
                        className="form-control py-3 mt-3"
                        id="">
                        <option value="">Select Speciality</option>
                        {bCatState.map((i, j) => {
                            return (
                                <option key={j} value={i.title}>
                                    {i.title}
                                </option>
                            );
                        })}
                    </select>

                    <div className="mt-4">
                        <CustomInput type="text"
                            label="Enter Expirience"
                            name="expirience"
                            onChng={formik.handleChange("expirience")}
                            onBlr={formik.handleBlur("expirience")}
                            val={formik.values.expirience}
                        />

                    </div>
                    <div className="mt-4">
                        <CustomInput type="text"
                            label="Enter Channeling Duration"
                            name="timeduration"
                            onChng={formik.handleChange("timeduration")}
                            onBlr={formik.handleBlur("timeduration")}
                            val={formik.values.timeduration}
                        />

                    </div>
                    <div className="mt-4">
                        <CustomInput type="number"
                            label="Enter Availability Paients Count"
                            name="quantity"
                            onChng={formik.handleChange("quantity")}
                            onBlr={formik.handleBlur("quantity")}
                            val={formik.values.quantity}
                        />

                    </div>
                    <div className="bg-white border-1 p-5 text-center mt-3">
                        <Dropzone
                            onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>
                                            Click the background for Upload image
                                        </p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="showimages mt-3 d-flex flex-wrap gap-3">
                        {imgState?.map((i, j) => {
                            return (
                                <div className=" position-relative" key={j}>
                                    <button
                                        type="button"
                                        onClick={() => dispatch(delImg(i.public_id))}
                                        className="btn-close position-absolute"
                                        style={{ top: "10px", right: "10px" }}
                                    ></button>

                                    <img src={i.url} alt="" width={200} height={200} />
                                </div>
                            );
                        })}
                    </div>
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        Add Doctor
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Adddoctor