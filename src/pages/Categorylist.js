import React, { useEffect } from 'react';
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../features/pcategory/pcategorySlice';


const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: " Category Name",
      dataIndex: "title",
    },
    {
      title: " Action",
      dataIndex: "action",
    },
  ];


const Categorylist = () => {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    const pCatState = useSelector((state) => state.pCategory.pCategories)
    const data1 = [];
    for (let i = 0; i < pCatState.length; i++) {
        data1.push({
            key: i + 1,
            title: pCatState[i].title,
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
    <h3 className="mb-4 title">Product Category List</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
  </div>
  )
}

export default Categorylist