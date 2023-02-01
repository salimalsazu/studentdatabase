import React from 'react';

const AddStudent = () => {
    return (
        <section className="p-6 ">
            <div>
                <h1 className='text-left font-extrabold my-2' >Add Student</h1>
            </div>
            <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">


                <div className="flex gap-5">
                    <div className="w-full ">
                        <input type="text" placeholder="First Name" className="input w-full  bg-gray-100 " />
                    </div>
                    <div className="w-full">
                        <input type="text" placeholder="Middle Name" className="input w-full bg-gray-100" />
                    </div>
                    <div className="w-full">
                        <input type="text" placeholder="Last Name" className="input w-full  bg-gray-100" />
                    </div>
                </div>
                <div className='flex gap-5 justify-center items-center' >
                    <div className="w-full">
                        <select className="select w-full  bg-gray-100">
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
                        <select className="select w-full bg-gray-100">
                            <option disabled selected>Select Division</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <input type="number" maxLength="2" placeholder="Enter Roll No Number in Digits" className="input w-full  bg-gray-100" />
                    </div>
                </div>
                <div className='flex gap-5 '>
                    <div className="w-full">
                        <input type="text" placeholder="Address Line 1" className="input w-full  bg-gray-100" />
                    </div>
                    <div className="w-full">
                        <input type="text" placeholder="Address Line 1" className="input w-full  bg-gray-100" />
                    </div>

                </div>

                <div className='flex gap-5' >
                    <div className="w-full">
                        <input type="text" placeholder="Landmark" className="input w-full  bg-gray-100" />
                    </div>
                    <div className="w-full">
                        <input type="text" placeholder="City" className="input w-full  bg-gray-100" />
                    </div>
                    <div className="w-full">
                        <input type="number" maxlength="6" placeholder="pincode" className="input w-full  bg-gray-100" />
                    </div>
                </div>

                <div className='flex justify-start '>
                    <button className='px-14 py-2 bg-red-600 text-white rounded-lg' >Add Student</button>
                </div>
            </form>
        </section>
    );
};

export default AddStudent;