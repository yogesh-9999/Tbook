import React, { useEffect,  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import "./Card1.css";

// import required modules
import { EffectCoverflow, Pagination,Navigation } from "swiper";
 
import 'swiper/css';

const Card1 = () => {
   
  
  const [number,setNumber] = useState(1)
  console.log(number)
  
  useEffect(()=>{
    if(number===0){
      setNumber(1)
    }
    if(number>7){
      setNumber(2)
    }
    if(number<1){
      setNumber(7)
    }
  },[number])
  return (
    <> 
    <div className='heading_hotle'>
      <h1>Fratured Hotels</h1>
      <div className="h_line"/>
    </div>
    <div className="cont">
      <Swiper
        effect={"coverflow"}
        
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        
        onSlideNextTransitionEnd={()=>setNumber(number+1)}
        onSlidePrevTransitionStart={()=>setNumber(number-1)}
        pagination={false}
        
        navigation={true}
        loop={true}
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 500,
          modifier: 0.6,
          slideShadows : false,
                  }}
        
        
        modules={[EffectCoverflow, Pagination,Navigation]}
        className="mySwiper "
      >
       <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
          {number===2?<div className="text">
        {/* <h1>Hotle 1</h1> */}
        {/* <h3> - Kanpur</h3> */}
        <div className="card_line"/>
        {/* <h6 >Wherever you go, stay with us!</h6> */}
        </div> : <div></div>}
          
        </SwiperSlide>
        
        <SwiperSlide  >
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='' />
          {number===3?<div className="text">
        {/* <h1>Hotle 2</h1> */}
        {/* <h3> - Kanpur</h3> */}
        <div className="card_line"/>
        {/* <h6 >Wherever you go, stay with us!</h6> */}
        </div> : <div></div>}
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='' />
          {number===4?<div className="text">
        {/* <h1>Hotle 3</h1>
        <h3> - Kanpur</h3> */}
        <div className="card_line"/>
        {/* <h6 >Wherever you go, stay with us!</h6> */}
        </div> : <div></div>}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='' />
          {number===5?<div className="text">
        {/* <h1>Hotle 4</h1>
        <h3> - Kanpur</h3> */}
        <div className="card_line"/>
        {/* <h6 >Wherever you go, stay with us!</h6> */}
        </div> : <div></div>}
        </SwiperSlide>
        <SwiperSlide  >
          <img src={"https://swiperjs.com/demos/images/nature-1.jpg"} alt=""/>
          {number===6?<div className="text">
        {/* <h1>Hotle 5</h1> */}
        {/* <h3> - Kanpur</h3> */}
        <div className="card_line"/>
        {/* <h6 >Wherever you go, stay with us!</h6> */}
        </div> : <div></div>}
        </SwiperSlide >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=''/>
          {number===7?<div className="text">
        {/* <h1>Hotle 6</h1> */}
        {/* <h3> - Kanpur</h3> */}
        <div className="card_line"/>
        {/* <h6 >Wherever you go, stay with us!</h6> */}
        </div> : <div></div>}
        </SwiperSlide>
        
      </Swiper>
      </div>
      
   </>
  );
};

export default Card1;
