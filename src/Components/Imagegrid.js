import React from 'react'
import "./style3.css"
export const Imagegrid = () => {
    const arr1 = [
        {
          id: 1,
          src: "Images/room1.jpg",
        },
        {
          id: 2,
          src: "Images/room2.jpg",
        },
        {
          id: 3,
          src: "Images/room3.jpg",
        },
        {
          id: 4,
          src: "Images/room4.jpg",
        },
        {
          id: 5,
          src: "Images/room1.jpg",
        },
        {
          id: 6,
          src: "Images/room2.jpg",
        },
        {
          id: 7,
          src: "Images/room3.jpg",
        },
      ];
  return (
      <>
        <h1 className='Headline'>Get inspiration for your next trip</h1>
        {/* <div className='image-grid'> */}
        <div className='image-grid1'>
        <li>
        <img src='Images/torism1.png' style={{width:500}}/>
        </li>
        <li>
        <img src='Images/torism2.jpg'style={{width:500}} />
        </li>
       
        

        </div>
        <div className='image-grid2'>
            <li><img src='Images/torism3.jpg'style={{width:330,height:300}}/></li>
            <li><img src='Images/torism4.jpg'style={{width:330,height:300}}/></li>
            <li><img src='Images/varanasi.jpg'style={{width:330,height:300}}/></li>
        
        
        
        </div>
        {/* </div> */}
       </>
       
       
       )}



