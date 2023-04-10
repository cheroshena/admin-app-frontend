import React, { useEffect } from 'react';
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getColors } from '../features/color/colorSlice';

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: " Title",
        dataIndex: "title",
    },
    {
        title: " Action",
        dataIndex: "action",
    },

];

const Colorlist = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getColors());
    }, []);
    const colorState = useSelector((state) => state.color.colors);
    const data1 = [];
    for (let i = 0; i < colorState.length; i++) {
        data1.push({
            key: i + 1,
            title: colorState[i].title,
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
            <h3 className="mb-4 title">Color List</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default Colorlist
