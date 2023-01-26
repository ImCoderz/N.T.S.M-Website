import { Navbar } from '../components/Navbar'
import Bookswip from '../components/Swipper/Bookswip/Bookswip'
import Read from '../components/Book/Read/Read'
import Search from '../components/Book/Search/Search'
const Bookspage = () => {

  return (
    <div className=' bg-[#B6B5C6] min-h-screen flex flex-col'>
        <Navbar/>
        <div className=''>
          <Bookswip/>
        </div>
      <div>
        <div>
        <Search/>
        <Read/>
        </div>
      </div>

    </div>
  )
}

export default Bookspage