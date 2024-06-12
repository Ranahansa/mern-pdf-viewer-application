import React from 'react';
import { SlRocket } from 'react-icons/sl';
import { HiArrowRightEndOnRectangle } from 'react-icons/hi2';
import { HiMail } from 'react-icons/hi';
import { FaCloudUploadAlt, FaLock, FaDollarSign, FaGlobe, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa';
import pdf from '../assets/pdf.png';
import drag from '../assets/drag.png';
import link from '../assets/link.png';
import launch from '../assets/launch.png';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen mt-12 bg-white">
            <div className="mb-8 text-center">
                <h1 className="flex items-center justify-center mb-2 font-extrabold tracking-wider text-7xl">
                    PDF Upload
                    <SlRocket size={65} className="ml-2 text-[#833ab4]" />
                </h1>
                <a href="/upload">
                    <button className="px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
                        Upload PDF
                    </button>
                </a>
                <p className="mt-2 text-gray-600">100,000+ happy users</p>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="mb-4 text-2xl font-semibold">Host a PDF Online</h2>
                    <div className="flex items-start mb-6 text-gray-700">
                        <p className="flex-grow">
                            Tiiny Host is a simple tool to upload and host your PDF online. Sharing your PDF online can be complicated.
                            With Tiiny Host, simply drag & drop your PDF document and we'll generate a unique link for you to share your
                            PDF file in seconds. Upload it once & share infinitely to viewers all over the world with one simple link!
                        </p>
                        <img
                            className="w-20 h-20 ml-4"
                            src={pdf}
                            alt="PDF Icon"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 bg-white">
                <h1 className="mt-8 text-5xl font-bold">How to host your PDF in 3 simple steps</h1>
                <a href="/upload">
                    <button className="flex items-center justify-center py-2 mt-12 font-bold text-white bg-blue-500 rounded px-9 hover:bg-blue-600">
                        <HiArrowRightEndOnRectangle className="mr-2" /> Upload PDF
                    </button>
                </a>
                <div className="max-w-5xl mx-auto mt-12">
                    <div className="flex justify-center space-x-8">
                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                            <img src={drag} alt="Drag and drop your files" className="mb-4 w-36 h-36" />
                            <h2 className="mb-2 text-xl font-bold">1. Drag and drop your PDF</h2>
                            <p className="text-center text-gray-600">
                                Drag & drop or browse & select the PDF file you would like to host & share.
                            </p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                            <img src={link} alt="Enter a link name" className="mb-4 w-36 h-36" />
                            <h2 className="mb-2 text-xl font-bold">2. Enter a link name</h2>
                            <p className="text-center text-gray-600">
                                Enter a name for the link where your PDF will be shared, or you can leave this blank.
                            </p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                            <img src={launch} alt="Click launch" className="mb-4 w-36 h-36" />
                            <h2 className="mb-2 text-xl font-bold">3. Click launch</h2>
                            <p className="text-center text-gray-600">
                                Click launch and that's it! Your PDF is now hosted online to share with the world.
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="mt-8 text-5xl font-bold">Features</h1>
                <p className="mt-2 text-gray-600">What else is there?</p>
                <a href="/upload">
                    <button className="flex items-center justify-center py-2 mt-12 font-bold text-white bg-blue-500 rounded px-9 hover:bg-blue-600">
                        <HiArrowRightEndOnRectangle className="mr-2" /> Upload PDF
                    </button>
                </a>
            </div>
            <div className="grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                    <FaCloudUploadAlt className="mb-4 text-4xl text-indigo-500" />
                    <h3 className="mb-2 text-lg font-semibold">Drag And Drop Upload</h3>
                    <p className="text-center text-gray-600">
                        No need for any hosting knowledge, simply drag & drop your PDF file.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                    <FaLock className="mb-4 text-4xl text-indigo-500" />
                    <h3 className="mb-2 text-lg font-semibold">Password Protect PDFs</h3>
                    <p className="text-center text-gray-600">
                        Secure your PDFs by easily adding a password to restrict viewers.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                    <FaDollarSign className="mb-4 text-4xl text-indigo-500" />
                    <h3 className="mb-2 text-lg font-semibold">Low cost</h3>
                    <p className="text-center text-gray-600">
                        Tiiny Host is a static hosting tool which means its very cheap to host your PDF regardless of how large it is or
                        number of viewers.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                    <FaGlobe className="mb-4 text-4xl text-indigo-500" />
                    <h3 className="mb-2 text-lg font-semibold">Fast Worldwide</h3>
                    <p className="text-center text-gray-600">
                        We run on Amazon Web Services allowing your users to access your PDF very quickly wherever they are in the
                        world.
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                    <FaGlobeAmericas className="mb-4 text-4xl text-indigo-500" />
                    <h3 className="mb-2 text-lg font-semibold">Free Web Address</h3>
                    <p className="text-center text-gray-600">
                        There's no need to own your web address. You can share your PDF on our tiny site address (e.g. mypdf.tiiny.site)
                    </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                    <FaShieldAlt className="mb-4 text-4xl text-indigo-500" />
                    <h3 className="mb-2 text-lg font-semibold">Reliable</h3>
                    <p className="text-center text-gray-600">
                        Built upon Amazon Web Services, Tiiny Host provides a very reliable service to share your PDF.
                    </p>
                </div>
            </div>
            <div className="mt-12 mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
                <p className="mb-6 text-gray-600">Have a question or need help? Feel free to reach out to us.</p>
                <a href="mailto:your-email@example.com"
                    className="flex items-center justify-center px-6 py-3 text-white transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    <HiMail className="mr-2" />
                    pathumranahansa7777@gmail.com
                </a>
            </div>
        </div>
    );
};
export default Home;
