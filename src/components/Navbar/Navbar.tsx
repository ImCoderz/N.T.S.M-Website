import React,{useState,useEffect} from 'react'
import './navbar.css'
import {ButtonA} from '../commun/button'
import {Logo } from '../commun/logo'
import {Menu } from '../commun/menu'
import langs from '../../init/index';
import {Humburger} from '../commun/humburger'
export const NavBar = () => {
  const [show,handleShow]=useState(false)
  const [lt,setlt]=useState(0)
  const transitionNavbar=()=>{
    let scrollTop=window.pageYOffset
    if(scrollTop>lt){
        handleShow(true)
    }else{
        handleShow(false)
    }
    setlt(scrollTop)
  }
  
  useEffect(()=>{
      window.addEventListener("scroll",transitionNavbar);
      return ()=>window.removeEventListener("scroll",transitionNavbar)
  },[show])

  return (
    <nav className='z-50  max-h-[100px] mt-10 '>
      <div className={`flex top-0 ${show &&('top-[-80px]')}  inset-x-0 fixed justify-between items-center max-w-[2500px] py-6 px-20`}>
      <Logo/>
      <Menu/>
      <ButtonA props={langs.ang.identity.button.title}/>
      <Humburger/>
      
      </div>
    </nav>
  )
}
