import React from 'react'
import{Swiper,SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper"
import { useAtom,useAtomValue } from 'jotai'
import { searchAtom,allBooks, idAtom} from '../../../store'
import Card from '../Card/Card'
import 'swiper/css'
import 'swiper/css/free-mode'
const ReadRight = () => {
    const books=useAtomValue(allBooks).docs

    return (
     <div className='py-4 px-4 justify-center bg-[#e4edef] w-full'>
      <h1 className='text-[30px] text-bold'>Recommended</h1>
      <div className='shadow-sm'>
        <Swiper 
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className='mySwiper'
        slidesPerView={3}
        spaceBetween={30}
        >
          
            {
          books.map((book:typeof books[0])=>(
           <>
              {book.cover_i &&(
                <SwiperSlide>
                <Card title={book?.title} cover={book?.cover_i} author={book?.author_name}/>
                </SwiperSlide>
              )
              }
           </>
          ))
            }
            
        </Swiper>
        </div>
        <h1 className='text-[30px] text-bold'>All Books</h1>
     <div className="grid grid-cols-3 gap-4">
     {
          books.map((book:typeof books[0])=>(
           <>
              {book.cover_i &&(
                <Card title={book?.title} cover={book?.cover_i} author={book?.author_name}/> 
              )
              }
           </>
          ))
            }
     </div>
      </div>
    )
}

export default ReadRight