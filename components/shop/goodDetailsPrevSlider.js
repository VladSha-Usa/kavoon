import { useState } from "react";
import Slider from "react-slick";

const GoodDetailsPrevSlider = ({ images }) => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const sliderWrapper = "good-prev__slider-wrapper";
  const img = "details-slider__img";
  const sliderFirst = "details-slider__first";
  const sliderSecond = "details-slider__second";

  return (
    <>
      <div className={sliderWrapper}>
        <div className={sliderFirst}>
          <Slider
            asNavFor={slider2}
            ref={(slider) => setSlider1(slider)}
            dots={true}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  srcSet={image.srcSet}
                  onClick={() => slider1.slickGoTo(index + 1)}
                  className={img}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className={sliderSecond}>
          <Slider
            asNavFor={slider1}
            ref={(slider) => setSlider2(slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.src} srcSet={image.srcSet} className={img} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <style jsx global>
        {`
          .${sliderFirst} {
            margin-bottom: 50px;
          }
          .${sliderFirst} .slick-disabled {
            opacity: 0.25;
          }
          .${sliderFirst} .slick-next,
          .slick-prev {
            background: none;
          }
          .${sliderFirst} .slick-prev {
            left: -39px;
            top: 50%;
          }
          .${sliderFirst} .slick-next {
            right: -40px;
            top: calc(48% - 3px);
          }
          .${sliderFirst} .slick-next:before,
          .${sliderFirst} .slick-prev:before {
            content: "";
            font-size: 0px;
            line-height: 0px;
            opacity: 1;
            background-image: url("/img/good-details-prev-slider/next-icon.svg");
            position: absolute;
            width: 16px;
            height: 27px;
          }
          .${sliderFirst} .slick-prev {
            transform: rotate(180deg);
          }
          .${sliderFirst} .slick-list {
            border-radius: 12px;
            overflow: hidden;
          }
          .${sliderFirst} .slick-slider {
            margin-bottom: 45px;
            width: 460px;
          }
          .${sliderFirst} .${img} {
            width: 460px;
            height: 580px;
          }
          .${sliderFirst} .slick-dots li button:before {
            width: 8px;
            height: 8px;
            content: "";
            object-fit: contain;
            border-radius: 50%;
            opacity: 0.25;
            background-color: var(--primarycolor);
            top: calc(50% - 4px);
            left: calc(50% - 4px);
          }
          .${sliderFirst} .slick-dots {
            margin-bottom: -9px;
          }
          .${sliderFirst} .slick-dots li {
            margin: 0;
            width: 16px;
          }
          .${sliderFirst} .slick-dots .slick-active button:before {
            width: 15px;
            height: 15px;
            opacity: 1;
            top: calc(50% - 7.5px);
            left: calc(50% - 7.5px);
          }
          .${sliderSecond} .${img} {
            width: 115px !important;
            height: 120px;
            border-radius: 6px;
          }
          .${sliderSecond} .slick-slide {
            width: 120px !important;
            cursor: pointer;
          }
          .${sliderSecond} .slick-list,
          .${sliderSecond} .slick-track {
            height: 120px;
          }
        `}
      </style>
      <style jsx>
        {`
          .${sliderWrapper} {
            width: 480px;
            margin-left: 45px;
          }
        `}
      </style>
    </>
  );
};
export default GoodDetailsPrevSlider;
