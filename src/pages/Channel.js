import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getChannels } from "../features/auth/authSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Doctors",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];
 
const Channel = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannels());
  }, []);
  const channelState = useSelector((state) => state.auth.channels);

  const data1 = [];
  for (let i = 0; i < channelState.length; i++) {
    data1.push({
      key: i + 1,
      name: channelState[i].orderby.firstname,
      product: (
        <Link to={`/admin/channel/${channelState[i].orderby._id}`}>
          View Channels
        </Link>
      ),
      amount: channelState[i].paymentIntent.amount,
      date: new Date(channelState[i].createdAt).toLocaleString(),
      action: (
        <>
          <Link to="/" className=" fs-3 text-danger">
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
      <h3 className="mb-4 title">Channels</h3>
      <div>
      <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default Channel
