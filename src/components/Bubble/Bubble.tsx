import React, { ReactElement } from 'react'
import { IconType } from 'react-icons/lib/esm/iconBase'
import './bubble.css'
const Bubble = ({top,left,title}:{top:string,left:string,title:ReactElement<any, any>}) => {
  return (
    <section className={`stage absolute ${top} ${left}`}>
        <figure className="ball bubble">
            <>
                {title}
            </>
        </figure>
    </section>
  )
}

export default Bubble