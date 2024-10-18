import React from 'react';

function Navbar() {
  return (
    <div className='flex justify-between items-center px-12 py-4'>
      {/* Left side: Ochi */}
      <div>
        <h1 className='text-xl font-bold'>Oc<span className='font-bold text-[1.5rem]'>hi</span></h1>
      </div>

      {/* Center: Array of links */}
      <div className='flex space-x-6'>
        {["services", "about us", "our work", "insights"].map((item, index) => (
          <div
            key={index}
            className='cursor-pointer hover:underline hover:translate-y-1 transition-transform duration-300'
          >
            {item}
          </div>
        ))}
      </div>

      {/* Right side: Contact Us */}
      <div>
        <h1 className='text-lg cursor-pointer hover:underline hover:translate-y-1 transition-transform duration-300'>
          Contact Us
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
