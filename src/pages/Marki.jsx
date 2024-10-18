import React from 'react';

function Marki() {
  return (
    <div className='w-full h-auto bg-[#004d43] text-white rounded-lg'>
      <marquee behavior="scroll" direction="left" scrollamount="15"> 
        <h1 className='text-[15rem] font-extrabold w-full text-center inline-block uppercase'>
          we are ochi &nbsp; we are ochi &nbsp; we are ochi
        </h1> 
      </marquee>
    </div>
  );
}

export default Marki;
