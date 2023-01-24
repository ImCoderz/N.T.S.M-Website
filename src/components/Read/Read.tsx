import React,{useEffect,useState} from 'react'
import Recommended from '../books/recommended/Recommended'
 const Read =()=>{
  const [bookList,setBookList]=useState([])
  useEffect(() => {
 async function fetchBookListe() {

 try{  const apiUrl="https://openlibrary.org/search.json?q=react";
    const response=await fetch(apiUrl);
    const responseJSON=await response.json();
    console.log(responseJSON.docs);
    setBookList(responseJSON.docs);
  } catch{

  }
}
 fetchBookListe();
   },[])
  
    return(
        <div> 
          <div className='grid-cols-3 grid gap-4'>
         { bookList?.map((book)=>{book.cover_i ?
          <Recommended props={book}/> : null
             })
         }
         </div>
        </div>
    )
}
export default Read;