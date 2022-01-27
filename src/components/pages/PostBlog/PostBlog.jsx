import React from 'react';
import Header from '../../Header/Header';
import { useForm } from "react-hook-form";
import "./PostBlog.css"
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const PostBlog = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })

    };




    return (
        <>
            <Header />
            <h2 className='mt-28 font-bold text-2xl text-center'>Post Your Blog</h2>
            <div className="text-gray-800 pb-16 bg-gray-800 pt-10 mt-10 rounded-box w-11/12 md:w-5/6 lg:w-2/5 mx-auto" >
                <form className=" add-service-form w-5/6 mx-auto " onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text text-white">Your name:</span>
                    </label>
                    <input defaultValue={user?.displayName || ''} {...register("travellerInfo", { required: true })} />

                    <label className="label">
                        <span className="label-text text-white">Email:</span>
                    </label>
                    <input defaultValue={user?.email || ''} {...register("travellerEmail", { required: true })} />

                    <label className="label">
                        <span className="label-text text-white">Blog title:</span>
                    </label>
                    <input {...register("title", { required: true })} />


                    <label className="label">
                        <span className="label-text text-white">Date:</span>
                    </label>
                    <input {...register("date", { required: true })} />



                    <label className="label">
                        <span className="label-text text-white">Image URL:</span>
                    </label>
                    <input type="url" required {...register("image", { required: true })} />



                    <label className="label">
                        <span className="label-text text-white">Category:</span>
                    </label>
                    <input required  {...register("category")} />


                    <label className="label">
                        <span className="label-text text-white">Description:</span>
                    </label>
                    <textarea required  {...register("description", { required: true })} />



                    <label className="label">
                        <span className="label-text text-white">Total costing (BDT):</span>
                    </label>
                    <input type="number" {...register("cost")} />



                    <label className="label">
                        <span className="label-text text-white">Tour location:</span>
                    </label>
                    <input required {...register("location", { required: true })} />

                    <label className="label">
                        <span className="label-text text-white">Rate this tour (1-5):</span>
                    </label>
                    <input type="number" {...register("rating")} />


                    <br />
                    <input className=" bg-rose-500 hover:bg-gray-500 transition duration-300 text-white mt-12 submit-btn" type="submit" value="ADD THIS PRODUCT" />
                </form>
            </div>
        </>
    );
};

export default PostBlog;