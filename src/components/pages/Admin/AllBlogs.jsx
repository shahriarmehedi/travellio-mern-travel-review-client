import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import Swal from 'sweetalert2';

const AllBlogs = () => {

    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setAllBlogs(data))

    }, [])

    const handleDeleteBlog = id => {
        const proceed = window.confirm('Are you sure to delete this Blog?');
        if (proceed) {
            const url = `http://localhost:5000/blogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Blog Deleted successfully')
                        const remaining = allBlogs.filter(blogs => blogs._id !== id);
                        setAllBlogs(remaining);
                    }
                });
        }
    }



    const handleConfirmApprove = id => {
        const confirmedBlog = { status: "approved" };

        const url = `http://localhost:5000/blogs/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(confirmedBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Blog approved succesfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    const remaining = allBlogs.filter(blogs => blogs.status !== id);
                    setAllBlogs(remaining);
                }
            })
    }





    return (
        <div className='grid grid-cols-1  gap-5 container mx-auto mt-20'>
            {
                allBlogs.map(blog => <div className=' shadow rounded-2xl pb-3 flex flex-col lg:flex-row' key={blog._id}>
                    <div className='w-[15%] mx-auto flex items-center justify-center'>
                        <img className=' h-40 object-cover' src={blog.image} alt="" />
                    </div>
                    <div className='px-5 w-[20%] mx-auto'>
                        <h2 className='py-2 text-xl xl:text-2xl font-bold'>{blog.title} </h2>
                        <h2 className='text-rose-500 italic'> <span className='text-gray-800'>By </span> {blog.travellerInfo} </h2>
                        <h2 className=''>{blog.travellerEmail} </h2>
                        <h2 className=' text-lg font-bold text-rose-500'>BDT {blog.cost} </h2>
                        <h2 className='py-1'>Location: {blog.location} </h2>
                        <Rating
                            initialRating={blog.rating}
                            emptySymbol="far fa-star fa text-xl text-gray-300"
                            fullSymbol="fas fa-star fa text-xl text-rose-500"
                            readonly
                        ></Rating>
                        <br />

                    </div>
                    <div className='px-5 w-[30%] mx-auto flex items-center justify-center'>
                        <h2 className='py-2 text-sm'>{blog.description} </h2>
                    </div>
                    <div className='w-[15%] flex items-center justify-end'>
                        <button onClick={() => handleDeleteBlog(blog._id)} className=" bg-rose-600 transition mr-2 duration-150 hover:bg-red-800 text-white px-4 py-2 rounded-md"><i className="fas fa-trash mr-2"></i> Delete</button>
                    </div>
                    <div className='w-[15%] flex items-center justify-end'>
                        {
                            blog.status === "pending" ? <button onClick={() => handleConfirmApprove(blog._id)} className=" bg-yellow-600 transition mr-5 duration-150 hover:bg-yellow-700 text-white px-4 py-2 rounded-md"><i class="fas fa-clipboard-check"></i> Approve</button> : <button className=" bg-teal-500 transition mr-5 duration-150 hover:bg-teal-600 text-white px-4 py-2 rounded-md"><i class="fas fa-check-circle"></i> Approved</button>
                        }
                    </div>


                </div>)
            }
        </div>
    );
};

export default AllBlogs;