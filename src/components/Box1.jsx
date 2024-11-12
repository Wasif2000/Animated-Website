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
     
      <img src={aa} className="rounded-lg transform transition ease-in duration-200 hover:scale-110 "/>
      </div>
      <div className='w-[45%]'>
      <h3 className='flex gap-2 pt-5 pb-[2px]'> <span className='pt-1'><LiaBullseyeSolid /></span> 
      AH2 & Matt Horn</h3>
      <img src={bb} className="rounded-lg transform transition ease-in duration-200 hover:scale-110" 
      
      />
      </div>
      </div>
      </div>
      <div className='px-[70px] py-[20px]'>
        <div className='flex gap-8'>
          <button className='border border-black rounded-lg text-zinc-950 px-2 hover:bg-black hover:text-white uppercase'>branded template</button>
          <button className='border border-black rounded-lg text-zinc-950 px-2 hover:bg-black hover:text-white uppercase'>sales desk</button>
          <button className='border border-black rounded-lg text-zinc-950 px-2 hover:bg-black hover:text-white uppercase'>social media template</button>
          <button className='border border-black rounded-lg text-zinc-950 px-2 hover:bg-black hover:text-white ml-[58px] uppercase'>pitch desk</button>
        </div>
      </div>
      <div>
        <button></button>
      </div>
    </section>
  );
};
