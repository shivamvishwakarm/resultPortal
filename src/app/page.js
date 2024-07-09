'use client'
import { useState } from 'react';
import staticResults from '../../public/results.json';

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
        <div>
            <h1>Search Your Results</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <button onClick={searchResults}>Search</button>
            <div id="results">
                {results.length === 0 ? (
                    <p>No results found.</p>
                ) : (
                    results.map((result, index) => (
                        <div key={index}>
                            <p>Roll No: {result.roll_no}</p>
                            <p>Name: {result.name}</p>
                            <p>Marks in 3rd year: {result.total_marks_3rd}/500</p>
                            <p>Total marks in Honours: {result.total_marks_hons}/800</p>
                            <p>Division: {result.division}</p>
                            <p>Grand Total: {result.grand_total}/1500</p>
                            <hr />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
