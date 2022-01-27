/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header/Header';

const BlogDetails = () => {

    let { blogId } = useParams();

    const [blogs, setBlogs] = useState([]);
    const [singleBlog, setSingleBlog] = useState({});


    useEffect(() => {
        fetch('/blogData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])


    // FINDING MATCHING DATA
    useEffect(() => {
        const foundBlog = blogs.find(blog => blog._id === blogId);
        setSingleBlog(foundBlog);
        console.log(foundBlog);
    }, [blogs]);



    return (
        <>
            <Header></Header>
            <div className='container mx-auto mt-14'>
                <h2 className='py-14 text-3xl font-bold text-center'>Experience Blog on {singleBlog?.title} </h2>
                <div className='flex flex-col lg:flex-row'>
                    <div className='w-5/6 lg:w-[30%] mx-auto'>
                        <img src={singleBlog?.image} alt="" />

                        <h3 className='text-lg pt-5'>Location: {singleBlog?.location} </h3>
                        <h3 className='text-lg pt-2'>Date: {singleBlog?.date} </h3>
                        <h3 className='text-lg pt-2'>Cost: BDT {singleBlog?.cost} </h3>
                        <h3 className='text-lg pt-2'>Rating: {singleBlog?.rating} </h3>
                    </div>
                    <div className='w-5/6 mx-auto lg:w-[70%] lg:px-10'>
                        <h2 className='text-3xl font-bold pb-5'>Title: {singleBlog?.title} </h2>
                        <h2 className='text-lg pt-2'>Category: {singleBlog?.category} </h2>
                        <h2 className='text-lg pt-2 italic text-rose-500'>Traveller Name: {singleBlog?.travellerInfo} </h2>
                        <h2 className='text-lg pt-2'>{singleBlog?.description} </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;