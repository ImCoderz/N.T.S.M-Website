import React from 'react'

const Card = ({title,cover}:{title:string,cover:string}) => {
  return (
    <div className='w-[300px] h-[300px]'>
        <h1>{title}</h1>
        <img className='' src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`} alt='geeek'/> 
    </div>
  )
}

export default Card