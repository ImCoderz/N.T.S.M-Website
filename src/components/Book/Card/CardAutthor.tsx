import React from 'react'

const CardAutthor = ({cover,author}:{cover:string,author:string}) => {
  return (
    <div>
        <img className='w-[150px] h-[200px]' src={`https://covers.openlibrary.org/a/olid/${cover}-S.jpg`} alt='geek'/> 
        <div>
            <p>{author}</p>
        </div>
    </div>
  )
}

export default CardAutthor