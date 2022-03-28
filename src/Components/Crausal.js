import React from "react";
import "./style3.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faStarHalfAlt)
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
    <div className="carousel-container">
      <h1>Popular hotels </h1>
      <Carousel responsive={responsive}>
        {arr1.map((image) => {
          return (
            <div className="carousel-img-container">
              <div className="cont"><img src={image.src} key={image.id} /></div>
              <h4>Place info</h4>
              {/* <span class="heading">User Rating</span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span> */}
              <div className="checked">
                <FontAwesomeIcon icon={fasFaStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={fasFaStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={fasFaStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={fasFaStar}></FontAwesomeIcon>
                <div className="unchecked">
                 <FontAwesomeIcon icon={fasFaStar}></FontAwesomeIcon>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
