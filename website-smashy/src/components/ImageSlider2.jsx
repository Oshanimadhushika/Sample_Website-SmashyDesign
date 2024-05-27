import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import { useRef } from "react";

const ImageSlider1 = () => {
  const images = [Img3, Img4, Img5, Img1, Img2, Img6];

  const carouselRef = useRef();

  const handleNext = () => {
    carouselRef.current.slideNext();
  };

  return (
    <div className="">
      <div className="flex justify-end text-2xl mr-8 ">
        <FaRegArrowAltCircleRight onClick={handleNext} />
      </div>

      {/* screens */}
      <div className="p-5 mt-2 gap-2 justify-center">
        <AliceCarousel
          ref={carouselRef}
          items={images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-auto object-cover mr-4 p-2"
              alt={`slide-${index}`}
            />
          ))}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 2 },
          }}
          dotsDisabled={true}
          buttonsDisabled={true}
          autoPlay={true}
          autoPlayInterval={1000}
        />
      </div>
    </div>
  );
};

export default ImageSlider1;
