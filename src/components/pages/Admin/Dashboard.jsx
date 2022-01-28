/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Dashboard = () => {

    const reserveImg = "https://i.ibb.co/0jz6gHX/avatar.png";

    const { user, logOut } = useAuth();


    return (
        <div className=" shadow bg-base-200 drawer drawer-mobile min-h-screen">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="mb-10 text-4xl cursor-pointer drawer-button lg:hidden absolute top-5 left-5 text-gray-800"><i className="fas fa-bars"></i></label>

                <div>
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-gray-800 text-white text-center">

                    <NavLink to="/"><button className="mt-2 py-3 px-7 mb-10 hover:bg-gray-50 hover:text-gray-800 rounded text-white bg-gray-700 transition duration-300"><i className="fas fa-arrow-circle-left mr-2"></i> HOME</button></NavLink>


                    <div className="mx-auto mb-10">{user?.email && <div className="avatar online">
                        <div className="rounded-full w-24 h-24">
                            <img className="rounded-full" src={reserveImg} alt="" />
                        </div>

                    </div>}
                        <h2 className=" pt-3 pb-2 font-semibold text-xl"> {user.displayName} </h2>

                        <div className="badge badge-info">ADMIN</div>

                    </div>



                    <li className="bg-gray-700 rounded-box hover:bg-gray-50 hover:text-gray-800 transition duration-150 mb-5">
                        <NavLink to="/admin/dashboard" ><button><i className="fas fa-tachometer-alt mr-2"></i> Dashboard</button></NavLink>
                    </li>

                    <li className="bg-gray-700 rounded-box hover:bg-gray-50 hover:text-gray-800 transition duration-150 mb-5">
                        <NavLink to="/admin/allblogs" ><button><i className="fas fa-tachometer-alt mr-2"></i> All Blogs</button></NavLink>
                    </li>

                    <li className="bg-gray-700 rounded-box hover:bg-gray-50 hover:text-gray-800 transition duration-150 mb-5">
                        <NavLink to="/admin/postblog" ><button><i className="fas fa-tachometer-alt mr-2"></i> Post a Blog</button></NavLink>
                    </li>

                    <li className="bg-gray-700 rounded-box hover:bg-gray-50 hover:text-gray-800 transition duration-150 mb-5">
                        <NavLink to="/admin/makeadmin" ><button><i className="fas fa-tachometer-alt mr-2"></i> Make Admin</button></NavLink>
                    </li>





                    <li onClick={logOut} className=" bg-rose-500 rounded cursor-pointer hover:bg-gray-50 hover:text-gray-800 transition duration-150 mt-32">
                        <a className="mx-auto"><button><i className="fas fa-sign-out-alt mr-2"></i> Log Out</button></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;