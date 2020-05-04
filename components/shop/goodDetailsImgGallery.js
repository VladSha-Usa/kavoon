import { useState } from "react";
import Slider from "react-slick";

const GoodDetailsImgGallery = ({ images }) => {
  const [idx, setIndex] = useState(0);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, nextSlide) => setIndex(nextSlide),
    afterChange: (currentSlide) => setIndex(currentSlide),
  };
  var slider = null;
  return (
    <>
      <div className="pathfinder-image-gallery">
        <Slider ref={(sl) => (slider = sl)} {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                onClick={() => slider.slickGoTo(index + 1)}
                className="pathfinder-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="switcher"
      >
        {images.map((_, index) => (
          <div
            onClick={() => slider.slickGoTo(index)}
            key={index}
            className={idx == index ? "switcher-item-active" : "switcher-item"}
          />
        ))}
      </div>

      <style>
        {`

    `}
      </style>
      <style jsx>{`

      `}</style>
    </>
  );
};
export default GoodDetailsImgGallery;
