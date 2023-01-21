import React from 'react'
import './navbar.css'
import {ButtonA} from '../button'
import {Logo } from '../logo'
import {Menu } from '../menu'
import langs from '../../../init/index';

export const NavBar = () => {
  return (
    <nav className='flex justify-between items-center py-6'>
      <Logo/>
      <Menu/>
      <ButtonA props={langs.ang.identity.button.title}/>
    </nav>
  )
}
