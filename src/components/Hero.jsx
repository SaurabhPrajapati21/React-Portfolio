import React from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/projects/frontend.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-4xl font-thin tracking-tight mt-8 lg:mt-16 lg:text-6xl text-center lg:text-left"
            >
              Saurabh Prajapati
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent text-center lg:text-left mb-4"
            >
              Frontend Developer
            </motion.span>

            <motion.a
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              href="/CV SAURABH PRAJAPATI.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download my CV"
            >
              <button className="bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:via-purple-600 hover:to-pink-500 text-white py-1 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 focus:outline-none mt-4 md:py-2 md:px-6">
                Download CV
              </button>
            </motion.a>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl"
              src={profilepic}
              alt="Profile Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
