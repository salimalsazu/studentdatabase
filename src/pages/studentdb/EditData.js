import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'




const EditData = () => {

    const { register, handleSubmit } = useForm();
    const data = useLoaderData();




    const handleEdit = (data) => {

        const editData = {
            ...data
        }


        fetch('https://wedding-server-chi.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(editData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'Thank your for your review',
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

                                    <input {...register('firstname')} type="text" placeholder="First Name" className="input w-full  bg-gray-100 " required value={data.firstname} readOnly />
                                </div>
                                <div className="w-full">
                                    <input {...register('middlename')} type="text" placeholder="Middle Name" className="input w-full bg-gray-100" required value={data.middlename} readOnly />
                                </div>
                                <div className="w-full">
                                    <input {...register('lastname')} type="text" placeholder="Last Name" className="input w-full  bg-gray-100" required value={data.lastname} readOnly />
                                </div>
                            </div>
                            <div className='flex gap-5 justify-center items-center' >
                                <div className="w-full">
                                    <input {...register('class')} type="number" maxLength="2" placeholder="Class No" className="input w-full  bg-gray-100" required value={data.class} readOnly />
                                </div>
                                <div className="w-full">
                                    <input {...register('division')} type="text" maxLength="2" placeholder="Division" className="input w-full  bg-gray-100" required value={data.division} readOnly />
                                </div>
                                <div className="w-full">
                                    <input {...register('roll')} type="number" maxLength="2" placeholder="Enter Roll No Number in Digits" className="input w-full  bg-gray-100" required value={data.roll} readOnly />
                                </div>
                            </div>
                            <div className='flex gap-5 '>
                                <div className="w-full">
                                    <input {...register('address1')} type="text" placeholder="Address Line 1" className="input w-full  bg-gray-100" required value={data.address1} readOnly />
                                </div>
                                <div className="w-full">
                                    <input {...register('address2')} type="text" placeholder="Address Line 1" className="input w-full  bg-gray-100" required value={data.address2} readOnly />
                                </div>

                            </div>

                            <div className='flex gap-5' >
                                <div className="w-full">
                                    <input {...register('landmark')} type="text" placeholder="Landmark" className="input w-full  bg-gray-100" required value={data.landmark} readOnly />
                                </div>
                                <div className="w-full">
                                    <input type="text" placeholder="City" className="input w-full  bg-gray-100" required value={data.city} readOnly />
                                </div>
                                <div className="w-full">
                                    <input type="number" maxlength="6" placeholder="pincode" className="input w-full  bg-gray-100" required value={data.pincode} readOnly />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default EditData;