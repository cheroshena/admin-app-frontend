import React from 'react'
import CustomInput from '../components/CustomInput'

const Resetpassword = () => {
  return (
    <div className="py-5" style={{ background: "linear-gradient(to right, rgb(95, 183, 218), rgb(250, 118, 255))", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Reset Password</h3>
        <p className="text-center">Please enter your New Password</p>
        <form action="">
        <CustomInput type="password" label="New Password" id="pass" />
          <CustomInput type="password" label="Confirm Password" id="pass" />
          <button className="border-0 px-3 py-2 text-white fw-bold w-100" type="submit" style={{ background: "linear-gradient(to right, rgb(95, 183, 218), rgb(250, 118, 255))" }} >Reset</button>
        </form>
      </div>
    </div>
  )
}

export default Resetpassword