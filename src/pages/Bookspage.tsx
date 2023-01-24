import { Navbar } from '../components/Navbar'
import Bookswip from '../components/Swipper/Bookswip/Bookswip'
import { useAtom,useAtomValue } from 'jotai'
import { searchAtom,allBooks, idAtom} from '../store'
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react'
import React,{useState} from 'react'
const Bookspage = () => {
  const [search,setSearch]=useAtom(searchAtom)
  setSearch('react')
  const [id,setId]=useAtom(idAtom)
  const books=useAtomValue(allBooks).docs
  console.log(books[3].isbn[0]);
  console.log(books);
  
  // useEffect(() => {
  //   fetch("http://openlibrary.org/search.json?q=react")
  //   .then(res=>console.log(res.json()))
  //   .catch(err=>console.log(err));
  // },[])
  
  
  const [cover, setcover] = useState()

  return (
    <div className='px-20 bg-[#B6B5C6] min-h-screen flex flex-col gap-12'>
        <Navbar/>
        <div className=''>
          <Bookswip/>
        </div>
        {
          books.map((book)=>(
           <div>
              {book.cover_i &&(
                <>
                <h1>{book.title}</h1>
                <img className='w-[300px] h-[300px]' src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt='geeek'/>  
                </>
              )
              }
              {/* <img src={`https://covers.openlibrary.org/b/isbn/${books[3].isbn[0]}-S.jpg`} alt='geeek'/>   */}
           </div>
          ))
        }
    </div>
  )
}

export default Bookspage