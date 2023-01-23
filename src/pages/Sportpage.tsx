import React from 'react'
import { Parallax } from 'react-parallax'
import gym1 from '../assets/tr.jpg'
import tr2 from '../assets/tr2.jpg'
import tr3 from '../assets/tr3.jpeg'
import tr4 from '../assets/tr4.jpg'
import tr5 from '../assets/tr5.jpg'
import { Navbar } from '../components/Navbar'
const Sportpage = () => {
  return (
    <div className='bg-black overflow-hidden min-h-screen'>
        <Parallax bgImage={tr2} className=' object-cover w-screen  h-screen overflow-hidden' strength={600}>
            <header className='w-[100%] h-screen absolute'>
                <Navbar/>
                {/* <div className='absolute right-4 w-[50%] top-[40vh]'>
                    <h1 className='text-5xl mb-4 font-bold text-bgcolor '>First Parallax</h1>
                    <p className='text-textcolor font-semibold '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem quam vitae sed perferendis laboriosam facere consequatur praesentium ad alias ex eius quia quaerat soluta mollitia qui, dolore beatae assumenda quisquam!</p>
                </div> */}
            </header>
        </Parallax>
        <div className='bg-bgcolor px-20 h-[30vh]'>
            <h1>Test</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, veniam! Voluptatum, quo? Sed dicta pariatur minus veniam ipsam culpa sunt et numquam eligendi, a officiis quia! Excepturi suscipit soluta ut.</p>
        </div>
        <Parallax bgImage={tr4} className='w-screen h-screen' strength={800}>
            <header className='w-screen h-screen absolute flex justify-center items-center'>
                <h1 className='text-2xl font-bold text-bgcolor '>First Parallax</h1>
            </header>
        </Parallax>
        <Parallax bgImage={gym1} className='w-screen h-screen' strength={600} >
            <header className='w-screen h-screen absolute flex justify-center items-center'>
                <h1 className='text-2xl font-bold text-bgcolor '>First Parallax</h1>
            </header>
        </Parallax>
    </div>
  )
}

export default Sportpage