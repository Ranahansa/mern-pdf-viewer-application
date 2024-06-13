import React, { useState } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import { SlRocket } from 'react-icons/sl';
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';
import astro from '../assets/login.png';

function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', { username, password });
            localStorage.setItem('token', response.data.token);
            console.log('Token saved:', response.data.token);
            // toast.success('Login successful!', {
            //     position: toast.POSITION.TOP_RIGHT
            // });
            setIsLoggedIn(true);
            navigate('/upload');
            console.log(response.data);
        } catch (error) {
            console.error(error);
            alert('Login failed. Please check your credentials and try again.');
            // toast.error('Login failed. Please check your credentials and try again.', {
            //     position: toast.POSITION.TOP_RIGHT
            // });
        }
    };

    return (
        <div className="flex h-screen mt-12 ml-6 mb-7">
            <div className="flex flex-col items-center justify-center w-1/2 p-10 rounded-md bg-blue-50">
                <h1 className="mb-8 text-4xl font-bold text-center">Welcome Back! Please Login to Your Account.</h1>
                <img src={astro} alt="Login Illustration" className="w-full max-w-md" />
            </div>
            <div className="flex flex-col justify-center w-1/2 p-10">
                <h1 className="flex items-center gap-2 mb-6 text-3xl font-bold">
                    Login
                    <SlRocket size={30} className="text-[#833ab4]" />
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
                            >
                                {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
