import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { Button } from '../components/ui/button';
import Header from '../components/header';

function Templates(props) {
    return (
        <div>
            <Header />
            <div className='bg-[#e4e6f7] px-7 py-4 w-[100%] xl:h-[320px]'>
                <div className='flex items-center gap-2'>
                    <div>
                        <CiHome/>
                    </div>
                    <div>
                        <IoIosArrowForward />
                    </div>
                    <div>
                        <Link to={"/resume-templates"} className='hover:underline text-[#282828]'>Resume Templates</Link>
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <div>
                        <p className="m-0 xl:text-[40px] font-bold lg:text-[36px] md:text-[32px] text-[#282828] text-[24px] sm:text-[26px]">Modern Resume Templates</p>
                    </div>
                    <div className='xl:w-[70%] lg:w-[80%] lg:mt-3 md:mt-2 mt-2 xl:mt-4 text-[#282828] xl:text-[17px] opacity-75 mx-auto'>
                        <p className="m-0">Stand out in 2025 with our sleek, professionally designed resume templates, compatible with both Word and Google Docs. Want more options? Explore our full collection of free resume templates or create one instantly using our AI-powered resume builder.</p>
                    </div>
                    <div className='sm:flex md:mt-6 mt-4 items-center justify-center gap-4'>
                        <div>
                            <Button className='bg-[#2C4BFF]  md:px-6 md:py-6 text-[#fff] border sm:px-4 sm:py-5 w-full'>Build My Dream Resume</Button>
                        </div>
                        <div className='sm:mt-0 mt-3'>
                            <Button className='w-full sm:px-6 sm:py-6 bg-transparent border text-[#2C4BFF] border-[#2C4BFF]'>Upload Existing Resume</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Templates;