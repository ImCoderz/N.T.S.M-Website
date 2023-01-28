import React from 'react'
import { Parallax,Background } from 'react-parallax'
import { Navbar } from '../components/Navbar'
import "animate.css/animate.min.css";
import gym1 from '../assets/tr.jpg'
import tr2 from '../assets/tr2.jpg'
import tr3 from '../assets/tr3.jpeg'
import tr4 from '../assets/tr4.jpg'
import tr5 from '../assets/tr5.jpg'
import ne from '../assets/new.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Sportpage = () => {
  return (
    <div className='bg-gray-500 overflow-hidden min-h-screen'>
        <Parallax bgImage={tr2} blur={{ min: -15, max: 15 }} bgImageAlt={'fitWomen'} className=' object-cover w-screen  h-screen overflow-hidden' strength={600}>
            <header className='w-[100%] h-screen absolute'>
                <Navbar/>
                <div className='w-[95%] h-[100vh] animate-slideleft flex-col flex justify-center items-end'>
                        <h1 className='text-textcolor font-bold text-[60px]'>Train Your Body</h1>
                        <p className='text-bgcolor font-semibold text-[20px]'>A Good Mind In a Healthy Body</p>
                </div>
            </header>
        </Parallax>
        <AnimationOnScroll animateIn='animate-slideup'>
             <div className='p-20 h-[40vh]'>
                <h1 className='text-2xl font-bold text-black'>Test</h1>
                <p className='text-sm font-semibold text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, veniam! Voluptatum, quo? Sed dicta pariatur minus veniam ipsam culpa sunt et numquam eligendi, a officiis quia! Excepturi suscipit soluta ut.</p>
            </div>`
        </AnimationOnScroll>
        <Parallax bgImage={tr4}  className='w-screen  h-screen' strength={800}>
            <header className='w-screen h-screen absolute flex justify-center items-center'>
                <div>
                    <AnimationOnScroll animateIn='animate-slowfade' duration={1}>
                        <h1 className='text-[60px] font-bold text-pinky '>Relieve Your Stress</h1>
                        <p className='text-bgcolor font-semibold text-[20px] text-center'>Sport Is Better Than Any Pill <br /> A Free Stress Reliever</p>
                    </AnimationOnScroll>
                </div>
            </header>
        </Parallax>
        <AnimationOnScroll animateIn='animate-slideup'>
             <div className='p-20 h-[40vh]'>
                <h1 className='text-2xl font-bold text-black'>Test</h1>
                <p className='text-sm font-semibold text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, veniam! Voluptatum, quo? Sed dicta pariatur minus veniam ipsam culpa sunt et numquam eligendi, a officiis quia! Excepturi suscipit soluta ut.</p>
            </div>`
        </AnimationOnScroll>
        <Parallax bgImage={gym1} className='w-screen h-screen' strength={600} >
            <header className='w-screen h-screen absolute flex justify-center items-center'>
                <div>
                    <h1 className='text-[60px] font-bold text-greeny '>Be Positive</h1>
                    <p className='text-bgcolor font-semibold text-[20px] text-center'>Life Is Hard <br /> But There Is Some Green In It</p>
                </div>
            </header>
        </Parallax>
        <Parallax strength={300}>
                <div className='h-screen w-screen flex flex-col justify-evenly items-center '>
                    <div className=''>
                        <h1 className='text-4xl font-bold text-textcolor'>Animation</h1>
                    </div>
                    <div className='flex justify-between items-center anima w-screen px-10 '>
                        <AnimationOnScroll animateIn="animate__bounceIn"  duration={5} >
                            <div className='w-[400px] h-[400px] bg-bgcolor'>

                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceIn" delay={1000} duration={5}>
                            <div className='w-[300px] h-[300px] bg-bgcolor'>

                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__bounceIn" delay={2000} duration={5} >
                            <div className='w-[200px] h-[200px] bg-bgcolor'>

                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
        </Parallax>

    </div>
  )
}

export default Sportpage