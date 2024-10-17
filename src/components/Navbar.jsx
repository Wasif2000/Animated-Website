import React from 'react';

function Navbar() {
  return (
    <div className='flex justify-between items-center px-8 py-4 fixed'>
      {/* Left side: Ochi */}
      <div>
        <h1 className='text-xl font-bold'>Oc<span className='font-bold text-[1.5rem]'>hi</span></h1>
      </div>

      {/* Center: Array of links */}
      <div className='flex space-x-6'>
        {["services", "about us", "our work", "insights"].map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      {/* Right side: Contact Us */}
      <div>
        <h1 className='text-lg'>Contact Us</h1>
      </div>
    </div>
  );
}

export default Navbar;
