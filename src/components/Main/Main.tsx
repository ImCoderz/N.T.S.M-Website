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
            (
                <div className='px-20 flex flex-col justify-center items-center min-h-[60vh] bg-slate-500'>
                    <p className='text'>Welcome to N.T.S.M</p>
                    <p className='text'>No To Abusing Social Media</p>
                </div>
            )
            :
            (
                <div className='px-20 flex justify-between  gap-6'>
                    <div className="contaiiner w-[60%]">
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
                        <p className='text-sm text-orangy w-[60%] mt-8 text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, vel. Dolore neque praesentium atque dolorem. Quae accusamus quam in id, a dolores odio modi, tenetur minus repudiandae autem fugit expedita.</p>
                        <button className='p-2 text-bgcolor bg-rosy rounded-2xl mt-6 font-bold px-5 hover:bg-opacity-[0.5]'>Join Us</button>
                    </div>
                    <div className='w-[40%]'>
                        <Swip/>
                    </div>
                </div>
            )
        }
       
    </div>
  )
}

export default Main