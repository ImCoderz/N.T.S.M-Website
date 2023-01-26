import React from 'react'
import { FreeMode } from "swiper"
import CardAuthor from '../Card/CardAutthor'
import{Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { useAtom,useAtomValue } from 'jotai'
import { searchAtom,allBooks, idAtom} from '../../../store'
const ReadLeft = () => {
    const books=useAtomValue(allBooks).docs
    console.log(books)
  return (
    <div className='bg-white w-screen'>
        <h1>Authors</h1>
        <Swiper 
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className='mySwiper'
        slidesPerView={1}
        spaceBetween={30}
        >
          
            {
          books.map((book:typeof books[0])=>(
           <>
              {book.author_key &&(
                <SwiperSlide>
                <CardAuthor cover={book?.author_key} author={book?.author_name}/>
                </SwiperSlide>
              )
              }
           </>
          ))
            }
            
        </Swiper>    </div>
  )
}

export default ReadLeft