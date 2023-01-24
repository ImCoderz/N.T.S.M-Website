import React, { useEffect, useState } from 'react'
import './main.css'
import Swip from '../Swipper/Homeswip/Swip'
const Main = () => {
    useEffect(()=>{
        setTimeout(()=>{
          setAnimate(false)
        },6000)
      },[])
      const [animate,setAnimate]=useState(true)
  return (
    <div>
        {
            animate
            ?
            (  <div className='flex gap-6 justify-center items-center text-center flex-col min-h-[80vh] bg-slate-500'>
                    <div className=''>
                        <p className='text text-2xl font-bold'>Welcome to N.T.S.M</p>
                    </div>
                    <div className=''>
                        <p className='text text-4xl font-bold transition-all duration-500 '>No To Social Media</p>
                    </div>
                </div>
            )
            :
            (
                <div className='flex justify-between flex-col md:flex-row  gap-6 px-10 md:px-20 mt-14'>
                    <div className="contaiiner md:w-[60%]">
                        <div className='relative'>
                            <h1><span>No To<br/>Social Media</span></h1>
                            <div className="blobs_1"></div>
                            <div className="blobs_2"></div>
                            <div className="blobs_3"></div>
                            <div className="blobs_4"></div>
                            <div className="blobs_5"></div>
                            <div className="blobs_6"></div>
                            <div className="blobs_7"></div>
                        </div>
                        <p className='text-sm text-orangy md:w-[60%] mt-8 text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, vel. Dolore neque praesentium atque dolorem. Quae accusamus quam in id, a dolores odio modi, tenetur minus repudiandae autem fugit expedita.</p>
                        <button className='p-2 text-bgcolor bg-rosy rounded-2xl mt-6 font-bold px-5 hover:bg-opacity-[0.5]'>Join Us</button>
                    </div>
                    <div className='md:w-[40%]'>
                        <Swip/>
                    </div>
                </div>
            )
        }
       
    </div>
  )
}

export default Main