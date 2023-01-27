import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './swip.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay,Navigation,Pagination,Scrollbar,A11y } from 'swiper';
import Sportslide from './Sportslide';


const Swip = () => {
  return (
        <Swiper
            modules={[Navigation, Pagination, A11y,Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            centeredSlides={true}
            speed={900}
            autoplay={{
                delay:3000,
            }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <div className=' transition-all duration-500'>
                <SwiperSlide>
                    {({ isActive,isNext,isPrev }) => (
                        <Sportslide isActive={isActive} isNext={isNext} isPrev={isPrev}/>
                    )}  
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive,isNext,isPrev }) => (
                        <Sportslide isActive={isActive} isNext={isNext} isPrev={isPrev}/>
                    )}  
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive,isNext,isPrev }) => (
                        <Sportslide isActive={isActive} isNext={isNext} isPrev={isPrev}/>
                    )}  
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive,isNext,isPrev }) => (
                        <Sportslide isActive={isActive} isNext={isNext} isPrev={isPrev}/>
                    )}  
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive,isNext,isPrev }) => (
                        <Sportslide isActive={isActive} isNext={isNext} isPrev={isPrev}/>
                    )}  
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive,isNext,isPrev }) => (
                        <Sportslide isActive={isActive} isNext={isNext} isPrev={isPrev}/>
                    )}  
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive,isNext,isPrev }) => (
                        <Sportslide isActive={isActive} isNext={isNext} isPrev={isPrev}/>
                    )}  
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive,isNext,isPrev }) => (
                        <Sportslide isActive={isActive} isNext={isNext} isPrev={isPrev}/>
                    )}  
                </SwiperSlide>
            </div>
            
        </Swiper>
    );
}

export default Swip