import React, { useState } from 'react';
import { GrView } from 'react-icons/gr';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useApi } from '../../contextapi/ProviderContext';
import { Link } from 'react-router-dom';





const ManageStudent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { state: { students } } = useApi();



    const OpenModal = () => {
        setIsOpen(!isOpen);
    };

    const handleDelete = (student) => {
        console.log(student)

        fetch(`https://studentdatabase.vercel.app/students/${student._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload();
            })
    }



    return (
        <div className='overflow-x-auto'>
            <h1 className='text-left my-5 font-extrabold' >Manage Students</h1>
            <table className="table-auto w-full text-left ">
                <thead className="bg-red-600 w-full">
                    <tr className="text-white w-full">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Class</th>
                        <th className="px-4 py-2">Roll No</th>
                        <th className=" py-2">View</th>
                        <th className=" py-2">Edit</th>
                        <th className=" py-2">Delete</th>
                    </tr>
                </thead>

                <tbody >
                    {
                        students.map(student => <tr className="bg-gray-100 ">
                            <td className="border px-4 py-2">{student.firstname}{student.middlename} {student.lastname}</td>
                            <td className="border px-4 py-2">{student.class}</td>
                            <td className="border px-4 py-2">{student.roll}</td>
                            <td className="border py-2"><Link target="_blank" to={`/dashboard/details/${student._id}`} ><GrView></GrView></Link></td>
                            <td className="border py-2"><Link target="_blank" to={`/dashboard/edit/${student._id}`}  ><AiFillEdit></AiFillEdit></Link></td>
                            <td className="border py-2"><RiDeleteBin5Line onClick={OpenModal}  ></RiDeleteBin5Line></td>
                            <div className='z-50 '>
                                {isOpen && (
                                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                                        <div className="w-full mx-20 bg-lime-200 rounded p-8">
                                            <h1 className='text-red-500 font-extrabold text-5xl animate-pulse text-center' >"Are you sure you want to delete this item"</h1>


                                            <div className='flex justify-center items-center gap-5 mt-10'>
                                                <button className="bg-red-400 z-50 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={OpenModal}>
                                                    Close
                                                </button>
                                                <button className="bg-red-400 z-50 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => { handleDelete(student) }}>
                                                    Delete
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                )}


                            </div>
                        </tr>)
                    }
                </tbody>

            </table>
        </div >
    );
};

export default ManageStudent;