import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNavbar from '../Shared/LeftNavbar';


const Dashboard = () => {
    return (
        <div className='flex mx-10 mt-10' >
            <aside className='mt-10' >
                <LeftNavbar></LeftNavbar>
            </aside>
            <main className='w-full' >
                <Outlet></Outlet>
            </main>
        </div>
    );
};


export default Dashboard;