import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUsergroupAdd, AiOutlineBars } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';
import { useApi } from '../contextapi/ProviderContext';

const LeftNavbar = () => {

    const { logOut } = useApi();

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch((err) => console.error(err))
    }


    return (
        <div className="flex flex-col h-full p-3 w-60">
            <div className="space-y-3">

                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <Link rel="noopener noreferrer" to="/dashboard/addstudent" className="flex items-center p-2 space-x-3 rounded-md">
                                <span><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd></span>
                                <span>Add Student</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link rel="noopener noreferrer" to="/dashboard/managestudent" className="flex items-center p-2 space-x-3 rounded-md">
                                <span><AiOutlineBars></AiOutlineBars></span>
                                <span>Manage Students</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link rel="noopener noreferrer" to="/" className="flex items-center p-2 space-x-3 rounded-md">

                                <span><IoLogOutOutline></IoLogOutOutline></span>
                                <button onClick={handleSignOut} >Logout</button>

                            </Link>
                        </li>




                    </ul>
                </div>
            </div>

        </div>
    );
};

export default LeftNavbar;