import React from 'react';
import { useApi } from '../contextapi/ProviderContext';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user } = useApi();

    return (
        <div className='flex justify-between mx-20 mt-14' >
            <div>
                <Link to="/dashboard" ><h1 className='text-3xl font-extrabold' >Logo</h1></Link>
            </div>

            <div className='border rounded-lg bg-gray-100  px-8 py-2 flex justify-center items-center'>
                <span className='mr-3' ><AiOutlineUser></AiOutlineUser></span>
                <p>{user?.email}</p>
            </div>
        </div>
    );
};

export default Navbar; <h1>This is Nabbar</h1>