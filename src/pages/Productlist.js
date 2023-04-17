import React, { useEffect, useState } from 'react';
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { deleteAProduct, getProducts, resetState } from '../features/product/productSlice';
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
        title: " Price",
        dataIndex: "price",
    },
    {
        title: "Category",
        dataIndex: "category",
    },
    
    {
        title: "Rating",
        dataIndex: "totalrating",
    },
    {
        title: "Description",
        dataIndex: "description",
    },
    {
        title: "Braand",
        dataIndex: "brand",
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
    },
    {
        title: "Action",
        dataIndex: "action",
    },
];




const Productlist = () => {
    const [open, setOpen] = useState(false);
    const [productId, setproductId] = useState("");
    const showModal = (e) => {
        setOpen(true);
        setproductId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState());
        dispatch(getProducts());
    }, []);
    const productState = useSelector((state) => state.product.products)
    const data1 = [];
    for (let i = 0; i < productState.length; i++) {
        data1.push({
            key: i + 1,
            title: productState[i].title,
            price: `Rs ${productState[i].price}`,
            totalrating: productState[i].totalrating,
            description: productState[i].description,
            quantity: productState[i].quantity,
            brand: productState[i].brand,
            category: productState[i].category,
            
            action: (
                <>
                    <Link className="fs-3 text-success" to={`/admin/product/${productState[i]._id}`}>
                        <BiEdit />
                    </Link>
                    <button
                        className="ms-3 fs-3 text-danger bg-transparent border-0"
                        onClick={() => showModal(productState[i]._id)}
                    >
                        <AiFillDelete />
                    </button>
                </>
            ),
        });
    }
    const deleteProduct = (e) => {
        dispatch(deleteAProduct(e));

        setOpen(false);
        setTimeout(() => {
            dispatch(getProducts());
        }, 100);
    };


    return (
        <div>
            <h3 className="mb-4 title">All Products</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                hideModal={hideModal}
                open={open}
                performAction={() => {
                    deleteProduct(productId);
                }}
                title="Are you sure you want to delete this Product?"
            />
        </div>
    )
}

export default Productlist