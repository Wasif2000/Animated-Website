import React from 'react'
import Card from '../components/Card'


function Approach() {
  return (
    <div className='bg-[#cdea68] w-full rounded-lg'>
       <div className='p-14  pl-20'> <h1 className='text-black text-[2.3rem] font-bold'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'> raise funds, sell prod­ucts, ex­plain com­plex ideas,</span> and <span className='underline'> hire great peo­ple.</span></h1></div>

        <div className='border-t-[1px] border-zinc-800 flex'>
            <div className=' w-[50%] pl-[75px] pt-7 '>
                <p>What you can expect:</p>
            </div>
            <div className=' w-[35%] pl-8 pt-7 pb-20 pr-24 '>
                <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <br />
                < br />
                <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className=' w-[15%] pl-6 pt-[100px] underline  leading-tight'>
                <p>S:</p>
                <br />
              
                <br />
                <p>Instagram <br />
Binance <br />
Facebook <br />
Linkedin</p>
            </div>

        </div>
        <div className='border-t-[1px] border-zinc-800'>
        
         <Card/>      
         
        </div>
      

    </div>
  )
}

export default Approach