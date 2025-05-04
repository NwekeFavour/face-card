import React from 'react';
import Group from "../../public/img/Group 5.svg"
import { Link } from 'react-router-dom';
import  Icon from "../../public/img/icon_three.svg"
import  ResumeOne from "../../public/img/Template1.svg"
import  ResumeTwo from "../../public/img/Template2.svg"
import  Colab from "../../public/img/colab.svg"
import  GroupOne from "../../public/img/Group.svg"
import FC from "../../public/img/About.svg"
import ImageOne from "../../public/img/image 7.svg"
import ImageTwo from "../../public/img/image 8.svg"
import ImageThree from "../../public/img/image 9.svg"
import Polygon from "../../public/img/Polygon.svg"
import Circle from "../../public/img/circle.svg"
import Vector from "../../public/img/Group221.svg"
import Footer from '../components/footer';
import * as motion from "motion/react-client"
import { useScroll } from 'motion/react';


function Home(props) {
    const { scrollYProgress } = useScroll()

    return (    
        <div>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    originX: 0,
                    backgroundColor: "#2C4BFF",
                }}
            />
            <div className='sm:flex sm:mx-12 md:flex block justify-around md:mx-10 lg:mx-20 items-center'>
                <div className=' md:mx-0 sm:mx-0 mx-5'>
                    <p className="m-0 md:text-[30px] w-[100%] lg:text-[48px] sm:w-[300px] md:w-[400px] lg:w-[487px] sm:text-[28px] text-[26px] leading-[auto] font-bold">Stand out with a professionally designed resume</p>
                    <p className='lg:text-[16px] md:text-[15px] md:mt-3 sm:mt-4 sm:mb-4 my-4 leading-[200%] text-[#4F4F4F] sm:text-[12px] text-[14px] '>By employing the best practices and innovative tech, Resume Builder boosts your chances of landing a better job – completely for free.</p>
                    <div className='flex items-center gap-4 md:mt-4'>
                         <div>
                            <Link className="bg-[#2C4BFF] resume border-none text-gray-50 md:px-6 px-5 py-3 md:py-4">Build Resume</Link>
                        </div>
                        <div>
                            <p className='m-0 text-[#BDBDBD]'>No registration required</p>
                        </div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.1,
                    scale: { type: "spring", visualDuration: 0.2, bounce: 0.8 }
                }}  className='flex  sm:mt-0 items-center mt-6 justify-center' >
                    <img src={Group} className='lg:w-[588px] w-[300px] md:w-[550px] sm:w-[550px] sm:h-[320px] md:h-[470px]' loading='lazy' alt="Hero-img" />
                </motion.div>
            </div>
            <div className='bg-black md:block lg:flex lg:px-5 py-5 md:mt-0 mt-5 px-10 sm:px-14 sm:py-6 lg:py-32  md:py-20 justify-between lg:h-[650px] md:h-[840px] xl:h-[620px] sm:h-[500px] h-[570px] w-[100%]'>
                <div   className='lg:ps-24 sm:ps-14   md:px-6 '>
                    <div className='mb-4'>
                        <p className=" lg:text-[42px] text-[26px] md:text-[32px] sm:text-[24px] text-blue-50">Resume Templates</p>
                        <p className='text-[#969696] text-justify'>Create a professional resume effortlessly with our modern, customizable templates. Choose from a variety of layouts tailored for every industry and career stage.</p>
                    </div>
                    <Link className='bg-accent rounded lg:w-[180px] w-[180px] py-2 sm:py-2 md:w-[200px] sm:w-[180px] lg:px-3 flex items-center justify-center gap-5 lg:py-1 text-blue-950'><p className="m-0">See Templates</p><div>
                        <p className="m-0"><img src={Icon} alt="arrow-icon" /></p></div></Link>
                </div>
                <div className='lg:mt-0 sm:mt-4 mt-6 md:mt-6'>
                    <div className="flex md:px-7 lg:px-0 md:gap-5 gap-5 justify-center sm:justify-center sm:gap-5 md:justify-between items-center">
                        <div>
                            <img className='sm:w-[200px] w-[250px] md:w-[600px]' src={ResumeOne} alt="resume-one" />
                        </div>
                        <div>
                            <img className='sm:w-[200px] w-[250px] md:w-[600px]' src={ResumeTwo} alt="resume-two" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:mx-10 mx-10 my-5 sm:mx-0 sm:my-8 lg:my-10'>
                <div className='flex justify-center mb-10 sm:mb-12 md:mt-5'>
                    <img className='md:w-[220px] w-[150px] sm:w-[200px] xl:w-[250px]' src={FC} alt="" />
                </div>
                <div className='lg:flex lg:mx-10 sm:mx-10 sm:my-6 md:block md:mx-9 md:my-10  lg:gap-8  lg:my-10 items-start justify-between'>
                    <div className='relative'>
                        <div className='absolute top-[-15px]  left-0 xl:left-[-20px] lg:left-0 sm:left-[100px] md:left-0  z-[-1]'>
                            <img className='sm:w-[60px] w-[50px] md:w-[80px] lg:w-[75px]'  src={GroupOne} alt="" />
                        </div>
                        <img className='md:w-[400px] sm:w-[350px] w-[280px] mx-auto xl:w-[490px] lg:w-[420px]' src={Colab} alt="collaboration-room" />
                        <div className='absolute xl:bottom-[-10px] right-0 sm:right-[100px] sm:bottom-[-15px] md:right-0 lg:bottom-[-10px] lg:right-[-20px]  xl:right-[-30px]  z-[-1]'>
                            <img className='sm:w-[60px] w-[50px] md:w-[80px]  lg:w-[75px]'  src={GroupOne} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='xl:w-[500px] mt-16 md:mt-18 sm:mt-10 lg:mt-0 md:w-full lg:w-[490px] sm:w-full w-[100%]'>
                            <p className="m-0 text-justify text-blue-950">Facecard is a product of Facecard Labs — a global innovation & digital skill learning center. Facecard was born of the need to create a new way for job-seekers to connect with recruiters. Hence, our best hands got to work with one thing in mind: to help you find a great job faster. We went even further to ensure that our template designs meet industry standards and are accepted by leading HR departments. With us, you can spin out an impressive resume that makes a memorable first impression!</p>
                        </div>
                        <div className='md:mt-6 mt-4'>
                            <Link className='bg-[#2C4BFF] rounded-3xl text-blue-100 sm:px-8 px-7 py-2 md:px-10 md:py-3'>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xl:mx-16 lg:mx-14 md:mx-10 sm:mx-9 mx-5'>
                <div>
                    <p className="text-center xl:text-[48.6px] font-semibold tracking-[1%] lg:text-[40px] md:text-[32px] sm:text-[30px] text-[24px] m-0">Build your <span className='text-[#2C4BFF]'> resume </span>in 3 steps</p>
                </div>
                <div className='flex md:my-0 my-4 items-center justify-between gap-3'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img className='xl:w-[240px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[120px]' src={ImageOne} alt="" />
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <p className="m-0 xl:text-[57.81px] text-[#2C4BFF] lg:text-[50px] md:text-[45px] sm:text-[42px] text-[35px]">1.</p>
                            </div>
                            <div className=''>
                                <div>
                                    <p className="m-0 font-bold sm:font-semibold md:font-semibold text-[#2C4BFF]" >Pick a Template</p>
                                </div>
                                <div>
                                    <p className="m-0 text-[#2C4BFF]">Fill in the blanks and see results in real-time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:ms-50 lg:ms-40'>
                        <img className='xl:w-[70px] lg:w-[65px] md:w-[50px] w-[60px]' src={Circle} alt="" />
                    </div>
                </div>
                <div className='flex md:my-0 my-6 items-center justify-end gap-3'>
                    <div className='flex gap-3 items-end'>  
                        <div>
                            <img className='xl:w-[70px] lg:w-[65px] md:w-[50px] w-[60px]' src={Vector} alt="" />
                        </div>
                        <div>
                            <img className='xl:w-[240px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[120px]'  src={ImageTwo} alt="" />
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <p className="m-0 xl:text-[57.81px] text-[#2C4BFF] lg:text-[50px] md:text-[45px] sm:text-[42px] text-[35px]">2.</p>
                        </div>
                        <div className=''>
                            <div>
                                <p className="m-0 font-bold sm:font-semibold md:font-semibold text-[#2C4BFF]" >Customize Your Layout</p>
                            </div>
                            <div>
                                <p className="m-0 text-[#2C4BFF]">Give your document a professional and elegant look.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex md:my-0 my-4 items-start justify-between'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img className='xl:w-[240px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[120px]'  src={ImageThree} alt="" />
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <p className="m-0 xl:text-[57.81px] text-[#2C4BFF] lg:text-[50px] md:text-[45px] sm:text-[42px] text-[35px]">3.</p>
                            </div>
                            <div className=''>
                                <div>
                                    <p className="m-0 font-bold sm:font-semibold md:font-semibold text-[#2C4BFF]" >Hit 'Download!</p>
                                </div>
                                <div>
                                    <p className="m-0 text-[#2C4BFF]">Download your resume, apply, get more interviews.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='xl:w-[70px] lg:w-[65px] md:w-[50px] w-[60px]' src={Polygon} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}


export default Home;