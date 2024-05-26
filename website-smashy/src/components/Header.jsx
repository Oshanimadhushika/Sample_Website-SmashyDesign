import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoN.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-5 ">
      <div className="flex items-center justify-between  ">
        <div className="flex justify-start ">
          <img src={logo} alt="Neon Strategies Logo" className="w-12 h-12" />
          <h1 className="text-black text-sm w-2 font-semibold">
            Neon Strategies
          </h1>
        </div>

        <div className="flex-grow  flex align-middle xl:justify-center lg:justify-center items-center sm:justify-end md:justify-center justify-end">
          <ul className="text-black text-lg  gap-8 hidden md:flex lg:flex xl:flex items-center">
            <li>
              <Link
                className="text-decoration-none transition-colors hover:text-blue-500 "
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-decoration-none transition-colors hover:text-blue-500  flex items-center"
              >
                Services <span className="ml-2">&#9662;</span>
              </button>
              {isDropdownOpen && (
                <ul className="absolute mt-2 py-2 w-48 bg-white border rounded shadow-lg">
                  <li>
                    <Link
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      to="/"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      to="/"
                    >
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      to="/"
                    >
                      Creative Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                className="text-decoration-none transition-colors hover:text-blue-500 "
                to="/"
              >
                Process
              </Link>
            </li>

            <li>
              <Link
                className="text-decoration-none transition-colors hover:text-blue-500 "
                to="/"
              >
                FAQ
              </Link>
            </li>

            <li>
              <Link
                className="text-decoration-none transition-colors hover:text-blue-500 "
                to="/"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="md:hidden ">
            <div className="text-black  lg text-3xl" onClick={toggleSidebar}>
              {sidebarOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
            </div>
          </div>
        </div>

        <div className="  justify-end hidden md:block ">
          <button className="rounded-full bg-blue-800 text-white font-semibold p-2 pl-3 pr-3 hover:bg-gray-400 text-sm">
            Let's Talk
          </button>
        </div>
      </div>

      <div
        className={`sidebar fixed top-20 left-0 h-full w-full bg-white  ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-black text-lg text-center pt-20 gap-7">
          <li
            className={`py-2 border-2 border-gray-100 p-3 hover:bg-blue-900 hover:text-white ${
              isDropdownOpen ? "hidden" : "block"
            }`}
          >
            <Link
              className=" hover:bg-blue-700 hover:text-white"
              to="/"
              onClick={toggleSidebar}
              exact
            >
              About
            </Link>
          </li>

          <li className=" py-2  border-2 border-gray-100 p-3 hover:bg-blue-900 hover:text-white">
            <button
              onClick={toggleDropdown}
              className="text-decoration-none transition-colors  "
            >
              Services <span className="ml-2 ">&#9662;</span>
            </button>
            {isDropdownOpen && (
              <ul className="absolute mt-2  w-full bg-white border rounded shadow-lg text-center ">
                <li className="border-2 border-gray-100 p-3">
                  <Link
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    to="/"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li className="border-2 border-gray-100 p-3">
                  <Link
                    className="block px-4 py-2 text-black  hover:bg-gray-200"
                    to="/"
                  >
                    Branding
                  </Link>
                </li>
                <li className="border-2 border-gray-100 p-3">
                  <Link
                    className="block px-4 py-2 text-black  hover:bg-gray-200"
                    to="/"
                  >
                    Creative Services
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li
            className={`py-2 border-2 border-gray-100 p-3 hover:bg-blue-900 hover:text-white ${
              isDropdownOpen ? "hidden" : "block"
            }`}
          >
            <Link
              className="text-decoration-none transition-colors "
              to="/"
              onClick={toggleSidebar}
              exact
            >
              Process
            </Link>
          </li>
          <li
            className={`py-2 border-2 border-gray-100 p-3 hover:bg-blue-900 hover:text-white ${
              isDropdownOpen ? "hidden" : "block"
            }`}
          >
            <Link
              className="text-decoration-none transition-colors "
              to="/"
              onClick={toggleSidebar}
              exact
            >
              FAQ
            </Link>
          </li>
          <li
            className={`py-2 border-2 border-gray-100 p-3 hover:bg-blue-900 hover:text-white ${
              isDropdownOpen ? "hidden" : "block"
            }`}
          >
            <Link
              className="text-decoration-none transition-colors   "
              to="/"
              onClick={toggleSidebar}
              exact
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
