'use client'

// import { useState } from 'react'

// pages/index.js
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if name and number are provided
    if (name && number) {
      router.push('/levels');
    }
  };

  return (
    <div className="container m-auto">
      <h1 className="text-3xl font-bold mb-4">Login Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="border border-gray-300 rounded-md px-4 py-2 w-64" 
        />
        <input 
            type="text" 
            placeholder="Number" 
            value={number} 
            onChange={(e) => setNumber(e.target.value)} 
            className="border border-gray-300 rounded-md px-4 py-2 w-64"
        />
        <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
            Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
