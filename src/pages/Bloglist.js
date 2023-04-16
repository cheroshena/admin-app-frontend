import React, { useEffect, useState } from 'react';
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { deleteABlog, getBlogs, resetState } from '../features/blogs/blogSlice';
import CustomModal from '../components/CustomModal';

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
        title: " Description",
        dataIndex: "description",
    },
    {
        title: " Views",
        dataIndex: "numViews",
    },
    {
        title: " Category",
        dataIndex: "category",
    },
    {
        title: " Action",
        dataIndex: "action",
    },

];

const Bloglist = () => {
    const [open, setOpen] = useState(false);
    const [blogId, setblogId] = useState("");
    const showModal = (e) => {
        setOpen(true);
        setblogId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState());

        dispatch(getBlogs());
    }, []);
    const blogState = useSelector((state) => state.blog.blogs);
    const data1 = [];
    for (let i = 0; i < blogState.length; i++) {
        data1.push({
            key: i + 1,
            title: blogState[i].title,
            description: blogState[i].description,
            category: blogState[i].category,
            numViews: blogState[i].numViews,
            action: (
                <>
                    <Link className="fs-3 text-success" to={`/admin/blog/${blogState[i]._id}`}>
                        <BiEdit />
                    </Link>
                    <button
                        className="ms-3 fs-3 text-danger bg-transparent border-0"
                        onClick={() => showModal(blogState[i]._id)}
                    >
                        <AiFillDelete />
                    </button>
                </>
            ),
        });
    }
    const deleteBlog = (e) => {
        dispatch(deleteABlog(e));

        setOpen(false);
        setTimeout(() => {
            dispatch(getBlogs());
        }, 100);
    };
    return (
        <div>
            <h3 className="mb-4 title">Blog List</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                hideModal={hideModal}
                open={open}
                performAction={() => {
                    deleteBlog(blogId);
                }}
                title="Are you sure you want to delete this blog?"
            />
        </div>
    )
}

export default Bloglist;
