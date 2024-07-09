'use client'
import { useState } from 'react';
import staticResults from '../../public/results.json';
import Footer from './Footer';

export default function Home() {
    const [name, setName] = useState('');
    const [results, setResults] = useState([]);

    const searchResults = () => {
        const filteredResults = staticResults.filter(result =>
            result.name.toLowerCase().includes(name.toLowerCase())
        );
        setResults(filteredResults);
    };
    return (
        <div className='flex flex-col font-mono justify-center items-center px-1'>
            <h1 className='lg:text-2xl mt-2 font-bold text-white gradiant'>Welcome to Bsc.IT Result Portal</h1>
            
            <input
                className='w-full p-2 mx-4 mt-4 lg:w-1/2'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Search your result by name only"
            />
            <button className='border  text-white px-4 py-2 rounded mt-2 hover:bg-black' onClick={searchResults}>Search</button>
            <div id="results" className='flex flex-wrap text-white p-4  '>
                {results.length === 0 ? (
                    <p>NO Result</p>
                ) : (
                    results.map((result, index) => (
                        <div className='border rounded-md p-4 m-2 bg-[#5c52a2] w-full' key={index}>
                            <h2 className='text-xl font-bold text-[#030637]'>Name: {result.name}</h2>
                            <p>Roll No: {result.roll_no}</p>
                            <p>Marks in 3rd year: {result.total_marks_3rd}/500</p>
                            <p>Total marks in Honours: {result.total_marks_hons}/800</p>
                            <p>Division: {result.division}</p>
                            <p>Grand Total: {result.grand_total}/1500</p>
                         
                        </div>
                    ))
                )}
            </div>
            <Footer/>
        </div>
    );
}
