'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SwitchMode from './SwitchMode';
import Language from './Language';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="flex items-center mt-4 mr-4 ml-4 justify-between">
      <Image
        src="/logo.svg"
        alt="Matheus Logo"
        width={49}
        height={49}
        priority
      />
      <div className="relative lg:hidden">
      <svg
  width="25"
  height="24"
  viewBox="0 0 25 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  onClick={toggleMenu}
  className="transition-transform transform-gpu group hover:scale-105 hover:text-secondary"

>
  <path
    className="cursor-pointer"
    d="M4.5 6H20.5M4.5 10H20.5M4.5 14H20.5M4.5 18H20.5"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

        {menuOpen && (
          <div className="bg-primary  rounded-l-2xl fixed inset-y-0 right-0 w-64 transform transition-transform ease-in-out duration-300">
            <div className="p-4">
              <a
                href="#"
                className=" flex justify-end py-4"
                onClick={toggleMenu}
              >
               <svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="  transition-transform transform-gpu hover:rotate-45  hover:text-secondary"
>
  <path
    d="M1 13L13 1M1 1L13 13"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

              </a>
              <div className="">
                <a href="#" className="relative group mb-4 text-base ">
                  Sobre mim <br />
                  <span className="absolute bottom--1  left-0 w-0 bg-secondary group-hover:w-full h-1 transition-all duration-300 origin-left rounded"></span>
                </a>
                <a href="#" className="relative group mb-4 text-base  ">
                  Label 2 <br />
                  <span className="absolute bottom--1 left-0 w-0 bg-secondary group-hover:w-full h-1 transition-all duration-300 origin-left rounded"></span>
                </a>
                <a href="#" className="relative group mb-4 text-base">
                  Label 5 <br />
                  <span className="absolute bottom--1 left-0 w-0 bg-secondary group-hover:w-full h-1 transition-all duration-300 origin-left rounded"></span>
                </a>
                <a href="#" className="relative group  mb-4  text-base">
                  Label 4 <br />
                  <span className="absolute bottom--1 left-0 w-0 bg-secondary group-hover:w-full h-1 transition-all duration-300 origin-left rounded"></span>
                </a>
              </div>
              <div className="flex justify-center items-center  ">
                <SwitchMode />
                <Language />

               
              </div>
               <button className="mt-10 flex justify-center items-center text-sm font-bold border rounded-md border-secondary px-20 py-1 text-white  hover:bg-secondary hover:text-primary transition duration-300 ease-in-out">
                  Contato
                </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex  ml-60 mr-60  max-lg:hidden">
        <a href="#" className="relative group mr-4 text-base">
          Sobre mim <br />
          <span className="absolute bottom--1 left-0 w-0 bg-secondary group-hover:w-full h-1 transition-all duration-300 origin-left rounded"></span>
        </a>
        <a href="#" className="relative group mr-4 text-base">
          Label 2 <br />
          <span className="absolute bottom--1 left-0 w-0 bg-secondary group-hover:w-full h-1 transition-all duration-300 origin-left rounded"></span>
        </a>
        <a href="#" className="relative group mr-4 text-base">
          Label 5 <br />
          <span className="absolute bottom--1 left-0 w-0 bg-secondary group-hover:w-full h-1 transition-all duration-300 origin-left rounded"></span>
        </a>
        <a href="#" className="relative group mr-4  text-base">
          Label 4 <br />
          <span className="absolute bottom--1 left-0 w-0 bg-secondary group-hover:w-full h-1 transition-all duration-300 origin-left rounded"></span>
        </a>
      </div>
      <div className="flex justify-center items-center  max-lg:hidden">
        <SwitchMode />
        <Language />

        <button className="text-sm font-bold border rounded-md border-secondary px-5 py-1 text-white  hover:bg-secondary hover:text-background transition duration-900 ease-in-out">
          Contato
        </button>
      </div>
    </nav>
  );
};

export default Header;
