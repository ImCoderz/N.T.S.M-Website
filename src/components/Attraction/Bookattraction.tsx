import React from 'react'
import books from '../../assets/books.jpg'
const Bookattraction = () => {
  return (
    <div className='relative flex flex-col justify-center items-center min-h-[80vh] books'>
        <h1 className='absolute top-0 left-10 text-2xl text-rosy font-extrabold'>Be Intellectuel</h1>
        <img src={books} alt="" className='absolute border-spacing-20  border-8 border-purple w-[400px] h-[400px] rounded-full' />
        <div className='absolute bottom-10 left-10 border-spacing-20  border-8 border-purple w-[200px] h-[200px] rounded-full'>
            
        </div>
        <div className='absolute top-6 right-52 border-spacing-20  border-8 border-purple w-[100px] h-[100px] rounded-full'>
            
        </div>
        <h1 className='absolute right-10 bottom-10 text-2xl text-pinky font-extrabold'>Read As Many As You Can</h1>
    </div>
  )
}

export default Bookattraction