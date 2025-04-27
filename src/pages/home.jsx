import React from 'react';
import Group from "../../public/img/Group 5.svg"
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <div className='sm:flex sm:mx-12 md:flex block justify-around md:mx-10 lg:mx-20 items-center'>
                <div className=' md:mx-0 sm:mx-0 mx-5'>
                    <p className="m-0 md:text-[30px] w-[400px] lg:text-[48px] sm:w-[300px] md:w-[400px] lg:w-[487px] sm:text-[28px] text-[26px] leading-[auto] font-bold">Stand out with a professionally designed resume</p>
                    <p className='lg:text-[16px] md:text-[15px] md:mt-3 sm:mt-4 sm:mb-4 my-4 leading-[200%] text-[#4F4F4F] sm:text-[12px] text-[14px] '>By employing the best practices and innovative tech, Resume Builder boosts your chances of landing a better job – completely for free.</p>
                    <div className='flex items-center gap-4 md:mt-4'>
                        <div>
                            <Link className="bg-[#2C4BFF] border-none text-gray-50 md:px-6 px-5 py-3 md:py-4">Build Resume</Link>
                        </div>
                        <div>
                            <p className='m-0 text-[#BDBDBD]'>No registration required</p>
                        </div>
                    </div>
                </div>
                <div className='flex sm:mt-0 items-center mt-6 justify-center'>
                    <img src={Group} className='lg:w-[588px] w-[300px] md:w-[550px] sm:w-[550px] sm:h-[320px] md:h-[470px]' alt="Hero-img" />
                </div>
            </div>
        </div>
    );
}


export default Home;