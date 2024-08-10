import React from "react";
// import logo from "../assets/kevinRushLogo.png";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between  py-6">
      <div className="flex flex-shrink-0  items-center ">
        <h1 className=" mx-2  font-bold text-4xl text-white">Sp</h1>
        {/* <img className=" mx-2 w-10" src={logo} alt="logo img" /> */}
      </div>

      <div className=" m-8 flex items-center justify-center gap-4  text-2xl text-white">
        {/* <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram /> */}

        <a
          href="https://www.linkedin.com/in/saurabh-prajapati-0a8987271/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/SaurabhPrajapati21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/SPrajapati21775"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.instagram.com/saurabh_daksh738/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
