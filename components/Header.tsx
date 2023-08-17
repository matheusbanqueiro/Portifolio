import React from "react";
import Image from "next/image";
import SwitchMode from "./SwitchMode";
import Language from "./Language";

const Header = () => {
  return (
    <nav className="flex justify-between p-4 bg-background text-white">
      <Image
        src="/logo.svg"
        alt="Matheus Logo"
        width={49}
        height={49}
        priority
      />
      <div className="flex items-center space-x-4">
        <a href="#" className="relative group">
          Sobre mim
          <span className="absolute bottom-0 left-0 w-0 h-0 bg-secondary group-hover:w-full h-1 transition-all duration-00 origin-left rounded"></span>
        </a>
        <a href="#" className="relative group">
          Label 2
          <span className="absolute bottom-0 left-0 w-0 h-0 bg-secondary group-hover:w-full h-1 transition-all duration-00 origin-left rounded"></span>
        </a>
        <a href="#" className="relative group">
          Label 5
          <span className="absolute bottom-0 left-0 w-0 h-0 bg-secondary group-hover:w-full h-1 transition-all duration-00 origin-left rounded"></span>
        </a>
        <a href="#" className="relative group">
          Label 4
          <span className="absolute bottom-0 left-0 w-0 h-0 bg-secondary group-hover:w-full h-1 transition-all duration-00 origin-left rounded"></span>
        </a>
      </div>

      <SwitchMode />
      <Language />
      <button className="">Contato</button>
    </nav>
  );
};

export default Header;
