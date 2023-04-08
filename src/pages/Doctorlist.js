import React from 'react';
import { Table } from "antd";

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
      title: " Specialize",
      dataIndex: "product",
    },
    {
      title: "Status",
      dataIndex: "staus",
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      staus: `London, Park Lane no. ${i}`,
    });
  }



const Doctorlist = () => {
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
