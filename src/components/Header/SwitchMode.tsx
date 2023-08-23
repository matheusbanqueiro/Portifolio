"use client";

import React, { useState } from "react";

const SwitchMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative mr-10 justify-center items-center flex ">
      <button  onClick={toggleDarkMode}>
        {darkMode ? (
          <svg 
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13.1441C17.9248 13.5762 16.7507 13.8139 15.521 13.8139C10.3655 13.8139 6.18607 9.63455 6.18607 4.47901C6.18607 3.24932 6.42384 2.07516 6.85591 1C3.42343 2.37942 1 5.73924 1 9.66508C1 14.8206 5.17939 19 10.3349 19C14.2608 19 17.6206 16.5766 19 13.1441Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1V2M10 18V19M19 10H18M2 10H1M16.364 16.364L15.6569 15.6569M4.34315 4.34315L3.63604 3.63604M16.364 3.63609L15.6569 4.3432M4.3432 15.6569L3.63609 16.364M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SwitchMode;
