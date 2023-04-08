import React from 'react';
import { Table } from "antd";

const columns = [
    {
      title: "SNo",
      dataIndex: "key",
    },
    {
      title: "Paient Name",
      dataIndex: "name",
    },
    {
      title: "Doctor Name",
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
const Channel = () => {
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
