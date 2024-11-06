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
      style={{ position: "fixed", width: "100%",scrollBehavior:"smooth", }}
      className="header-container"
    >
      <nav className="items-center flex justify-between py-3 lg:justify-between">
        <img src={Logo} alt="Logo" className="h-10" />

        {/* Mobile Menu Button */}
        <div className="items-center lg:hidden">
          <button data-tooltip-target="tooltip-default"
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
          <button data-tooltip-target="tooltip-default"
            className=" lg:ml-4 lg:hover:text-blue-600 lg:rounded-2xl lg:p-1 lg:font-bold"
            id=""
            href="#home"
          >
            Home
          </button>
          <a data-tooltip-target="tooltip-default"
            className="ml-4 hover:text-blue-600 rounded-2xl p-1 font-bold"
            href="#projects"
            id=""
          >
            Projects
          </a>
          <a data-tooltip-target="tooltip-default"
            className="ml-4 hover:text-blue-600 rounded-2xl p-1 font-bold"
            href="#about"
          >
            About
          </a> 
          <button data-tooltip-target="tooltip-default"
            className="ml-4 hover:text-blue-600 rounded-2xl p-1 font-bold"
            id=""
            onClick={openGmail}
          >
            Contact
          </button>
          <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
