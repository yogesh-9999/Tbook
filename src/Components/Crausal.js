import React from "react";
import "./style3.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
              <img src={image.src} key={image.id} />
              <h4>Place info</h4>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
