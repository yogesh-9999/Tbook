import React from 'react'
import img1 from './xEaAoizNFV8.jpg'
import './Style.css'
import Filter from './Filter'
export default function Body() {
  return (
    <div className='pframe'>
        {/* <img src='img1'alt="" /> */}
        <img src={img1} alt="Error"></img>
        <Filter/>
    </div>
  )
}
