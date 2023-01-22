import React , { useEffect, useState } from 'react'
import A2 from '../components/Animation/Animation'
import Main from '../components/Main/Main'
import { Navbar } from '../components/commun/navbar'

const Homepage = () => {
  useEffect(()=>{
    setTimeout(()=>{
      setAnimate(false)
    },3000)
  },[])
  const [animate,setAnimate]=useState(true)
  return (
    <div>
        <header className='px-20 bg-bgcolor min-h-screen flex flex-col gap-24'>
        {
        animate
        ?(<div className='flex justify-center  items-center w-full min-h-screen '>
        <A2/>
      </div>)
        :(
          <>
            <Navbar/>
            <Main/>
          </>
        )
      }
           
        </header>
    </div>
  )
}

export default Homepage