import React, { useEffect } from 'react';
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getEnquiries } from '../features/enquiry/enquirySlice';


const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: " Name",
    dataIndex: "name",
  },
  {
    title: " Comment ",
    dataIndex: "comment",
  },
  {
    title: " Contact No ",
    dataIndex: "mobile",
  },
  {
    title: " Email ",
    dataIndex: "email",
  },
  {
    title: " Status ",
    dataIndex: "status",
  },
  {
    title: " Action",
    dataIndex: "action",
  },

];

const Enquiries = () => {
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getEnquiries());
  }, []);
  const enquiryState = useSelector((state) => state.enquiry.enquiries);
  const data1 = [];
  for (let i = 0; i < enquiryState.length; i++) {
    data1.push({
      key: i + 1,
      name: enquiryState[i].name,
      email: enquiryState[i].email,
      comment: enquiryState[i].comment,
      mobile: enquiryState[i].mobile,
      status: enquiryState[i].status,
      status: (
        <>
          <select name="" className="form-control form-select" id="">
            <option value="">Set Status</option>
            <option value="">Thank You</option>
          </select>
        </>
      ),
      action: (
        <>
            <Link className="ms-3 fs-3 text-danger" to="/">
                <AiFillDelete />
            </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default Enquiries