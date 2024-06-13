import React, { useState } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import { SlRocket } from 'react-icons/sl';
import upload from '../assets/upload.png';

const MAX_FILE_SIZE = 5 * 1024 * 1024; 

function UploadPdf() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [fileSizeError, setFileSizeError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file && file.size > MAX_FILE_SIZE) {
            setFileSizeError(true);
            return;
        }

        const formData = new FormData();
        formData.append('pdf', file);
        formData.append('title', title);

        try {
            const token = localStorage.getItem('token');
            console.log('Token retrieved:', token);
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            };

            const response = await axios.post('/api/pdf', formData, {
                headers,
                onUploadProgress: async (progressEvent) => {
                    const { loaded, total } = progressEvent;
                    const percentage = Math.round((loaded * 100) / total);
                    for (let i = uploadProgress; i <= percentage; i++) {
                        await new Promise(resolve => setTimeout(resolve, 50));
                        setUploadProgress(i);
                    }
                }
            });
            console.log(response.data);
            navigate('/view');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex h-screen mt-12 ml-6 mb-7">
            <div className="flex flex-col items-center justify-center w-1/2 p-10 bg-blue-50">
                <h1 className="mb-8 text-4xl font-bold text-center">Upload your PDF Documents Here</h1>
                <img src={upload} alt="Upload Illustration" className="w-full max-w-md" />
            </div>
            <div className="flex flex-col justify-center w-1/2 p-10">
                <h1 className="flex items-center gap-2 mb-6 text-3xl font-bold">
                    Upload PDF
                    <SlRocket size={30} className="text-[#833ab4]" />
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <div className="p-6 text-center border-2 border-gray-300 border-dashed">
                            <input
                                type="file"
                                onChange={(e) => {
                                    setFile(e.target.files[0]);
                                    setFileSizeError(false);
                                }}
                                className="block w-full text-sm text-gray-900 cursor-pointer focus:outline-none"
                                required
                            />
                            <p className="mt-2 text-gray-500">Upload your files here [File size should be less than <span className='text-red-500'> 5MB</span>]</p>
                            
                            <p className="text-gray-500">.PDF</p>
                            {fileSizeError && (
                                <p className="mt-2 text-red-500">File size should be less than 5MB</p>
                            )}
                        </div>
                    </div>
                    {uploadProgress > 0 && (
                        <div className="mb-4">
                            <progress className="w-full" value={uploadProgress} max="100">{uploadProgress}%</progress>
                        </div>
                    )}
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="px-4 py-2 font-bold text-gray-700 border rounded hover:bg-gray-200 focus:outline-none focus:ring"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            disabled={fileSizeError}
                            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Upload Files
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadPdf;