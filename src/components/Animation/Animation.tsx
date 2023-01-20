 import React from 'react'
 import './animation.css'
import Bubble from '../Bubble/Bubble'
import {FaFacebook,FaTiktok,FaInstagram}from 'react-icons/fa'
import {BsWhatsapp}from 'react-icons/bs'
 const A2 = () => {
   return (
    <div className=''>
      <div className='flex w-full h-screen justify-center items-center body overflow-hidden'>
          <h1>
              <span className='text-pinky'>N</span>
              <span>o </span>
              <span className='text-pinky'>T</span>
              <span>o</span>
              <br />
              <span className='text-pinky'>S</span>
              <span>o</span>
              <span>c</span>
              <span>i</span>
              <span>a</span>
              <span>l</span>
              <br/>
              <span className='text-pinky'>M</span>
              <span>e</span>
              <span>d</span>
              <span>i</span>
              <span>a</span>
          </h1>
      </div>
      <Bubble top="top-0" left="left-0" title={<FaFacebook size={50} color='blue'/>}/>
      <Bubble top="bottom-0" left="left-0" title={<BsWhatsapp size={50} color='green'/>}/>
      <Bubble top="top-0" left="right-0" title={<FaTiktok size={50} color ='black'/> }/>
      <Bubble top="bottom-0" left="right-0" title={<FaInstagram size={50} color='orange'/>}/>
    </div>
   )
 }
 
 export default A2