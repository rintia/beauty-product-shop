import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;