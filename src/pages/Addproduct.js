import React, { useEffect, useState } from 'react';
import CustomInput from "../components/CustomInput";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { getCategories } from '../features/pcategory/pcategorySlice';
import Multiselect from "react-widgets/Multiselect";
import { getColors } from '../features/color/colorSlice';
import "react-widgets/styles.css";

let schema = yup.object().shape({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
    price: yup.number().required("Price is Required"),
});

const Addproduct = () => {
    const dispatch = useDispatch();
    const [color,setColor] =useState([]);

    useEffect(() => {
        dispatch(getBrands());
        dispatch(getCategories());
        dispatch(getColors());
        formik.values.color=color;
    }, []);
    const brandState = useSelector((state) => state.brand.brands);
    const catState = useSelector((state) => state.pCategory.pCategories);
    const colorState = useSelector((state) => state.color.colors);
    const colors=[];
    colorState.forEach(i=>{
        colors.push({
            _id: i._id,
            color:i.title,
        })
    })

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        },
    });
    const [desc, setDesc] = useState();
    const handleDesc = (e) => {
        setDesc(e);
    };
    return (
        <div>
            <h3 className="mb-4 title">Add Product</h3>
            <div>
                <form onSubmit={formik.handleSubmit} className="d-flex gap-3 flex-column">
                    <CustomInput
                        type="text"
                        label="Enter Product Title"
                        name="title"
                        onChng={formik.handleChange("title")}
                        onBlr={formik.handleBlur("title")}
                        val={formik.values.title}
                    />
                    <div className="error">
                        {
                            formik.touched.title && formik.errors.title
                        }
                    </div>
                    <div className="">
                        <ReactQuill
                            theme="snow"
                            value={formik.values.description}
                            name="description"
                            onChange={formik.handleChange("description")}
                           
                        />
                    </div>
                    <div className="error">
                        {
                            formik.touched.description && formik.errors.description
                        }
                    </div>
                    <CustomInput
                        type="number"
                        label="Enter Product Price"
                        name="price"
                        onChng={formik.handleChange("price")}
                        
                        val={formik.values.price} />
                    <div className="error">
                        {
                            formik.touched.price && formik.errors.price
                        }
                    </div>
                    <select name="" className="form-control py-3 mb-3" id="">
                        <option value="">Select Brand</option>
                        {brandState.map((i, j) => {
                            return (
                                <option key={j} value={i.title}>{i.title}</option>
                            )
                        })}
                    </select>
                    <select name="" className="form-control py-3 mb-3" id="">
                        <option value="">Select Category</option>
                        {catState.map((i, j) => {
                            return (
                                <option key={j} value={i.title}>{i.title}</option>
                            )
                        })}
                    </select>
                    <Multiselect
                        dataKey="id"
                        textField="color"
                        placeholder="Choose the Color"
                        data={colors}
                        onChange={(e)=>setColor(e)}
                    />
                    <CustomInput type="number" label="Enter Product Price" />

                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Addproduct