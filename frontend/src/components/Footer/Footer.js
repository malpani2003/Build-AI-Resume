import React from 'react';

function Footer() {
    return (
        <footer className='bg-[#0d0c22] text-white mt-20 px-3'>
            <div className='container mx-auto py-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-2'>
                    <div>
                        <h2 className='text-2xl font-extrabold'>Resume AI</h2>
                        <p className='mt-2'>Enhance your career prospects with Resume AI, designed to help you craft the perfect resume.</p>
                    </div>
                    <div className='mb-5 md:mb-0'>
                        <h2 className='text-xl font-bold mb-4'>Contact Us</h2>
                        <p className='mb-2'>
                            Email: <a href='mailto:support@resumeai.com' className='text-indigo-600 hover:underline'>support@resumeai.com</a>
                        </p>
                        <p className='mb-2'>
                            Phone: <a href='tel:+1234567890' className='text-indigo-600 hover:underline'>+1 (234) 567-890</a>
                        </p>
                    </div>
                    <div className='mb-5 md:mb-0'>
                        <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
                        <ul>
                            <li className='mb-2'>
                                <a href='/about' className='text-white hover:underline'>About Us</a>
                            </li>
                            <li className='mb-2'>
                                <a href='/contact' className='text-white hover:underline'>Contact</a>
                            </li>
                            <li className='mb-2'>
                                <a href='/privacy-policy' className='text-white hover:underline'>Privacy Policy</a>
                            </li>
                            <li className='mb-2'>
                                <a href='/terms-of-service' className='text-white hover:underline'>Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className='text-center mt-8'>
                    <p className='text-sm'>
                        &copy; {new Date().getFullYear()} Resume AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
