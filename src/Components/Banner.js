import React, { useState } from "react";
import "./Styles.css";
import {GoArrowRight,GoArrowLeft} from "react-icons/go"
const arr = [
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
export default function Banner() {
    const [sliderIndex, setSliderIndex] = useState(1)
    const setNext=()=>{
        if (sliderIndex===7) {
            setSliderIndex(1)
        }
        else{
            setSliderIndex((prev)=>prev+1)
        }
    }
    const setPrev=()=>{
        if (sliderIndex===1) {
            setSliderIndex(7)
        }
        else{
            setSliderIndex((prev)=>prev-1)
        }
    }
  return (
    <div className="imgcontainer">
        <img src={arr[sliderIndex-1].src}/>
        <button onClick={setPrev} className='arrow-left'><GoArrowLeft/></button>
        <button onClick={setNext} className='arrow-right'><GoArrowRight/></button>
    </div>
  );
}
