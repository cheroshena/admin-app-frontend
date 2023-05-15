import React, { useEffect, useState } from 'react';
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { deleteADoctor, getDoctors, resetState } from '../features/doctor/doctorSlice';
import CustomModal from '../components/CustomModal';

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
    dataIndex: "specialize",
  },
  {
    title: "Time Duration",
    dataIndex: "timeduration",
  },

  {
    title: "Experience",
    dataIndex: "expirience",
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
  const [open, setOpen] = useState(false);
  const [doctorId, setdoctorId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setdoctorId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((resetState()));
    dispatch(getDoctors());
  }, []);

  const doctorState = useSelector((state) => state.doctor.doctors)
  const data1 = [];
  for (let i = 0; i < doctorState.length; i++) {
    data1.push({
      key: i + 1,
      name: doctorState[i].name,
      regno: doctorState[i].regno,
      specialize: doctorState[i].specialize,
      timeduration: doctorState[i].timeduration,
      discription: doctorState[i].discription,
      expirience: doctorState[i].expirience,
      doctotalrating: doctorState[i].doctotalrating,
      action: (
        <>
          <Link className="fs-3 text-success" to={`/admin/doctor/${doctorState[i]._id}`}>
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(doctorState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const deleteDoctor = (e) => {
    dispatch(deleteADoctor(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getDoctors());
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">Doctors List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteDoctor(doctorId);
        }}
        title="Are you sure you want to delete this Doctor?"
      />
    </div>
  )
}

export default Doctorlist
