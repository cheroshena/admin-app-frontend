import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { getChannel, getChannelByUser, getChannels } from "../features/auth/authSlice";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Doctor Name",
        dataIndex: "name",
    },
    {
        title: "Time Duration",
        dataIndex: "timeduration",
    },
    {
        title: "Medical Register Number",
        dataIndex: "regno",
    },
    {
        title: "Speciality",
        dataIndex: "specialize",
    },
    {
        title: "Date",
        dataIndex: "date",
    },
    {
        title: "Booking Count",
        dataIndex: "count",
    },

];

const ViewChannel = () => {
    const location = useLocation();
    const orderId = location.pathname.split("/")[3];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getChannel(orderId));
    }, []);
    const channelState = useSelector((state) => state?.auth?.singleChannel?.orders);
    console.log(channelState);

    const data1 = [];
    for (let i = 0; i < channelState?.orderItems?.length; i++) {
        data1.push({
            key: i + 1,
            name: channelState.orderItems[i]?.doctor?.name,
            timeduration: channelState.orderItems[i]?.doctor?.timeduration,
            date: channelState.orderItems[i]?.doctor?.createdAt,
            specialize: channelState.orderItems[i]?.doctor?.specialize,
            regno: channelState.orderItems[i]?.doctor?.regno,
            count: channelState.count,
            
            
            
        });
    }
    return (
        <div>
            <h3 className="mb-4 title">Channel</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default ViewChannel