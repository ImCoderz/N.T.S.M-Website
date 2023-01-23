import './button.css'
export const ButtonNormal =({text}:{text:string})=>{
    return(
      <>
        <button className=''>{text}</button>
      </>
    )
} 
export const ButtonAttrative = ({text}:{text:string}) =>{
    return(
      <div className='btn'>
          <a className='utilitie  tracking-[2px] text-[15px] border-2 border-[#6A82FB] px-[22px] py-[8px] rounded'>
            {text}
          </a>
      </div>
    )
}

export const ButtonAction = ({}) => {
    return(
       <>

       </>

    )    
}