import React from 'react'
import Navbar from '../components/Navbar'
import Front from '../components/Front'
import Marki from './Marki'
import Approach from './Approach'

function LandingPage() {
  return (
    <div className='bg-[#f1f1f1] text-zinc-950 w-full h-screen font-serif'>
       <div className=''> <Navbar/></div>
        <div><Front/></div>
        <div className='pt-[140px]'><Marki/></div>
        <div><Approach/></div>
    </div>
  )
}

export default LandingPage