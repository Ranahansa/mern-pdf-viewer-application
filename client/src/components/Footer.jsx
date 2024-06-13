import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaBlog } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white rounded-md shadow-md ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="py-8 md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:order-2">
                        <a
                            href="https://github.com/Ranahansa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <FaGithub className="mx-4" size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <FaTwitter className="mx-4" size={24} />
                        </a>
                        <a
                            href="https://thesevendigitaldiary.blogspot.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <FaBlog className="mx-4" size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pathum-ranahansa-6a8966253/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            <FaLinkedinIn className="mx-4" size={24} />
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-base text-center text-gray-600">
                            &copy; {new Date().getFullYear()} Astro.PDF. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
