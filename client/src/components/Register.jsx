import React, { useState } from 'react';
import axios from '../utils/axios';
import { SlRocket } from 'react-icons/sl';
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import hero from '../assets/hero.png';

const USER_MIN_LENGTH = 4;
const USER_REGEX = /^[a-zA-Z0-9]+$/;
const PWD_MIN_LENGTH = 8;
const PWD_MAX_LENGTH = 20;

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const isUsernameValid = username.length >= USER_MIN_LENGTH && USER_REGEX.test(username);
    const isPasswordValid = password.length >= PWD_MIN_LENGTH && password.length <= PWD_MAX_LENGTH;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isUsernameValid || !isPasswordValid) {
            console.log('Invalid Entry');
            return;
        }

        try {
            const response = await axios.post('/api/users/register', { username, password });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="flex h-screen mt-12 mb-5 ml-6">
            <div className="flex flex-col items-center justify-center w-1/2 p-10 rounded-md bg-blue-50">
                <h1 className="mb-8 text-4xl font-bold text-center">Learn From World’s Best Instructors Around The World.</h1>
                <img src={hero} alt="Learning Illustration" className="w-full max-w-md" />
            </div>
            <div className="flex flex-col justify-center w-1/2 p-10 mt-10">
                <h1 className="flex items-center gap-2 mb-6 text-3xl font-bold">
                    Create Account
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
                        {username && !isUsernameValid && (
                            <p className="mt-1 text-xs text-red-500">Please enter a valid username (at least 4 characters, alphanumeric only).</p>
                        )}
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
                        {password && !isPasswordValid && (
                            <p className="mt-1 text-xs text-red-500">Password must be between 8-24 characters long.</p>
                        )}
                    </div>
                    
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold" htmlFor="password">
                            Confirm Password
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
                        {password && !isPasswordValid && (
                            <p className="mt-1 text-xs text-red-500">Password must be between 8-24 characters long.</p>
                        )}
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="terms" required className="mr-2" />
                        <label htmlFor="terms" className="text-sm">
                            I agree to the <a href="/terms" className="text-blue-600 hover:underline">terms of service</a> and <a href="/privacy" className="text-blue-600 hover:underline">privacy policy</a>.
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={!isUsernameValid || !isPasswordValid || !username || !password}
                        className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Sign in</a>
                </p>
            </div>
        </div>
    );
}

export default Register;
