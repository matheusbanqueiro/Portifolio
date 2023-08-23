"use client";

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
        >
          <path className="cursor cursor-pointer"
            d="M4.5 6H20.5M4.5 10H20.5M4.5 14H20.5M4.5 18H20.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {menuOpen && (
          <div className="absolute bg-slate-200 p-4 shadow-md mt-2">
            <a href="#" className="block mb-2">
              Saiba mais
            </a>
            <a href="#" className="block mb-2">
              Selecionar
            </a>
            <a href="#" className="block mb-2">
              Label 5
            </a>
            <a href="#" className="block mb-2">
              Label 4
            </a>
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
      <div className="flex justify-center items-center ">
        <SwitchMode />
        <Language />

        <button className="text-sm font-bold border rounded-md border-secondary px-5 py-1 text-white  hover:bg-secondary hover:text-background transition duration-300 ease-in-out">
          Contato
        </button>
      </div>
    </nav>
  );
};

export default Header;
