import { Navbar } from '../components/Navbar'
import Bookswip from '../components/Swipper/Bookswip/Bookswip'
import { useAtom,useAtomValue } from 'jotai'
import { searchAtom,allBooks} from '../store'
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react'
import Read from '../components/Read/Read'
const Bookspage = () => {
  
  
  
  return (
    <div className='px-20 w-[100%] min-h-screen flex absolute  flex-col gap-12'>
        <Navbar/>
        <div className=''>
          <Bookswip/>
        </div>
        <Read/>
    </div>
  )
}

export default Bookspage