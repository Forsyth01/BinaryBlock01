import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [links, setLinks] = useState([
    {
      link: (
        // <Link to="/with">
        <a href="https://gplap.gitbook.io/binaryblock/" target="_blank">
          <p className="" onClick={() => setMenu(false)}>
            Documentation
          </p>
        </a>
      ),
    },

    {
      link: (
        <Link to="/team">
          <p className="" onClick={() => setMenu(false)}>
            Team
          </p>
        </Link>
      ),
    },
    {
      link: (
        <Link to="/faqs">
          <p className="" onClick={() => setMenu(false)}>
            Faqs
          </p>
        </Link>
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
    <div className={"fixed bg-black w-full py-3 z-10"}>
      <div className="flex items-center justify-between w-[90%] m-auto ">
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
            <AiOutlineMenu
              onClick={handleOpen}
              className="text-2xl rounded text-black"
            />
          </button>
          <Link to="/app">
            <button className="bg-[#92D940]  hover:bg-[#71a832]  hover:cursor-pointer py-2 px-3 rounded-xl text-black hidden xl:flex">
              Launch App
            </button>
          </Link>
        </div>
      </div>

      {menu && (
        <div className=" ">
          <div className=" xl:hidden w-[80%]   m-auto space-y-3 py-5 ease">
            {links.map((link) => (
              <div className="">
                <p className="">{link.link}</p>
              </div>
            ))}
            <Link to="/app">
              <button className="bg-[#92D940] my-3 hover:bg-[#71a832] hover:cursor-pointer py-2 px-3 rounded-xl text-black ">
                Launch App
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
