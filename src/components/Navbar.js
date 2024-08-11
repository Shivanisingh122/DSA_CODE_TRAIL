import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Status from './Status';

function Navbar({ mode, setmode }) {
  // useState hook to manage the visibility of the 'Hot Tip' section
  const [hidden1, sethidden1] = useState("hidden");

  // Function to toggle the theme between light and dark
  const handleClick = () => {
    mode === "light" ? setmode("dark") : setmode("light");
  };

  return (
    <div>
      {/* Navbar container with a purple background */}
      <div className='flex justify-between bg-purple-500'>
        {/* DSA CodeTrail logo/link */}
        <div className='text-gray-200 font-lg text-left hover:text-gray-200 m-3 h-8'>
          <Link
            className='pl-2'
            to="/"
            style={{ fontSize: '24px' }} // Setting font size for the logo
          >
            DSA CodeTrail
          </Link>
        </div>
        {/* Hot Tip section with an image and text */}
        <div
          className='flex align-bottom text-base pr-3 text-center'
          onClick={() => { 
            console.log(hidden1); // Logging the current state of 'hidden1' to the console
            hidden1 === "hidden" ? sethidden1("visible") : sethidden1("hidden"); // Toggling visibility
          }}
        >
          <img className='mt-1 w-8 h-9' src="bulb.png" alt="Bulb" />
          <div className='text-gray-200 text-right m-2 h-8'>
            Hot Tip
          </div>
        </div>
      </div>
      {/* Status component that shows/hides based on 'hidden1' state */}
      {<Status visi={hidden1} />}
    </div>
  );
}

export default Navbar;
