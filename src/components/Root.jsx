import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';



const Root = () => {
    const [theme, setTheme] = useState("light");

    

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className='light:bg-neutral-50 dark:bg-neutral-950'>
            <Header handleThemeSwitch={handleThemeSwitch} theme={theme} setTheme={setTheme}></Header>
            
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;