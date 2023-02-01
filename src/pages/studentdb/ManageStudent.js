import React from 'react';
import { GrView } from 'react-icons/gr';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';



const ManageStudent = () => {
    return (
        <div>
            <h1 className='text-left my-5 font-extrabold' >Manage Students</h1>
            <table className="table-auto w-full text-left">
                <thead className="bg-red-600">
                    <tr className="text-white">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Class</th>
                        <th className="px-4 py-2">Roll No</th>
                        <th className=" py-2">View</th>
                        <th className=" py-2">Edit</th>
                        <th className=" py-2">Delete</th>
                    </tr>
                </thead>
                <tbody >
                    <tr className="bg-gray-100 ">
                        <td className="border px-4 py-2">John Doe</td>
                        <td className="border px-4 py-2">2</td>
                        <td className="border px-4 py-2">10</td>
                        <td className="border py-2"><GrView></GrView></td>
                        <td className="border py-2"><AiFillEdit></AiFillEdit></td>
                        <td className="border py-2"><RiDeleteBin5Line></RiDeleteBin5Line></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageStudent;