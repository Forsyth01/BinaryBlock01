import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [links, setLinks] = useState([
    {
      link: (
        <p className="" onClick={()=> setMenu(false)}>
          <Link to="https://gplap.gitbook.io/binaryblock/">Documentation</Link>
        </p>
      ),
    },

    {
      link: (
        <p className="" onClick={()=> setMenu(false)}>
          <Link to="/team">Team</Link>
        </p>
      ),
    },
    {
      link: (
        <p className="" onClick={()=> setMenu(false)}>
          <Link to="/faq">FAQs</Link>
        </p>
      ),
    },
  ]);

  const [menu, setMenu] = useState(false);

  function handleOpen() {
    setMenu(!menu);
  }
  const elementRef = useRef(null);

  useEffect(() => {
   gsap.from(".ease", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.in",
    });
  }, [handleOpen]);


  return (
    <div className={ "fixed bg-black w-full py-3 z-10" }>
      <div className="flex items-center justify-between w-[85%] md:w-[90%] xl:w-[96%] m-auto ">
        <div className="logo md:flex gap-20 items-center">
          <Link to="/" className="hover:cursor-pointer">
            <img src="/img/logo3.png" alt="" className="" />
          </Link>
          <div className="hidden xl:flex gap-8">
            {links.map((link) => (
              <div className="">
                <p className="">{link.link}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="icon">
          <button className="bg-[#92D940] rounded border border-[#fff] px-3 py-2 xl:hidden">
            <AiOutlineMenu onClick={handleOpen} className="text-2xl rounded text-black" />
          </button>
          <button className="bg-[#92D940] hover:bg-[#87c73f] hover:cursor-pointer py-2 px-3 rounded-xl text-black hidden xl:flex">
            Launch App
          </button>
        </div>
      </div>

      {menu  && <div className=" " >
        <div className=" xl:hidden w-[80%]   m-auto space-y-3 py-5 ease">
          {links.map((link) => (
            <div className="">
              <p className="">{link.link}</p>
            </div>
          ))}
          <button className="bg-[#92D940] hover:bg-[#87c73f] hover:cursor-pointer py-2 px-3 rounded-xl text-black ">
            Launch App
          </button>
        </div>
      </div>}
    </div>
  );
};

export default Navbar;
