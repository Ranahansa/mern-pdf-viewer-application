import React, { useState } from 'react';
import axios from '../utils/axios';
import { SlRocket } from 'react-icons/sl';
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const USER_MIN_LENGTH = 4;
const USER_REGEX = /^[a-zA-Z0-9]+$/;
const PWD_MIN_LENGTH = 8;
const PWD_MAX_LENGTH = 24;

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
        <div className="max-w-md mx-auto my-8">
            <h1 className="mb-4 text-2xl font-bold">Register<SlRocket size={30} className="ml-2 text-[#833ab4]" /></h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        required
                    />
                    {username && !isUsernameValid && (
                        <p className="text-xs italic text-red-500">Please enter a valid username (at least 4 characters, alphanumeric only).</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-0 right-0 mt-2 mr-3 focus:outline-none"
                        >
                            {showPassword ? <IoIosEye /> : <IoIosEyeOff />     
}
                        </button>
                    </div>
                    {password && !isPasswordValid && (
                        <p className="text-xs italic text-red-500">Password must be between 8-24 characters long.</p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={!isUsernameValid || !isPasswordValid || !username || !password }
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed "
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
