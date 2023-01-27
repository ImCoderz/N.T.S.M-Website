import React from 'react'
import { useAtom,useAtomValue } from 'jotai'
import { searchAtom,allBooks, idAtom} from '../../../store'
import Card from '../Card/Card'
const Read = () => {
    
    const books=useAtomValue(allBooks).docs
    console.log(books);
      
    return (
        <div>
            {
          books.map((book:typeof books[0])=>(
           <>
              {book.cover_i &&(
                <Card title={book?.title} cover={book?.cover_i}/>
              )
              }
              {/* <img src={`https://covers.openlibrary.org/b/isbn/${books[3].isbn[0]}-S.jpg`} alt='geeek'/>   */}
           </>
          ))
            }
        </div>
    )
}

export default Read