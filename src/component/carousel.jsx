import React from 'react';
import img1 from '../assets/slider/img1.png'
import img2 from '../assets/slider/img2.png';
import img3 from '../assets/slider/img3.png';

const Carousel = () => {
  const imagesPath = [];
  imagesPath.push(img1, img2, img3, img3, img1, img2, img3);
  return (
    <div className="slider">
      <div className="slider__wrapper">
        {imagesPath.map((imgPath, index) => {
          return (
            <div className="slide" key={index}>
              <img src={imgPath} alt="" srcset="" />
            </div>
          );
        })}
      </div>
    </div>
  );};
export default Carousel;
