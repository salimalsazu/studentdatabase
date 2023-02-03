import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'




const EditData = () => {

    const { register, handleSubmit } = useForm();
    const data = useLoaderData();
    const navigate = useNavigate();



    const handleEdit = (e) => {

        const editData = {
            ...e
        }

        console.log(editData);

        fetch(`https://studentdatabase.vercel.app/student/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(editData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/dashboard/managestudent')
                Swal.fire({
                    title: 'Edited Done',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })

            })
            .catch(err => console.err(err))



    }



    return (
        <div>
            <div>
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="w-full mx-20 bg-gray-300 rounded p-8">
                        <form onSubmit={handleSubmit(handleEdit)} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">


                            <div className="flex gap-5">
                                <div className="w-full ">

                                    <input {...register('firstname')} type="text" placeholder="First Name" className="input w-full  bg-gray-100 " required defaultValue={data.firstname} />
                                </div>
                                <div className="w-full">
                                    <input {...register('middlename')} type="text" placeholder="Middle Name" className="input w-full bg-gray-100" required defaultValue={data.middlename} />
                                </div>
                                <div className="w-full">
                                    <input {...register('lastname')} type="text" placeholder="Last Name" className="input w-full  bg-gray-100" required defaultValue={data.lastname} />
                                </div>
                            </div>
                            <div className='flex gap-5 justify-center items-center' >

                                <div className="w-full">
                                    <select defaultValue={data.class} {...register('class')} className="select w-full  bg-gray-100" required>
                                        <option disabled selected>Select Class</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>

                                    </select>
                                </div>
                                <div className="w-full">
                                    <select defaultValue={data.division} {...register('division')} className="select w-full bg-gray-100" required>
                                        <option disabled selected>Select Division</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>D</option>
                                        <option>E</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <input {...register('roll')} type="number" maxLength="2" placeholder="Enter Roll No Number in Digits" className="input w-full  bg-gray-100" required defaultValue={data.roll} />
                                </div>
                            </div>
                            <div className='flex gap-5 '>
                                <div className="w-full">
                                    <input {...register('address1')} type="text" placeholder="Address Line 1" className="input w-full  bg-gray-100" required defaultValue={data.address1} />
                                </div>
                                <div className="w-full">
                                    <input {...register('address2')} type="text" placeholder="Address Line 1" className="input w-full  bg-gray-100" required defaultValue={data.address2} />
                                </div>

                            </div>

                            <div className='flex gap-5' >
                                <div className="w-full">
                                    <input {...register('landmark')} type="text" placeholder="Landmark" className="input w-full  bg-gray-100" required defaultValue={data.landmark} />
                                </div>
                                <div className="w-full">
                                    <input {...register('city')} type="text" placeholder="City" className="input w-full  bg-gray-100" required defaultValue={data.city} />
                                </div>
                                <div className="w-full">
                                    <input {...register('pincode')} type="number" maxlength="6" placeholder="pincode" className="input w-full  bg-gray-100" required defaultValue={data.pincode} />
                                </div>
                            </div>
                            <div>
                                <button type='submit' className='px-12 py-2 bg-red-500 text-white rounded-lg' >Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default EditData;