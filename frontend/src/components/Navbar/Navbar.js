import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ changeModel }) {
    return (
        <nav className='bg-[#0d0c22] py-4 px-6 md:px-16 text-white shadow-lg'>
            <div className='max-w-7xl mx-auto flex justify-between items-center'>
                <Link to='/' className='text-3xl font-bold text-white'>
                    Resume-AI
                </Link>

                <div className='flex space-x-6 items-center'>
                    <button 
                        className='py-2 px-5 bg-transparent border border-gray-300 rounded-md text-gray-200 hover:bg-gray-100 hover:text-[#0d0c22] transition duration-300 ease-in-out'
                        onClick={() => { changeModel(true); }}
                    >
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
}
