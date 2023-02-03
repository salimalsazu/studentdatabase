import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {



    const data = useLoaderData();

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="w-full mx-20 bg-gray-300 rounded p-8">
                    <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">


                        <div className="flex gap-5">
                            <div className="w-full ">

                                <input type="text" placeholder="First Name" className="input w-full  bg-gray-100 " required value={data.firstname} readOnly />
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="Middle Name" className="input w-full bg-gray-100" required value={data.middlename} readOnly />
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="Last Name" className="input w-full  bg-gray-100" required value={data.lastname} readOnly />
                            </div>
                        </div>
                        <div className='flex gap-5 justify-center items-center' >
                            <div className="w-full">
                                <input type="number" maxLength="2" placeholder="Class No" className="input w-full  bg-gray-100" required value={data.class} readOnly />
                            </div>
                            <div className="w-full">
                                <input type="text" maxLength="2" placeholder="Division" className="input w-full  bg-gray-100" required value={data.division} readOnly />
                            </div>
                            <div className="w-full">
                                <input type="number" maxLength="2" placeholder="Enter Roll No Number in Digits" className="input w-full  bg-gray-100" required value={data.roll} readOnly />
                            </div>
                        </div>
                        <div className='flex gap-5 '>
                            <div className="w-full">
                                <input type="text" placeholder="Address Line 1" className="input w-full  bg-gray-100" required value={data.address1} readOnly />
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="Address Line 1" className="input w-full  bg-gray-100" required value={data.address2} readOnly />
                            </div>

                        </div>

                        <div className='flex gap-5' >
                            <div className="w-full">
                                <input type="text" placeholder="Landmark" className="input w-full  bg-gray-100" required value={data.landmark} readOnly />
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
    );
};




export default Details;