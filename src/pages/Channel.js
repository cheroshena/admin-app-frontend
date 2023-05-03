import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getChannels, updateAChannel } from "../features/auth/authSlice";

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
    title: "Date",
    dataIndex: "date",
  },

  {
    title: "Update Status",
    dataIndex: "action",
  },
];

const Channel = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannels());
  }, []);
  const channelState = useSelector((state) => state?.auth?.channels?.orders);

  const data1 = [];
  for (let i = 0; i < channelState?.length; i++) {
    data1.push({
      key: i + 1,
      name: channelState[i]?.user?.firstname,
      product: (
        <Link to={`/admin/channel/${channelState[i]?._id}`}>
          View Channels
        </Link>
      ),
      amount: channelState[i]?.totalPrice,
      date: new Date(channelState[i].createdAt).toLocaleString(),
      action: (
        <>
          <select name="" defaultValue={channelState[i]?.orderStatus} onChange={(e)=>updateOrderStatus(channelState[i]?._id,e.target.value)} className="form-control form-select" id="">
            <option value="Channeling" disabled selected>Channeling</option>
            <option value="Accept & Channel No: 01">Accept & Channel No: 01</option>
            <option value="Accept & Channel No: 02">Accept & Channel No: 02</option>
            <option value="Accept & Channel No: 03">Accept & Channel No: 03</option>
            <option value="Accept & Channel No: 04">Accept & Channel No: 04</option>
            <option value="Accept & Channel No: 05">Accept & Channel No: 05</option>
            <option value="Accept & Channel No: 06">Accept & Channel No: 06</option>
            <option value="Accept & Channel No: 07">Accept & Channel No: 07</option>
            <option value="Accept & Channel No: 08">Accept & Channel No: 08</option>
            <option value="Accept & Channel No: 09">Accept & Channel No: 09</option>
            <option value="Accept & Channel No: 10">Accept & Channel No: 10</option>
            <option value="Rejected">Rejected</option>
          </select>
        </>
      ),
    });
  }

  const updateOrderStatus = (a,b) => {
    dispatch(updateAChannel({id:a,status:b}))
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
