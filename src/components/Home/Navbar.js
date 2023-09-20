import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-cyan-900 w-full text-white shadow-lg">
        <div className="container  mx-auto flex lg:items-center items-start  lg:h-16">
          <div className="flex flex-col lg:flex-row lg:items-center items-start justify-start lg:justify-between w-full">
            <div className="flex w-full justify-between px-3 py-3 lg:my-0">
              <NavLink to="/" className="flex items-center">
                <img src={logo} alt="" className="rounded-full w-12 h-12" />
              </NavLink>
              <button
                onClick={toggleNavbar}
                className="lg:hidden text-white focus:outline-none"
              >
                <svg
                  className="w-8 h-8 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`${
                isOpen ? "block " : "hidden"
              } lg:flex lg:items-center text-xl lg:w-auto lg:m-0 m-5`}
            >
              <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-4  font-medium ">
                <li className="py-5 xl:p-8 ">
                  <NavLink
                    to="/"
                    onClick={toggleNavbar}
                    className="hover:text-cyan-500"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-5 xl:p-8">
                  <NavLink
                    to="/image"
                    onClick={toggleNavbar}
                    className="hover:text-cyan-500"
                  >
                    Gallery
                  </NavLink>
                </li>
                <li className="py-5 xl:p-8">
                  <NavLink
                    to="/about"
                    onClick={toggleNavbar}
                    className="hover:text-cyan-500"
                  >
                    About
                  </NavLink>
                </li>
                <li className="py-5 xl:p-8">
                  <NavLink
                    to="/signup"
                    onClick={toggleNavbar}
                    className="hover:text-cyan-500"
                  >
                    Signup
                  </NavLink>
                </li>
                <li className="py-5 xl:p-8">
                  <NavLink
                    to="/login"
                    onClick={toggleNavbar}
                    className="hover:text-cyan-500"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
