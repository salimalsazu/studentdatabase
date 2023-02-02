import React from 'react';
import { GrView } from 'react-icons/gr';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useApi } from '../../contextapi/ProviderContext';



const ManageStudent = () => {

    const { state: { students }
    } = useApi();
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
                    {
                        students.map(student => <tr className="bg-gray-100 ">
                            <td className="border px-4 py-2">{student.firstname}{student.middlename} {student.lastname}</td>
                            <td className="border px-4 py-2">{student.class}</td>
                            <td className="border px-4 py-2">{student.roll}</td>
                            <td className="border py-2"><GrView></GrView></td>
                            <td className="border py-2"><AiFillEdit></AiFillEdit></td>
                            <td className="border py-2"><RiDeleteBin5Line></RiDeleteBin5Line></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageStudent;