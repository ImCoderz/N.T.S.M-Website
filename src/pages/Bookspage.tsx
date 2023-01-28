import { Navbar } from '../components/Navbar'
import Bookswip from '../components/Swipper/Bookswip/Bookswip'
import ReadRight from '../components/Book/Read/ReadRight'
import ReadLeft from '../components/Book/Read/ReadLeft'
import Search from '../components/Book/Search/Search'
const Bookspage = () => {

  return (
    <div className=' bg-[#B6B5C6] h-[100vh] w-screen flex flex-col'>
        <Navbar/>
        <div className=''>
          <Bookswip/>
        </div>
        <Search/>
      <div className='flex h-30'>
        <div className='w-[70%]'>
        
        <ReadRight/>
        </div>
        <ReadLeft/>
      </div>

    </div>
  )
}

export default Bookspage