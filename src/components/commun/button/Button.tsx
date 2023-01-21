import './button.css'
export const ButtonNormal =({props: string})=>{
    return(
      <>
        <button className=''>{...props}</button>
      </>
    )
} 
export const ButtonAttrative = ({props}) =>{
    return(
      <div className='btn'>
          <a className='utilitie  tracking-[2px] text-[15px] border-2 border-[#6A82FB] px-[22px] py-[8px] rounded'>
            {props}
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