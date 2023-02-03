
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2'


const AddStudent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddStudent = async (data, e) => {


        const stdatabase = {
            ...data
        }

        // console.log(stdatabase);
        try {
            const res = await axios('https://studentdatabase.vercel.app/students', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(stdatabase)
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Successfully add a Student',
                showConfirmButton: false,
                timer: 1500
            })
            e.target.reset();
        } catch (error) {
            console.log(error)
        }


    }

    return (
        <section className="p-6 ">
            <div>
                <h1 className='text-left font-extrabold my-2' >Add Student</h1>
            </div>
            <form onSubmit={handleSubmit(handleAddStudent)} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">


                <div className="flex lg:flex-row flex-col gap-5">
                    <div className="w-full ">
                        <input  {...register('firstname', { required: true })} type="text" placeholder="First Name" className="input w-full  bg-gray-100" />
                        {errors && <span className='text-red-500'>First Name is Mandatory</span>}
                    </div>
                    <div className="w-full">
                        <input  {...register('middlename')} type="text" placeholder="Middle Name" className="input w-full bg-gray-100" required />
                    </div>
                    <div className="w-full">
                        <input  {...register('lastname', { required: true })} type="text" placeholder="Last Name" className="input w-full  bg-gray-100" required />
                        {errors && <span className='text-red-500'>Last Name is Mandatory</span>}
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col gap-5 justify-center items-center' >
                    <div className="w-full">
                        <select required  {...register('class', { required: true })} className="select w-full  bg-gray-100" >
                            <option disabled selected value="">Select Class</option>
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
                        {errors && <span className='text-red-500'>Class is Mandatory</span>}
                    </div>
                    <div className="w-full">
                        <select  {...register('division', { required: true })} className="select w-full bg-gray-100" required>
                            <option disabled selected>Select Division</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                        </select>
                        {errors && <span className='text-red-500'>Division is Mandatory</span>}
                    </div>
                    <div className="w-full">
                        <input  {...register('roll', { required: true })} type="text" maxLength="2" placeholder="Enter Roll No Number in Digits" className="input w-full  bg-gray-100" required />
                        {errors && <span className='text-red-500'>Roll must be two digit</span>}
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col gap-5 '>
                    <div className="w-full">
                        <input  {...register('address1', { required: true })} type="text" placeholder="Address Line 1" className="input w-full  bg-gray-100" required />
                        {errors && <span className='text-red-500'>Address is Mandatory</span>}
                    </div>
                    <div className="w-full">
                        <input  {...register('address2')} type="text" placeholder="Address Line 1" className="input w-full  bg-gray-100" required />
                    </div>

                </div>

                <div className='flex lg:flex-row flex-col gap-5' >
                    <div className="w-full">
                        <input  {...register('landmark', { required: true })} type="text" placeholder="Landmark" className="input w-full  bg-gray-100" required />
                        {errors && <span className='text-red-500'>Landmark is Mandatory</span>}
                    </div>
                    <div className="w-full">
                        <input {...register('city', { required: true })} type="text" placeholder="City" className="input w-full  bg-gray-100" required />
                        {errors && <span className='text-red-500'>City is Mandatory</span>}
                    </div>
                    <div className="w-full">
                        <input  {...register('pincode', { required: true })} type="text" maxLength="6" placeholder="pincode" className="input w-full  bg-gray-100" required />
                        {errors && <span className='text-red-500'>Six digit pincode is Mandatory</span>}
                    </div>
                </div>

                <div className='flex justify-start '>
                    <button type='submit' className='px-14 py-2 bg-red-600 text-white rounded-lg' >Add Student</button>
                </div>
            </form>
        </section>
    );
};

export default AddStudent;