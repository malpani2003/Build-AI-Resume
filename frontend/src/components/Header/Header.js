import React from 'react';

function Header() {
    return (
        <div className='flex flex-col content-center mt-32 text-black px-4 md:px-8'>
            <div className='text-center'>
                <h1 className='font-bold text-4xl'>
                    Your Communication, Optimized
                </h1>
                <p className='mt-4 text-2xl w-auto'>
                    Craft, personalize, and automate your email replies with our free
                    AI-powered email response generator. Designed for professional
                    correspondence, customer service, and everyday communication needs.
                </p>
                <button className='bg-[#FCFAF9] border-2 border-[#FCFAF9] text-black p-3 font-semibold rounded-lg mt-5 transition duration-300 ease-in-out hover:bg-indigo-900 hover:text-white'>
                    Create a New Response
                </button>
            </div>

            <h2 className='font-bold text-2xl mt-12'>Customized Replies for Every Communication Need</h2>
            <p className='mt-4 text-xl w-auto'>
                Email Response AI is your ultimate tool for any email scenario.
                Whether it’s customer support, professional networking, or routine
                correspondence, our app tailors every response to your needs.
            </p>

            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='bg-[#ffffff] text-black p-6 rounded-lg shadow-lg'>
                    <h3 className='font-bold text-lg text-[#0d0c22]'>AI-Powered Response Optimization</h3>
                    <p className='mt-2'>
                        Utilize AI to craft the most effective replies. Our tool ensures clear, concise, and contextually
                        appropriate responses.
                    </p>
                </div>
                <div className='bg-[#ffffff] text-black p-6 rounded-lg shadow-lg'>
                    <h3 className='font-bold text-lg text-[#0d0c22]'>All-in-One Email Organizer</h3>
                    <p className='mt-2'>
                        Streamline your email management with our all-in-one platform. Email Response AI consolidates reply templates,
                        response history, and communication tips. Manage all your email responses in one place.
                    </p>
                </div>
                <div className='bg-[#ffffff] text-black p-6 rounded-lg shadow-lg'>
                    <h3 className='font-bold text-lg text-[#0d0c22]'>Collaborative Response Drafting</h3>
                    <p className='mt-2'>
                        Collaborate on crafting replies with team members. Our real-time feature makes group communication
                        planning effortless, ensuring consistency and coherence.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;
