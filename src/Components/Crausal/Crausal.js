import React from 'react'
import './Crausal.css'
import {AiFillStar} from 'react-icons/ai'
import {AiTwotoneStar} from 'react-icons/ai'
// import React from "react";
// import "./style3.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
// import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
// library.add(fasFaStar, farFaStar, faStarHalfAlt);
export const Crausal = () => {
  const arr1 = [
    {
      id: 1,
      src: "Images/c1.jpg",
    },
    {
      id: 2,
      src: "Images/c2.jpg",
    },
    {
      id: 3,
      src: "Images/c3.jpg",
    },
    {
      id: 4,
      src: "Images/c4.jpg",
    },
    {
      id: 5,
      src: "Images/c5.jpg",
    },
    {
      id: 6,
      src: "Images/c6.jpg",
    },

    {
      id: 7,
      src: "Images/c7.jpg",
    },
    {
      id: 8,
      src: "Images/c1.jpg",
    },
    {
      id: 9,
      src: "Images/c2.jpg",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
      <div className="cr">
    <div className="carousel-container">
      <h1>Popular hotels </h1>
      <Carousel responsive={responsive}>
        {arr1.map((image) => {
          return (
            <div className="carousel-img-container">
              
              <img src={image.src} key={image.id} />
              <h4>Place info</h4>
              <div className="rating">
                <div className="checked">
                    <div><AiFillStar/></div>
                    <div><AiFillStar/></div>
                    <div><AiFillStar/></div>
                    <div><AiFillStar/></div>
                   
                </div>
                <div className="unchecked">
                <div><AiFillStar/></div>
                  {/* <FontAwesomeIcon icon={fasFaStar}></FontAwesomeIcon> */}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
    </div>
  );
};









// export const Crausal = () => {
//   return (
//     <div className='cr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima itaque possimus. Reiciendis inventore libero atque fugit incidunt mollitia! Ullam perferendis obcaecati labore tempora ducimus, sequi possimus porro blanditiis vel necessitatibus officiis delectus dolore sint vero. Vero perferendis deserunt culpa doloribus exercitationem iste, possimus labore aut ab nemo suscipit et assumenda ratione vitae quasi similique tempore ipsa asperiores accusamus. Temporibus sequi qui in magnam quaerat voluptates illum, debitis unde ea, magni optio atque, assumenda vel excepturi facere iure a eum accusantium quam. Recusandae esse quae, atque amet quam corporis, perferendis repellat fugit, voluptatibus illo est tempore ipsa molestiae animi eum unde! Vitae in quo eum molestiae, nisi nam provident tempore quisquam id inventore nostrum quae delectus repellat incidunt, nulla vel porro obcaecati quis.</div>
//   )
// }

