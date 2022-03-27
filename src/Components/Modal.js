import React from 'react'

const Modal = ({setIsModalOpen}) => {
  return (
    <div className='modal'>
        <button onClick={()=>{setIsModalOpen(false)}}>x</button>
        Modal
        </div>
  )
}

export default Modal