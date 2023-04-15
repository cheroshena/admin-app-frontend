import React, { useEffect, useState } from 'react';
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { deleteASpecialize, getSpecializes ,resetState} from '../features/specialize/specializeSlice';
import CustomModal from '../components/CustomModal';

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: " Title",
    dataIndex: "name",
  },
  {
    title: " Action",
    dataIndex: "action",
  },

];



const Specializelist = () => {
  const [open, setOpen] = useState(false);
  const [specializeId, setspecializeId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setspecializeId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getSpecializes());
  }, []);
  const specializeState = useSelector((state) => state.specialize.specializes);
  const data1 = [];
  for (let i = 0; i < specializeState.length; i++) {
    data1.push({
      key: i + 1,
      name: specializeState[i].title,
      action: (
        <>
          <Link
            to={`/admin/docbrand/${specializeState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(specializeState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const deleteSpecialize = (e) => {
    dispatch(deleteASpecialize(e));

    setOpen(false);
    setTimeout(() => {
      dispatch(getSpecializes());
    }, 100);
  };
  return (
    <div>
            <h3 className="mb-4 title">Doctor Speciality</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                hideModal={hideModal}
                open={open}
                performAction={() => {
                  deleteSpecialize(specializeId);
                }}
                title="Are you sure you want to delete this Spleciality?"
            />
        </div>
  )
}

export default Specializelist