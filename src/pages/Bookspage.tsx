import Navbar from '../components/Navbar/Navbar'
import Bookswip from '../components/Swipper/Bookswip/Bookswip'
import { useAtom,useAtomValue } from 'jotai'
import { searchAtom,allBooks} from '../store'
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react'

const Bookspage = () => {
  const [search,setSearch]=useAtom(searchAtom)
  setSearch('react')  
  const books=useAtomValue(allBooks).docs
  
  // useEffect(() => {
  //   fetch("http://openlibrary.org/search.json?q=react")
  //   .then(res=>console.log(res.json()))
  //   .catch(err=>console.log(err));
  // },[])
  
  
  
  return (
    <div className=' bg-[#B6B5C6] min-h-screen flex flex-col gap-12'>
        <Navbar/>
        <div className=''>
          <Bookswip/>
        </div>
        {
          books.map((book: {book:string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined })=>(
            <h1>{book.title}</h1>
          ))
        }
    </div>
  )
}

export default Bookspage