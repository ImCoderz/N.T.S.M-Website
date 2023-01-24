import React, { useState } from 'react'
import { ButtonA, LoginButton, LogoutButton } from '../commun/button'
import { Humburger } from '../commun/humburger'
import { Logo } from '../commun/logo'
import './navbar.css'
import langs from '../../init'
import { useAuth0 } from "@auth0/auth0-react";
import Profile from '../Profile/Profile'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const {isLoading,user} =useAuth0()
  return (
    <div className=''>
      <nav className='px-20 hidden md:flex justify-between items-center overflow-x-hidden'>
            <Logo/>
            <ul className='flex justify-between items-center gap-10 p-3 py-6'>
                <li className='text-[15px] text-purple font-semibold hover:text-pinky cursor-pointer'><a href='/'>Home</a></li>
                <li className='text-[15px] font-semibold text-purple hover:text-pinky cursor-pointer'><a href='/books'>Read</a></li>
                <li className='text-[15px] font-semibold text-purple hover:text-pinky cursor-pointer'><a href='/sport'>Train</a></li>
                <li className='text-[15px] font-semibold text-purple hover:text-pinky cursor-pointer'><a>Contact Us</a></li>
            </ul>
            {(!isLoading && !user)&&(
              <LoginButton/>
              )
            }
             {(!isLoading && user)&&(
              <Profile/>
              )
            }
      </nav>
      <nav className='md:hidden flex justify-between px-10 overflow-x-hidden'> 
          <Logo/>
            <ul className={`flex bg-slate-600 top-0 h-screen inset-x-0 transition-all fixed  z-50 duration-500 flex-col  justify-center items-start ${menu?'translate-x-[0px]':'translate-x-[100%] '}`}>
                <li className='text-[25px] text-purple font-semibold hover:bg-pinky cursor-pointer py-10 w-full pl-10'><a href='/'>Home</a></li>
                <li className='text-[25px] font-semibold text-purple hover:bg-pinky cursor-pointer py-10 w-full pl-10'><a>About</a></li>
                <li className='text-[25px] font-semibold text-purple hover:bg-pinky cursor-pointer py-10 w-full pl-10'><a href='/books'>Read</a></li>
                <li className='text-[25px] font-semibold text-purple hover:bg-pinky cursor-pointer py-10 w-full pl-10'><a>Contact Us</a></li>
                {(!isLoading && !user)&&(
                  <LoginButton/>
                  )
                }
                {(!isLoading && user)&&(
                  <LogoutButton/>
                  )
                }
            </ul>
          <Humburger setMenu={setMenu} menu={menu}/>
      </nav>
    </div>
  )
}

export default Navbar