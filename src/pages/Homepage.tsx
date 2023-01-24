import { useEffect, useState } from 'react'
import A2 from '../components/Animation/Animation'
import Bookattraction from '../components/Attraction/Bookattraction'
import Banner from '../components/Banner/Bookbanner'
import Main from '../components/Main/Main'
import { Navbar } from '../components/Navbar'
import Sportbanner from '../components/Banner/Sportbanner'

const Homepage = () => {
  useEffect(()=>{
    setTimeout(()=>{
      setAnimate(false)
    },3000)
  },[])
  const [animate,setAnimate]=useState(true)
  return (
    <div>
        <header className='bg-bgcolor min-h-screen flex flex-col gap-10'>
            {
            animate
            ?(
              <div className='flex justify-center  items-center w-full min-h-screen '>
                <A2/>
              </div>
            )
            :(
              <>
                <Navbar/>
                <Main/>
                <Banner/>
                <Bookattraction/>
                <Sportbanner/>
              </>
            )
          }
        </header>
    </div>
  )
}

export default Homepage