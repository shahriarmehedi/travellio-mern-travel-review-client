import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const DashboardHome = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    const [totalUsers, setTotalUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setTotalUsers(data))

    }, [])










    return (
        <div className="bg-yellow-50 px-5 xl:px-20 min-h-screen text-center">
            <h2 className="pt-10 pb-10 text-center text-3xl font-bold text-gray-700">Welcome to Dashboard</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="py-10 bg-blue-500 rounded text-white mx-5 mb-5">
                    <h3 className="">Total Blog Post</h3>
                    <h2 className="text-2xl xl:text-5xl font-bold"> {products.length} </h2>
                </div>
                <div className="py-10 bg-green-500 rounded text-white mx-5 mb-5">
                    <h3 className="">Approved Blogs</h3>
                    <h2 className="text-2xl xl:text-5xl font-bold"> {products.filter(approved => approved.status === "approved").length} </h2>
                </div>
                <div className="py-10 bg-rose-500 rounded text-white mx-5 mb-5">
                    <h3 className="">Pending Blogs</h3>
                    <h2 className="text-2xl xl:text-5xl font-bold"> {products.filter(approved => approved.status === "pending").length} </h2>
                </div>
                <div className=" py-10 bg-yellow-500 rounded text-white mx-5 mb-5">
                    <h3 className="">Total Users</h3>
                    <h2 className="text-2xl xl:text-5xl font-bold"> {totalUsers.length} </h2>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;