import React from "react";
// import {BsDiscord, BsInstagram, BsLinkedin, BsTelegram, BsTwitter} from "react-icons/bs"
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BiLogoDiscord } from "react-icons/bi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="">
      <div className=" bg-[#151515] py-10  w-full z-0 ">
        <div className="xl:space-y-10 space-y-5  m-auto w-[90%] md:w-[90%] xl:flex justify-between items-center">
          <Link to="/" className="hover:cursor-pointer">
            <div className="col-lg-3 mt-3">
              <img
                src="/img/logo3.png"
                alt=""
                className=" xl:w-[120%] h-[7vh md:h-[10vh"
              />
            </div>
          </Link>
          <div className="flex items-center md:gap-2 gap-1">
            <a href="#" className="">
              {" "}
              <ImLinkedin className="hover:cursor-pointer  xl:text-3xl   text-xl  rounded-full" />
            </a>
            <a href="#" className="">
              {" "}
              <BiLogoDiscord className="hover:cursor-pointer  xl:text-3xl    text-xl rounded-full" />
            </a>
            <a href="#" className="">
              {" "}
              <FaInstagram className="hover:cursor-pointer  xl:text-3xl text-xl   rounded-full" />
            </a>
            <a href="#" className="">
              {" "}
              <FaTelegram className="hover:cursor-pointer  xl:text-3xl text-xl rounded-full" />
            </a>
            <a href="#" className="">
              {" "}
              <FaTwitter className="hover:cursor-pointer  xl:text-3xl text-xl rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
