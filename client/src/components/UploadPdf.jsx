import React, { useState } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';

function UploadPdf() {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('pdf', file);

        try {
            const token = localStorage.getItem('token'); 
            console.log('Token retrieved:', token);
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}` 
            };

            const response = await axios.post('/api/pdf', formData, { headers });
            console.log(response.data);
            navigate('/view-pdfs');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-md mx-auto my-8">
            <h1 className="mb-4 text-2xl font-bold">Upload PDF</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                    Upload
                </button>
            </form>
        </div>
    );
}

export default UploadPdf;
