import React, { useState } from "react";
import pic from "../../public/profile.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { FcDownload } from "react-icons/fc";
import resume from "../../public/Resume.pdf"

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Abhise<span className="text-green-500 text-2xl">k</span>
              <p className="text-sm">Aspiring Software Developer</p>
            </h1>
          </div>

          {/* desktop navbar */}
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Resume Button positioned next to the Contact link */}
            <a
              href="/Resume.pdf" // Change this to your actual resume link
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-2 py-2 ml-8 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md duration-200"
            >
              Resume
              <FcDownload className="mr-1" size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      {menu && (
        <div className="bg-white">
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                key={id}
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
