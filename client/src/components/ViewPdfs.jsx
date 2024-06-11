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

    return (
        <div className="max-w-md mx-auto my-8">
            <h1 className="mb-4 text-2xl font-bold">Uploaded PDFs</h1>
            <ul>
                {pdfs.map((pdf) => (
                    <li key={pdf._id}>
                        <a href={`/api/pdf/${pdf._id}`} className="text-blue-500 hover:underline">
                            {pdf.filename}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewPdfs;
