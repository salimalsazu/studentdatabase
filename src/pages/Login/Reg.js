import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApi } from '../../contextapi/ProviderContext';


const Reg = () => {
    const { createUser } = useApi();
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/dashboard/managestudent';


    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })

    }



   

    return (

        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit(handleSignUp)} className="bg-white p-6 rounded-lg shadow-md w-96  ">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        {...register('email')}
                        className="w-full border rounded border-gray-400 p-2"
                        type="email"
                        id="email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        {...register('password')}
                        className="w-full border rounded border-gray-400 p-2"
                        type="password"
                        id="password"

                    />
                </div>
                <div className="flex flex-col  items-center justify-between">
                    <button type='submit' className="bg-red-500 w-full hover:bg-red-700 text-white font-medium py-2 px-4 rounded">
                        Register
                    </button>
                    <a href="/" className="text-blue-500 hover:text-blue-700">
                        Forgot password?
                    </a>
                </div>
                <p>Already have an account? <span className='text-blue-600' >
                    <Link to='/' >Login</Link>
                </span> here </p>
            </form>

        </div>

    );
};

export default Reg;
