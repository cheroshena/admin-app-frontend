import React, { useEffect } from 'react';
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../features/doctor/doctorSlice';

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: " Doctor Name",
    dataIndex: "name",
  },
  {
    title: "Register No.",
    dataIndex: "regno",
  },
  {
    title: " Specialize",
    dataIndex: "qulification",
  },
  {
    title: "Time Duration",
    dataIndex: "timeduration",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Experience",
    dataIndex: "experience",
  },
  {
    title: "Rating",
    dataIndex: "doctotalrating",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];




const Doctorlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctors());
  }, []);
  const doctorState = useSelector((state) => state.doctor.doctors)
  const data1 = [];
  for (let i = 0; i < doctorState.length; i++) {
    data1.push({
      key: i + 1,
      name: doctorState[i].name,
      qulification: doctorState[i].qulification,
      timeduration: doctorState[i].timeduration,
      doctotalrating: doctorState[i].doctotalrating,
      experience: doctorState[i].experience,
      description: doctorState[i].description,
      regno: doctorState[i].regno,
      action: (
        <>
          <Link className="fs-3 text-success" to="/">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Doctors List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default Doctorlist
