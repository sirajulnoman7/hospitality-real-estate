import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';

const Root = () => {
    return (
        <div className='max-w-7xl'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;