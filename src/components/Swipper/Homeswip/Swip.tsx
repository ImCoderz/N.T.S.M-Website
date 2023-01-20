import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from './Slide';
import { Autoplay,Navigation,Pagination,Scrollbar,A11y } from 'swiper';


const Swip = () => {
  return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            speed={900}
            autoplay={{
                delay:3000,
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><Slide color='bg-rosy'/></SwiperSlide>
            <SwiperSlide><Slide color='bg-pinky'/></SwiperSlide>
            <SwiperSlide><Slide color='bg-orangy'/></SwiperSlide>
            <SwiperSlide><Slide color='bg-greeny'/></SwiperSlide>
        </Swiper>
    );
}

export default Swip