import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApi } from '../../contextapi/ProviderContext';
import Swal from 'sweetalert2'


const Login = () => {

    const { signIn, providerLogin } = useApi();
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/dashboard/managestudent';



    const handleSignIn = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                toast('Successfully Login');
                navigate(from, { replace: true });
            })
    }


    const handleGoogleSignIn = () => {
        providerLogin()
            .then((result) => {
                const user = result.user;
                console.log(user)
                const currentUser = {
                    email: user.email
                }
                if (user) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                console.log(currentUser)
            })
    }
    return (

        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit(handleSignIn)} className="bg-white p-6 rounded-lg shadow-md w-96  ">
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
                    <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                        Log In
                    </button>
                    <a href="/" className="text-blue-500 hover:text-blue-700">
                        Forgot password?
                    </a>
                </div>
                <div className="my-4 text-center">
                    <span className="text-gray-600">or log in with</span>
                    <div className="mt-2">
                        <button onClick={handleGoogleSignIn} className="bg-red-500 hover:bg-red-700 w-full text-white font-medium py-2 rounded">
                            Google
                        </button>
                    </div>
                </div>
                <p>Dont have account? <span className='text-red-600' ><Link to='/reg'>Signup</Link></span> here </p>
            </form>
            <Toaster />
        </div>

    );
};

export default Login;
