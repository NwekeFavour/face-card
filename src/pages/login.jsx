import React from 'react';
import FC from "../../public/img/face-card.svg"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';


function Login(props) {
    return (
        <div className=''>
            <div className='sm:absolute top-0 bg-white w-[100%]'>
                <img src={FC} alt="" />
            </div>
            <div className='sm:px-0 px-6 sm:pt-0 pt-4 sm:flex items-center justify-center bg-[#e4e6f7] w-full h-[100vh]'>
                <div className=' text-center'>
                    <p className="m-0 mb-2 xl:text-[26px] lg:text-[24px] md:text-[28px] sm:text-[14px] text-[22px] font-bold text-[#282828] opacity-75">User Login</p>
                    <div className="hr mx-auto opacity-25 bg-[#282828] h-[2px] sm:w-100"></div>
                    <Input className="py-7 bg-white border-blue-950 focus:ring-none focus:shadow-none focus-visible:ring-[0px] shadow-none mt-3 aria-invalid:border-none focus:ring-0" placeholder="Email Address" type="email" />
                    <Input className="py-7 bg-white border-blue-950 focus:ring-none focus:shadow-none focus-visible:ring-[0px] shadow-none mt-3 aria-invalid:border-none focus:ring-0" placeholder="Password" type="password" />
                    <div className='flex mt-4 items-cen justify-between'>
                        <div className="flex items-center space-x-2">
                            <Checkbox className="border-black" id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm opacity-75 text-[#282828] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Remember me
                            </label>
                        </div>
                        <div>
                            <Link className='underline text-[16px] focus:underline text-[#282828] opacity-75'>Forget password?</Link>
                        </div>
                    </div>
                    <Button className='font-bold text-[#fff] w-full mt-3 py-5 text-[16px]'>Log in</Button>
                </div> 
            </div>
        </div>
    );
}

export default Login;