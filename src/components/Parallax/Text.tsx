import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Text = () => {
  return (
    <AnimationOnScroll animateIn='animate-slideup'>
             <div className='p-20 h-[40vh]'>
                <h1 className='text-2xl font-bold text-black'>Test</h1>
                <p className='text-sm font-semibold text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, veniam! Voluptatum, quo? Sed dicta pariatur minus veniam ipsam culpa sunt et numquam eligendi, a officiis quia! Excepturi suscipit soluta ut.</p>
            </div>`
    </AnimationOnScroll>
  )
}

export default Text