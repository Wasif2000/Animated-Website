import React from 'react';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import bb from '../images/images.jpg'

function Front() {
  return (
    <div>
      <ul className='text-[5rem] tracking-tighter leading-[70px] capitalize font-semibold px-12 pt-24'>
        <li>We create</li>
        <li>
          <div className='w-[5rem] h-[3.5rem] inline-block '><img className='rounded-md' src={bb}/></div>
          eye-opening
        </li>
        <li>presentations</li>
      </ul>
      <div className='w-full border-t-[1px] border-zinc-400 mt-32'>
        <div>
          <ul className='flex justify-between mt-3 px-12'>
            <li>For public and private companies</li>
            <li>
            From the first pitch to IPO</li>
            <li className='flex gap-3'><button className='border border-zinc-900 px-1 rounded-xl hover:bg-black hover:text-white hover:font-medium duration-300'>start the project </button><div className='mt-1'><BsArrowUpRightCircleFill /></div> </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Front;
