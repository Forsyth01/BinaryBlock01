import React from 'react';
import {BsLinkedin, BsTelegram, BsTwitter} from "react-icons/bs"
const Footer = () => {
    return (
        <div className='space-y-10 pb-10'>
            <div className="">
               <img src="/img/logo3.png" alt="" className="" />
            </div>
            <div className="flex items-center gap-3">
                <a href="#" className=''>  <BsLinkedin className='hover:cursor-pointer text-2xl p-1 text-black bg-white rounded-full'/></a> 
                <a href="#" className=''> <BsTelegram className='hover:cursor-pointer text-2xl p-1 text-black bg-white rounded-full'/></a> 
                <a href="#" className=''>  <BsTwitter className='hover:cursor-pointer text-2xl p-1 text-black bg-white rounded-full'/></a> 
            </div>
        </div>
    );
};

export default Footer;