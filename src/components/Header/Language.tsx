"use client";
import React, { useState } from "react";

const Language = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("PT");

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleLanguageChange = (language:string) => {
    setSelectedLanguage(language);
    toggleOptions();
  };

  return (
    <div className="relative mr-10 ml-10 justify-center items-center flex text-sm font-bold text-secondary">
      <div className="flex items-center cursor-pointer" onClick={toggleOptions}>
        <h2>{selectedLanguage}</h2>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 transition-transform duration-300 transform"
          style={{
            transform: showOptions ? "rotate(180deg)" : "rotate(0)",
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
            fill="#DDFF21"
          />
        </svg>
      </div>
      {showOptions && (
        <div
          className="absolute top-3 left--2 p-2  justify-center items-center grid"
          style={{ opacity: showOptions ? 1 : 0, transform: showOptions ? "translateY(0)" : "translateY(-10px)", transition: "opacity 0.3s, transform 0.3s" }}
        >
          <button
            className="relative cursor-pointer justify-center items-center text-white"
            onClick={() => handleLanguageChange("PT")}
          >
            PT
          </button>
          <button
            className="relative cursor-pointer justify-center items-center text-white"
            onClick={() => handleLanguageChange("EN")}
          >
            EN
          </button>
        </div>
      )}
    </div>
  );
};

export default Language;
