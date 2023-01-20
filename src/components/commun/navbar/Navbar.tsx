import React from 'react'
import './navbar.css'
import {Logo } from '../logo'
export const NavBar = () => {
  return (
    <nav className='hidden md:flex justify-between items-center'>
        <Logo/>
        {/* <ul className='flex justify-between items-center gap-10 p-3'>
            <li className='text-[15px] text-purple font-semibold hover:text-pinky cursor-pointer'><a href='/'>Home</a></li>
            <li className='text-[15px] font-semibold text-purple hover:text-pinky cursor-pointer'><a>About</a></li>
            <li className='text-[15px] font-semibold text-purple hover:text-pinky cursor-pointer'><a href='/books'>Read</a></li>
            <li className='text-[15px] font-semibold text-purple hover:text-pinky cursor-pointer'><a>Contact Us</a></li>
        </ul> */}
        <div className='flex justify-between items-center gap-5'>
            {/* <button className='text-sm font-bold text-greeny'>Sign In</button> */}
            <button className='text-sm font-bold text-bgcolor bg-redy p-2 rounded-2xl hover:bg-opacity-[0.5] px-6 '>Sign In</button>
        </div>
    </nav>
  )
}
