import React from 'react';
import { LiaBullseyeSolid } from "react-icons/lia";
import aa from '../images/board1.png'
import bb from '../images/board2.png'


export const Box1 = () => {
  return (
    <section className="pt-7">
     
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 pl-[70px]">Featured Projects</h1>

      <div className="border-t-[1px] border-zinc-700">
      <div className='flex gap-8 pl-[50px]'>
        <div className='w-[45%]'>
      <h3 className='flex gap-2 pt-5 pb-[2px]'> <span className='pt-1'><LiaBullseyeSolid /></span> Cardboard Spaceship</h3>
     
      <img src={aa} className="rounded-lg"/>
      </div>
      <div className='w-[45%]'>
      <h3 className='flex gap-2 pt-5 pb-[2px]'> <span className='pt-1'><LiaBullseyeSolid /></span> 
      AH2 & Matt Horn</h3>
      <img src={bb} className="rounded-lg transform transition ease-in duration-300 hover:scale-110" 
      
      />
      </div>
      </div>
      </div>
    </section>
  );
};
