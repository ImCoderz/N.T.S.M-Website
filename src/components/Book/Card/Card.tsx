import React from 'react'
const Card = ({title,cover,author}:{title:string,cover:string,author:string}) => {
  return (
    <>
    <div className='flex bg-white w-[100%] my-4 mr-4 border-4'>
      <img className='w-[150px] h-[200px]' src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`} alt='geeek'/> 
    <div className="p-4 gap-4 flex flex-col">
      <p className='text-[8px]'>{title}</p>
      <p className='text-[8px] text-gray-500'>{author}</p>
    </div>
    </div>
  </>
  )
}

export default Card