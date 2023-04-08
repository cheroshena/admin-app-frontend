import React, { useEffect } from "react";
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useDispatch,useSelector} from "react-redux";
import { login } from '../features/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  let Schema = Yup.object().shape({
    email: Yup.string().email("Email should be valid !").required("email is Required"),
    password: Yup.string().required("password is Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      dispatch(login(values))
      alert(JSON.stringify(values, null, 2));
    },
  });
  const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth);
 
  useEffect(()=>{
    console.log(user);
  });
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">
          Login
        </h3>
        <p className="text-center">
          Login to your account to continue
        </p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput type="text"
            name="email"
            label="Email Address"
            val={formik.values.email}
            onCh={formik.handleChange("email")}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            id="pass"
            val={formik.values.password}
            onCh={formik.handleChange("password")}
          />
          <div className="error">
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          </div>
          <div className="mb-3 text-end">
            <Link
              to="/forgot-password"
              className="text-dark">
              Forgot Password
            </Link>
          </div>
          <button

            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            type="submit"
            style={{ background: "#ffd333" }} >
            Login
          </button >
        </form>
      </div>
    </div>
  )
}

export default Login