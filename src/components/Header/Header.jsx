import React from 'react';
import Logo from '../../images/Travellio_Logo.png';


const Header = () => {



    return (
        <div >
            <nav className=''>
                <div className="navbar fixed z-50  w-full text-gray-100 h-24">
                    <div className="flex-1 xl:pl-48 mx-2">

                        <img className="pl-5 md:pl-10 h-12" src="" alt="" />

                        <span className=" font-bold pl-2 text-2xl md:text-3xl ">
                            <img className=' h-8 lg:h-12' src={Logo} alt="" />
                        </span>
                    </div>
                    <div className="flex-none hidden xl:pr-48 mx-2 lg:flex pr-10">
                        <div className="flex items-center">
                            <button className="btn hover:bg-zinc-700 btn-ghost rounded  mx-2">

                                HOME

                            </button>
                            <button className="btn hover:bg-zinc-700 btn-ghost rounded  mx-3">

                                ABOUT US

                            </button>
                            <button className="btn hover:bg-zinc-700 btn-ghost rounded  mx-3">

                                All BLOGS

                            </button>

                            <button className="btn border-0 px-7 py-2 rounded bg-rose-500 text-white hover:bg-zinc-700 transition duration-500 mx-3">

                                LOGIN

                            </button>
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
        </div>
    );
};

export default Header;