import React from 'react'
 const Recommended = ({props})=> {
 
    return(
     <div className=' max-w-[500px] bg-white p-4 flex' >
          {props.cover_i && ( 
            <>
             <div className=''>
            <img className='w-[300px] h-[300px]' src={`https://covers.openlibrary.org/b/id/${props.cover_i}-L.jpg`} alt='geeek'/>  
            </div>
            <div className=''>
                <p>{props.title}</p>
                <p>{props.author_name}</p>
                <p>read</p>
            </div>
            </>
            )
            }
        </div>
        )
  
}

export default Recommended