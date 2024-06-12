import React from 'react';
import logo from '../assets/logo1.png';


const Navbar = () => {
    return (
        <nav className="static py-1 bg-white rounded-md shadow-md">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/">
                            <div className="flex items-center flex-shrink-0">
                                <img
                                    className="w-12 h-12"
                                    src={logo}
                                    alt="Your Icon"
                                />
                                <span className="ml-3 text-xl font-semibold text-[#833ab4]">Astro<span className="text-red-500">.PDF</span></span>
                            </div>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center ml-4 md:ml-6">
                            
                            <a
                                href="/guest"
                                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200"
                            >
                                Guest
                            </a>
                            <a
                                href="/login"
                                className="px-3 py-2 ml-4 text-sm font-medium text-gray-500 rounded-md hover:bg-gray-200 hover:text-gray-700"
                            >
                                Sign In
                            </a>
                            <a
                                href="/register"
                                className="px-3 py-2 ml-4 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex -mr-2 md:hidden">
                        
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-500"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            
                            <svg
                                className="block w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
