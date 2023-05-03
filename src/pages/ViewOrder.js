import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { getOrder, getOrderByUser, getOrders } from "../features/auth/authSlice";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Product Name",
        dataIndex: "name",
    },
    {
        title: "Brand",
        dataIndex: "brand",
    },
    {
        title: "Count",
        dataIndex: "count",
    },
    {
        title: "Amount",
        dataIndex: "amount",
    },
    {
        title: "Date",
        dataIndex: "date",
    },

    
];


const ViewOrder = () => {
    const location = useLocation();
    const orderId = location.pathname.split("/")[3];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrder(orderId));
    }, []);
    const orderState = useSelector((state) => state?.auth?.singleOrder?.orders);
    console.log(orderState);

    const data1 = [];
    for (let i = 0; i < orderState?.orderItems?.length; i++) {
        data1.push({
            key: i + 1,
            name: orderState?.orderItems[i]?.product?.title,
            count: orderState?.orderItems[i]?.quantity,
            amount: orderState?.orderItems[i]?.product?.price,
            brand: orderState?.orderItems[i]?.product?.brand,
            date:  orderState?.orderItems[i]?.product?.createdAt,
            
        });
    }
    return (
        <div>
            <h3 className="mb-4 title">Orders</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
};

export default ViewOrder;
