import React from 'react';
import { LiaBullseyeSolid } from "react-icons/lia";
import aa from '../images/board1.png'
import bb from '../images/board2.png'
import cc from '../images/William.png'


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
        <button className='uppercase px-3 py-2 rounded-3xl border border-black mx-[500px] my-[90px] hover:text-white hover:bg-black transition duration-300'>view all case studies</button>
      </div>
      <div >
        <h1 className='text-[3rem] font-bold px-[60px] '>Clients’ reviews</h1>
      </div>
      <div className='border-t-[1px] border-black  flex'>
        <div className='w-[25%] px-6 py-4'><p className=''> Karman Ventures</p></div>
        <div className='w-[25%]'>
          <p className='pt-4 '>Services</p>
          <div className='mt-[70px]'>
          <button className='border border-black rounded-3xl px-3 hover:bg-black hover:text-white '>investor deck</button> <br /><br />
          <button className='border border-black rounded-3xl px-3 hover:bg-black hover:text-white '>sales deck</button>
          </div>
          </div>
          <div className='w-[50%]'>
            <p className='pt-4'>William Barnes</p>
            <img src={cc} alt="" width={100} className='rounded-xl mt-[60px]'   />
            <div className='w-[350px] pt-7 tracking-normal'>
            <p>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
            </div>
          </div>
      </div>
      <div className='border-t-[1px] border-b-[1px] border-black'>
       <div className='flex justify-between px-7 py-2' >
        <h2 className='cursor-pointer hover:underline capitalize'> planetly</h2>
        <h2 className='cursor-pointer hover:underline capitalize'>nina walloch</h2>
        <h2 className='cursor-pointer hover:underline uppercase'>read</h2>
        </div>
      </div>
      <div className='border-b-[1px] border-black'>
       <div className='flex justify-between px-7 py-2' >
        <h2 className='cursor-pointer hover:underline capitalize'> planetly</h2>
        <h2 className='cursor-pointer hover:underline capitalize'>nina walloch</h2>
        <h2 className='cursor-pointer hover:underline uppercase'>read</h2>
        </div>
      </div>
      <div className='border-b-[1px] border-black'>
       <div className='flex justify-between px-7 py-2' >
        <h2 className='cursor-pointer hover:underline capitalize'> planetly</h2>
        <h2 className='cursor-pointer hover:underline capitalize'>nina walloch</h2>
        <h2 className='cursor-pointer hover:underline uppercase'>read</h2>
        </div>
      </div>
      <div className='border-b-[1px] border-black'>
       <div className='flex justify-between px-7 py-2' >
        <h2 className='cursor-pointer hover:underline capitalize'> planetly</h2>
        <h2 className='cursor-pointer hover:underline capitalize'>nina walloch</h2>
        <h2 className='cursor-pointer hover:underline uppercase'>read</h2>
        </div>
      </div>
      <div className='border-b-[1px] border-black'>
       <div className='flex justify-between px-7 py-2' >
        <h2 className='cursor-pointer hover:underline capitalize'> planetly</h2>
        <h2 className='cursor-pointer hover:underline capitalize'>nina walloch</h2>
        <h2 className='cursor-pointer hover:underline uppercase'>read</h2>
        </div>
      </div>
      <div className='border-b-[1px] border-black'>
       <div className='flex justify-between px-7 py-2' >
        <h2 className='cursor-pointer hover:underline capitalize'> planetly</h2>
        <h2 className='cursor-pointer hover:underline capitalize'>nina walloch</h2>
        <h2 className='cursor-pointer hover:underline uppercase'>read</h2>
        </div>
      </div>
      <div className='border-b-[1px] border-black'>
       <div className='flex justify-between px-7 py-2' >
        <h2 className='cursor-pointer hover:underline capitalize'> planetly</h2>
        <h2 className='cursor-pointer hover:underline capitalize'>nina walloch</h2>
        <h2 className='cursor-pointer hover:underline uppercase'>read</h2>
        </div>
      </div>
      <div className='border-b-[1px] border-black'>
       <div className='flex justify-between px-7 py-2' >
        <h2 className='cursor-pointer hover:underline capitalize'> planetly</h2>
        <h2 className='cursor-pointer hover:underline capitalize'>nina walloch</h2>
        <h2 className='cursor-pointer hover:underline uppercase'>read</h2>
        </div>
      </div>
    </section>
  );
};
