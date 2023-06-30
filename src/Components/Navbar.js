import React from "react";
import {AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
  return (
    <div className="fixed bg-black py-4 w-[100%] z-10">
      <div className="flex items-center justify-between w-[95%] m-auto ">
        <div className="logo flex items-center">
        <img src="/img/logo3.png" alt="" className="" /></div>
        <div className="icon">
            <i className="">
            <AiOutlineMenu className="text-3xl rounded "/></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
