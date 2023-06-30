import React from 'react';
import {BsLinkedin, BsTelegram, BsTwitter} from "react-icons/bs"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className=' bg-[#151515] py-20'>
        <div className='space-y-10 pb-10 m-auto w-[95%] md:w-[80%] xl:flex justify-between items-center'>
            <Link to = "/" className='hover:cursor-pointer'>
            <div className="">
               <img src="/img/logo3.png" alt="" className=" xl:w-[120%] h-[7vh] md:h-[10vh]" />
            </div>
            </Link>
            <div className="flex items-center md:gap-3 gap-1">
                <a href="#" className=''>  <BsLinkedin className='hover:cursor-pointer text-4xl xl:text-5xl xl:p-2 p-2 text-black bg-white rounded-full'/></a> 
                <a href="#" className=''> <BsTelegram className='hover:cursor-pointer text-4xl xl:text-5xl xl:p-2 p-2 text-black bg-white rounded-full'/></a> 
                <a href="#" className=''>  <BsTwitter className='hover:cursor-pointer text-4xl xl:text-5xl xl:p-2 p-2 text-black bg-white rounded-full'/></a> 
            </div>
        </div>
        </div>
    );
};

export default Footer;