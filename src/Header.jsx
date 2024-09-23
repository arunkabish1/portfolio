import React, { useState } from "react";
import Logo from "./assets/logo.png";

export const openGmail = () => {
  const email = "arunkabish@gmail.com";
  const gmailComposeURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}`;
  window.open(gmailComposeURL, "_blank");
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      style={{ position: "fixed", width: "100%" }}
      className="header-container"
    >
      <nav className="items-center flex justify-between py-3 lg:justify-between">
        <img src={Logo} alt="Logo" className="h-10" />

        {/* Mobile Menu Button */}
        <div className="items-center lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div
  className={`  lg:bg-transparent  grid grid-rows-4 lg:flex lg:flex-row items-center justify-center ${
    menuOpen ? "flex" : "hidden"
  } lg:flex`}
>
          <button
            className=" lg:ml-4 lg:hover:text-blue-600 lg:rounded-2xl lg:p-1 lg:font-bold"
            id=""
            href="#home"
          >
            Home
          </button>
          <a
            className="ml-4 hover:text-blue-600 rounded-2xl p-1 font-bold"
            href="#projects"
            id=""
          >
            Projects
          </a>
          <a
            className="ml-4 hover:text-blue-600 rounded-2xl p-1 font-bold"
            href="#about"
          >
            About
          </a>
          <button
            className="ml-4 hover:text-blue-600 rounded-2xl p-1 font-bold"
            id=""
            onClick={openGmail}
          >
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
