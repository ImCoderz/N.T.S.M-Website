import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from '../Homeswip/Slide';
import { Autoplay,Navigation,Pagination,Scrollbar,A11y } from 'swiper';
import Bookslide from './Bookslide';


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
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><Bookslide /></SwiperSlide>
            <SwiperSlide><Bookslide /></SwiperSlide>
            <SwiperSlide><Bookslide /></SwiperSlide>
            <SwiperSlide><Bookslide /></SwiperSlide>
        </Swiper>
    );
}

export default Swip