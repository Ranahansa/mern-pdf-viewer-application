import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { SlRocket } from 'react-icons/sl';
import uploaded from '../assets/uploaded.png';

function ViewPdfs() {
    const [pdfs, setPdfs] = useState([]);

    useEffect(() => {
        const fetchPdfs = async () => {
            try {
                const response = await axios.get('/api/pdf');
                setPdfs(response.data.pdfs);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPdfs();
    }, []);

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
                'Authorization': `Bearer ${token}`
            }

            await axios.delete(`/api/pdf/${id}`, { headers });
            setPdfs(pdfs.filter(pdf => pdf._id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex h-screen mt-12 ml-6 mb-7">
            <div className="flex flex-col items-center justify-center w-1/2 p-10 bg-blue-50">
                <h1 className="mb-8 text-4xl font-bold text-center">Your Uploaded PDFs</h1>
                <img src={uploaded} alt="PDF Illustration" className="w-full max-w-md" />
            </div>
            <div className="flex flex-col justify-center w-1/2 p-10">
                <h1 className="flex items-center gap-2 mb-6 text-3xl font-bold">
                    Uploaded PDFs
                    <SlRocket size={30} className="text-[#833ab4]" />
                </h1>
                <ul className="bg-white rounded-lg shadow-md">
                    {pdfs.map((pdf) => (
                        <li key={pdf._id} className="flex items-center justify-between p-4 border-b">
                            <div>
                                <p className="text-lg font-semibold">{pdf.title}</p>
                                <a href={`http://localhost:5000/api/pdf/${pdf._id}.pdf`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    {pdf.filename}
                                </a>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleDelete(pdf._id)}
                                    className="px-2 py-1 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:ring"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ViewPdfs;
