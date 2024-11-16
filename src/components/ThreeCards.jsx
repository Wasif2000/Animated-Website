import React from 'react'
import qq from '../images/logo003.png'

const ThreeCards = () => {
  return (
    <div>
        <div className='flex gap-6 px-12 py-8'>
            <div className='w-[45%] bg-[#004d43] h-[350px] rounded-2xl '><h1 className='text-[#cdea68] pt-[135px] pl-[170px] text-[5rem] leading-tight capitalize'>ochi</h1><div className='my-[60px] mx-[20px]'> <span className='border border-[#cdea68] rounded-2xl text-[#cdea68] px-2 '>2019-2020</span></div></div>
            <div className='w-[25%] bg-[#212121] h-[350] rounded-xl'><h1 className='capitalize text-[4rem] pl-[60px] text-white pt-[135px]'>clutch</h1> <button className='text-white border border-white rounded-2xl px-2 mt-[60px] ml-[15px] uppercase'>rating5.0 on clutch</button></div>
            <div className='w-[25%] bg-[#212121] h-[350] rounded-xl'><img src={qq} className='w-[100px] ml-[95px] mt-[120px]'/><button className='border border-white text-white mt-16 leading-tight ml-10 px-7 rounded-2xl tracking-tight uppercase'>busines bootcamp <br />alumni</button></div>
        </div>
    </div>
  )
}

export default ThreeCards