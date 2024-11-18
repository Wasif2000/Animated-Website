import React from 'react'

const Footer = () => {
  return (
    <section>
    <div className='flex pt-[50px]'>
        <div className='w-[50%]'>
          <h1 className='hover:underline hover:text-blue-800 uppercase text-[5rem] leading-[5rem] font-bold tracking-tight pl-10'>Eye- <br /> <span className='pl-8'>Opening</span></h1>
          <h1 className='uppercase mt-[400px] text-[50px] pl-10 hover:underline hover:text-blue-800'>ochi</h1>
        </div>
        <div className=''>  
        <h1 className='text-[5rem] uppercase tracking-tighter font-bold hover:underline hover:text-blue-800'>presentations</h1>
        <div className='flex gap-[300px]'> 
          <div className='w-[200px]'>
            <p>S:</p><br />
            <p className='leading-tight hover:underline hover:cursor-pointer'>instagram</p>
            <p className='leading-tight hover:underline hover:cursor-pointer'>Behance</p>
            <p className='leading-tight hover:underline hover:cursor-pointer'>Facebook</p>
            <p className='leading-tight hover:underline hover:cursor-pointer'>Linkedin</p><br /><br />
            <p>L:</p><br />
            <p className='leading-tight hover:underline hover:cursor-pointer'>202-1965 W 4th Ave</p>
            <p className='leading-tight hover:underline hover:cursor-pointer'>Vancouver, Canada</p><br /><br />
            <p className='leading-tight hover:underline hover:cursor-pointer'>30 Chukarina St</p>
            <p className='leading-tight hover:underline hover:cursor-pointer'>Lviv, Ukraine</p><br /><br />
            <p>E:</p>
            <p className='hover:underline hover:cursor-pointer'>hello@ochi.design</p>
          </div>
          <div className='mt-[200px]'>
          <p>M:</p><br />
            <p className='leading-tight hover:underline hover:cursor-pointer'>Home</p>
            <p className='leading-tight hover:underline hover:cursor-pointer'>Services</p>
            <p className='leading-tight hover:underline hover:cursor-pointer'>Our work</p>
            <p className='leading-tight hover:underline hover:cursor-pointer'>About us</p>
            <p className='leading-tight hover:underline hover:cursor-pointer'>Insights</p>
            <p className='leading-tight hover:underline hover:cursor-pointer'>Contact us</p>
          </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Footer