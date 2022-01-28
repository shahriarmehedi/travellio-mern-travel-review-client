import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../../images/Travellio_Logo.png';


const Header = () => {

    const reserveImg = "https://i.ibb.co/0jz6gHX/avatar.png";

    const { user, logOut } = useAuth();



    return (
        <>
            <nav className='fixed top-0 z-50 w-full'>
                <div className="navbar bg-rose-500 text-gray-100 h-[70px]">
                    <div className="flex-1 xl:pl-48 mx-2">

                        <img className="pl-5 md:pl-10 h-12" src="" alt="" />

                        <span className=" font-bold pl-2 text-2xl md:text-3xl ">
                            <img className=' h-8 lg:h-12' src={Logo} alt="" />
                        </span>
                    </div>
                    <div className="flex-none hidden xl:pr-48 mx-2 lg:flex pr-10">
                        <div className="flex items-center">
                            <NavLink to="/" className="btn hover:bg-zinc-700 btn-ghost rounded  mx-2">

                                HOME

                            </NavLink>
                            <NavLink to="/admin/dashboard" className="btn hover:bg-zinc-700 btn-ghost rounded  mx-3">

                                ADMIN

                            </NavLink>
                            <NavLink to="/post" className="btn hover:bg-zinc-700 btn-ghost rounded  mx-3">

                                POST A BLOG

                            </NavLink>

                            {
                                user?.email ? <button className="btn border-0 px-7 py-2 rounded hover:text-white bg-white hover:bg-zinc-700 text-rose-500  transition duration-500 mx-3" onClick={logOut}>Log Out</button> :
                                    <NavLink to="/login" className="btn border-0 px-7 py-2 rounded hover:text-white bg-white hover:bg-zinc-700 text-rose-500  transition duration-500 mx-3">
                                        LOGIN
                                    </NavLink>
                            }
                            <div>
                                {user?.email && <img className="h-10 rounded-full" src={user?.photoURL || reserveImg} alt="" />}
                            </div>
                        </div>
                    </div>
                    <div className='block lg:hidden'>
                        <button tabIndex="0" className="btn hover:bg-gray-800 btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>


            </nav>
        </>
    );
};

export default Header;



