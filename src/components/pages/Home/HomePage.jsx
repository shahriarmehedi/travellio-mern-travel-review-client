import React from 'react';
import Footer from '../../Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Carousel from '../Home/Carousel';

const HomePage = () => {
    return (
        <>
            <Carousel></Carousel>
            <Blogs></Blogs>
            <Footer></Footer>
        </>
    );
};

export default HomePage;