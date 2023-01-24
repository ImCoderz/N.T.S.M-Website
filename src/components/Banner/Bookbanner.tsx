import React from 'react'
import Bookanimation from '../Animation/Bookanimation'

const Banner = () => {
  return (
    <div className='bg-textcolor w-full h-[70vh] p-20 flex justify-between '>
        <div>
            <h3 className=' font-bold text-[40px] text-bgcolor '>
                There Is No Friend <br /> As Loyal As A Book
            </h3>
            <p className='text-lg text-rosy font-bold px-6 mt-4 '>
                if you wanna scrool <br /> you better do it on a book pages
            </p>
            <button className='ml-6 mt-4 text-sm font-bold bg-yellow-400 rounded-2xl px-6 py-3 hover:opacity-[0.7]'>
                Read A Book
            </button>
        </div>
        <div className='md:flex hidden'>
            <Bookanimation/>
        </div>
    </div>
  )
}

export default Banner