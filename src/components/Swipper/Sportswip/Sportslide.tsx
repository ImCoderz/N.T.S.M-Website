import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import './swip.css'

const width:string='w-[300px] h-[320px]'

const test='${isActive?(active):((isNext||isPrev)?adj:other)}'

const Sportslide = ({isActive,isNext,isPrev}:{isActive:boolean,isNext:boolean,isPrev:boolean}) => {
    
  return (
        <div className={`transition-all duration-500 ${isActive?'bg-blue-600':'bg-bgcolor'} ${width} ${(isNext||isPrev)?('adj bg-red-400'):(!isActive&&('other'))} `}>

        </div>
  )
}

export default Sportslide