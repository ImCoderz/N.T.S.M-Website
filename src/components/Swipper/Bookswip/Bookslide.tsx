import React from 'react'
import test from '../../../assets/test.jpeg'
const Bookslide = () => {
  return (
    <div className={`image relative bg-bgbook h-[80vh] w-full min-h-[350px]`}>
        <img src={test} className="absolute inset-0 w-full " alt="test" />
        <div />
    </div>
  )
}

export default Bookslide;