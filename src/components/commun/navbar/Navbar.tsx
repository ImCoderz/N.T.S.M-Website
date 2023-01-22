import React from 'react'
import './navbar.css'
import {ButtonA} from '../button'
import {Logo } from '../logo'
import {Menu } from '../menu'
import langs from '../../../init/index';
import {Humburger} from '../humburger'
export const NavBar = () => {
  return (
    <nav className=' z-50  max-h-[100px] '>
      <div className='flex top-0 hover:bg-blac  inset-x-0 fixed justify-between items-center max-w-[2500px] py-8 px-20'>
      <Logo/>
      <Menu/>
      <ButtonA props={langs.ang.identity.button.title}/>
      {/* <Humburger/> */}
      </div>
    </nav>
  )
}
