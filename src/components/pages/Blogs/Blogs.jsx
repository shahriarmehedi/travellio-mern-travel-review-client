import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';

const Blogs = () => {

    const [page, setPage] = useState(1);
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogData.json')
            .then(res => res.json())
            .then(data => setAllBlogs(data))

    }, [])


    // Pagination MUI
    const handleChange = (event, value) => {
        setPage(value);
    };


    let pageCount = 1
    if (allBlogs.length <= 10) {
        pageCount = 1
    }
    if (allBlogs.length > 10 && allBlogs.length <= 20) {
        pageCount = 2
    }
    if (allBlogs.length > 20 && allBlogs.length <= 30) {
        pageCount = 3
    }
    if (allBlogs.length > 30 && allBlogs.length <= 40) {
        pageCount = 4
    }
    if (allBlogs.length > 40 && allBlogs.length <= 50) {
        pageCount = 5
    }




    return (
        <>
            <div className=' w-11/12 z-40  mx-auto min-h-screen'>
                <h1 className='pt-10 pb-8 text-4xl text-center font-bold'>Experience Blog Posts</h1>
                <p className='text-center w-3/4 mx-auto text-gray-400 pb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur inventore magni a natus numquam consequatur odit qui animi, suscipit autem, incidunt repellat distinctio modi dolore nostrum accusantium itaque eos. Dolorum nesciunt officiis, beatae eos quia ab eveniet</p>
                <div className='flex flex-col-reverse lg:flex-row'>
                    <div className='lg:w-[30%] my-10 lg:ml-10 text-center lg:my-0 shadow-lg rounded-xl min-h-[500px] flex items-center flex-col'>
                        <h2 className='font-bold text-xl py-5'>Top rated spots</h2>
                        {
                            allBlogs.filter(topRated => topRated.rating === 5).map(filtered => <div className='py-3' key={filtered._id}>

                                <NavLink to={`/blogs/${filtered?._id}`}  >
                                    <img className='w-1/2 mx-auto rounded-md mt-3' src={filtered?.image} alt="" />
                                    <h2 className='font-bold pt-2'> {filtered?.title} </h2>
                                </NavLink>
                                <Rating
                                    initialRating={filtered?.rating}
                                    emptySymbol="far fa-star fa text-gray-300"
                                    fullSymbol="fas fa-star fa text-rose-500"
                                    readonly
                                ></Rating>
                            </div>)
                        }
                        {
                            allBlogs.filter(topRated => topRated.rating < 5 && topRated.rating >= 4).slice(0, 5).map(filtered => <div className='py-3' key={filtered._id}>

                                <NavLink to={`/blogs/${filtered?._id}`}  >
                                    <img className='w-1/2 mx-auto rounded-md mt-3' src={filtered?.image} alt="" />
                                    <h2 className='font-bold pt-2'> {filtered?.title} </h2>
                                </NavLink>
                                <Rating
                                    initialRating={filtered?.rating}
                                    emptySymbol="far fa-star fa text-gray-300"
                                    fullSymbol="fas fa-star fa text-rose-500"
                                    readonly
                                ></Rating>
                            </div>)
                        }

                    </div>
                    <div className='lg:w-[70%] mx-auto lg:px-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[80vh]'>
                            {
                                page === 1 && allBlogs.slice(0, 10).map(blog => <div className=' shadow-lg rounded-2xl pb-3' key={blog._id}>
                                    <img className='w-full object-cover mx-auto' src={blog.image} alt="" />
                                    <div className='pl-5'>
                                        <h2 className='py-2 text-xl xl:text-2xl font-bold'>{blog.title} </h2>
                                        <h2 className=' text-lg font-bold text-rose-500'>BDT {blog.cost} </h2>
                                        <h2 className='py-1'>Location: {blog.location} </h2>
                                        <Rating
                                            initialRating={blog.rating}
                                            emptySymbol="far fa-star fa text-xl text-gray-300"
                                            fullSymbol="fas fa-star fa text-xl text-rose-500"
                                            readonly
                                        ></Rating>
                                        <br />
                                        <NavLink to={`/blogs/${blog?._id}`}>
                                            <button className='px-5 py-2 my-3 bg-zinc-700 hover:bg-rose-500 transition duration-300 rounded text-white'>
                                                Read more
                                            </button>
                                        </NavLink>
                                    </div>


                                </div>)
                            }
                            {
                                page === 2 && allBlogs.slice(10, 20).map(blog => <div className=' shadow-lg rounded-2xl pb-3' key={blog._id}>
                                    <img className='w-full object-cover mx-auto' src={blog.image} alt="" />
                                    <div className='pl-5'>
                                        <h2 className='py-2 text-xl xl:text-2xl font-bold'>{blog.title} </h2>
                                        <h2 className=' text-lg font-bold text-rose-500'>BDT {blog.cost} </h2>
                                        <h2 className='py-1'>Location: {blog.location} </h2>
                                        <Rating
                                            initialRating={blog.rating}
                                            emptySymbol="far fa-star fa text-xl text-gray-300"
                                            fullSymbol="fas fa-star fa text-xl text-rose-500"
                                            readonly
                                        ></Rating>
                                        <br />
                                        <NavLink to={`/blogs/${blog?._id}`}>
                                            <button className='px-5 py-2 my-3 bg-zinc-700 hover:bg-rose-500 transition duration-300 rounded text-white'>
                                                Read more
                                            </button>
                                        </NavLink>
                                    </div>


                                </div>)
                            }
                            {
                                page === 3 && allBlogs.slice(20, 30).map(blog => <div className=' shadow-lg rounded-2xl pb-3' key={blog._id}>
                                    <img className='w-full object-cover mx-auto' src={blog.image} alt="" />
                                    <div className='pl-5'>
                                        <h2 className='py-2 text-xl xl:text-2xl font-bold'>{blog.title} </h2>
                                        <h2 className=' text-lg font-bold text-rose-500'>BDT {blog.cost} </h2>
                                        <h2 className='py-1'>Location: {blog.location} </h2>
                                        <Rating
                                            initialRating={blog.rating}
                                            emptySymbol="far fa-star fa text-xl text-gray-300"
                                            fullSymbol="fas fa-star fa text-xl text-rose-500"
                                            readonly
                                        ></Rating>
                                        <br />
                                        <NavLink to={`/blogs/${blog?._id}`}>
                                            <button className='px-5 py-2 my-3 bg-zinc-700 hover:bg-rose-500 transition duration-300 rounded text-white'>
                                                Read more
                                            </button>
                                        </NavLink>
                                    </div>


                                </div>)
                            }
                            {
                                page === 4 && allBlogs.slice(30, 40).map(blog => <div className=' shadow-lg rounded-2xl pb-3' key={blog._id}>
                                    <img className='w-full object-cover mx-auto' src={blog.image} alt="" />
                                    <div className='pl-5'>
                                        <h2 className='py-2 text-xl xl:text-2xl font-bold'>{blog.title} </h2>
                                        <h2 className=' text-lg font-bold text-rose-500'>BDT {blog.cost} </h2>
                                        <h2 className='py-1'>Location: {blog.location} </h2>
                                        <Rating
                                            initialRating={blog.rating}
                                            emptySymbol="far fa-star fa text-xl text-gray-300"
                                            fullSymbol="fas fa-star fa text-xl text-rose-500"
                                            readonly
                                        ></Rating>
                                        <br />
                                        <NavLink to={`/blogs/${blog?._id}`}>
                                            <button className='px-5 py-2 my-3 bg-zinc-700 hover:bg-rose-500 transition duration-300 rounded text-white'>
                                                Read more
                                            </button>
                                        </NavLink>
                                    </div>


                                </div>)
                            }
                            {
                                page === 5 && allBlogs.slice(40, 50).map(blog => <div className=' shadow-lg rounded-2xl pb-3' key={blog._id}>
                                    <img className='w-full object-cover mx-auto' src={blog.image} alt="" />
                                    <div className='pl-5'>
                                        <h2 className='py-2 text-xl xl:text-2xl font-bold'>{blog.title} </h2>
                                        <h2 className=' text-lg font-bold text-rose-500'>BDT {blog.cost} </h2>
                                        <h2 className='py-1'>Location: {blog.location} </h2>
                                        <Rating
                                            initialRating={blog.rating}
                                            emptySymbol="far fa-star fa text-xl text-gray-300"
                                            fullSymbol="fas fa-star fa text-xl text-rose-500"
                                            readonly
                                        ></Rating>
                                        <br />
                                        <NavLink to={`/blogs/${blog?._id}`}>
                                            <button className='px-5 py-2 my-3 bg-zinc-700 hover:bg-rose-500 transition duration-300 rounded text-white'>
                                                Read more
                                            </button>
                                        </NavLink>
                                    </div>


                                </div>)
                            }


                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center my-10'>
                    <Stack spacing={5}>
                        <Typography>You are visiting page: <span className='text-rose-500 font-bold text-xl'>{page}</span> </Typography>
                        <Pagination count={pageCount} page={page} onChange={handleChange} />
                    </Stack>

                </div>
            </div>
        </>
    );
};

export default Blogs;