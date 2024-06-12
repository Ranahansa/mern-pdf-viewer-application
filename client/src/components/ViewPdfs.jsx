import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

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
        try{
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
        <div className="max-w-md mx-auto my-8">
            <h1 className="mb-4 text-2xl font-bold">Uploaded PDFs</h1>
            <ul>
                {pdfs.map((pdf) => (
                    <li key={pdf._id} className="flex items-center justify-between mb-2">
                        <div>
                            <p className="text-lg font-semibold">{pdf.title}</p>
                            <a href={`/api/pdf/${pdf._id}`} className="text-blue-500 hover:underline">
                                {pdf.filename}
                            </a>
                        </div>
                        <button
                            onClick={() => handleDelete(pdf._id)}
                            className="px-2 py-1 ml-4 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewPdfs;
