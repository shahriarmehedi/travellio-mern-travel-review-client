import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Blogs from '../Blogs/Blogs';
import Carousel from '../Home/Carousel';

const HomePage = () => {
    return (
        <>
            <Header></Header>
            <Carousel></Carousel>
            <Blogs></Blogs>
            <Footer></Footer>
        </>
    );
};

export default HomePage;