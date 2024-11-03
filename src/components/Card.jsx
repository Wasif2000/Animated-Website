import React from 'react'
import aa from '../images/image1.jpg'
import { VscArrowCircleUp } from "react-icons/vsc";

const Card = () => {
  return (
    <>
    <div className='flex'>
         <div className='w-[50%] px-[70px] py-10'>
             <h1 className='text-[35px] capitalize font-bold'>Our approach:</h1>
             <button className='flex gap-2 mt-3 ml-1 border border-black px-4 py-2 rounded-[15px] hover:bg-black hover:text-white'>Read More  <div className=' text-[25px]'><VscArrowCircleUp /></div></button>
         </div>
         <div className='w-[50%] '>
            <img src={aa} alt="" className='p-8 '/>
         </div>
    </div>
    </>
  )
}

export default Card;