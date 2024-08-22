import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({changeModel}) {

    return (
        <nav className='flex justify-between items-center bg-[#0d0c22] py-4 px-3 md:px-16 text-white drop-shadow-md'>
            <Link to='/' className='text-2xl font-bold'>
                Email-AI
            </Link>
            
            <div className='flex space-x-8'>
                <button className='py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition' onClick={()=>{changeModel(true)}}>
                    Login
                </button>
            </div>
        </nav>
    );
}
