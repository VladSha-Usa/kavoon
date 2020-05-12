import Slider from "react-slick";
import React, { useState, useRef, useEffect } from "react";
import useOutsideClick from "./useOutsideClick";

const GoodDetailsImgGallery = ({ galleryContent }) => {
  const [isOpened, setStatus] = useState(false);
  const displayPopUp = isOpened ? "block" : "none";
  const [dataOfCurrentPopUp, setData] = useState({});
  const ref = useRef();
  useOutsideClick(ref, () => {
    setStatus(false);
  });
  useEffect(() => {
    document.querySelector(".good-details-img-gallery .slick-track").style
      .transition
      ? setStatus(false)
      : null;
  });

  return (
    <>
      <div className="gallery-wrapper">
        <div className="slide-popup-wrapper">
          <div ref={ref} className="slide-popup">
            <div
              className="close-popup"
              onClick={() => setStatus(!isOpened)}
            ></div>
            <img src={dataOfCurrentPopUp.src} className="popup-img" />
            <span className="popup-subtext">{dataOfCurrentPopUp.subText}</span>
          </div>
        </div>
        <Slider
          infinite={true}
          slidesToShow={4}
          touchThreshold={200}
          // slidesToScroll={1}
          speed={500}
        >
          {galleryContent.map((slideContent, index) => (
            <div key={index} className="slide-wrapper">
              <div
                className="slide"
                onClick={() => {
                  setData(slideContent);
                  setStatus(!isOpened);
                }}
              >
                <img
                  src={slideContent.src}
                  srcSet={slideContent.srcSet}
                  className="gallery-img"
                ></img>
                <span className="img-subtext">{slideContent.subText}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .gallery-wrapper {
          position: relative;
          font-family: Montserrat;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
        }
        .slide-popup-wrapper {
          position: absolute;
          height: fit-content;
          top: -220px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          display: flex;
          z-index: 999;
          display: ${displayPopUp};
        }
        .slide-popup {
          margin: auto;
          height: fit-content;
          width: fit-content;
          position: relative;
          display: flex;
          border-radius: 10px;
          box-shadow: 2px 80px 140px 0 rgba(14, 18, 35, 0.25);
          overflow: hidden;
        }
        .close-popup {
          position: absolute;
          width: 40px;
          height: 40px;
          object-fit: contain;
          border-radius: 10px;
          background-color: rgba(14, 17, 30, 0.71);
          display: flex;
          justify-content: center;
          align-items: center;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
        .close-popup:after {
          content: "";
          position: absolute;
          background-image: url("/img/icon-cancel.svg");
          width: 18px;
          height: 18px;
        }
        .slide-popup .popup-img {
          width: 850px;
          height: 600px;
        }
        .popup-subtext {
          position: absolute;
          bottom: 0;
          height: 55px;
          background-color: rgba(14, 19, 39, 0.75);
          width: 100%;
          font-family: Montserrat;
          font-size: 16px;
          letter-spacing: 0.84px;
          color: var(--white);
          padding-left: 15px;
          display: flex;
          align-items: center;
        }
        .gallery-img {
          object-fit: contain;
          box-shadow: 2px 2px 24px 0 rgba(9, 21, 85, 0.08);
          outline: none;
          cursor: pointer;
          width: 277px; // if we make agree with decreasing width of slide, I will remove this comment
          height: 203px;
        }
        .img-subtext {
          position: absolute;
          cursor: pointer;
          width: calc(100% - 10px);
          bottom: 0;
          height: 45px;
          background-color: rgba(14, 19, 39, 0.75);
          font-size: 14px;
          letter-spacing: 0.74px;
          color: #fff;
          display: flex;
          align-items: center;
          padding-left: 10px;
        }
        .slide-wrapper {
          outline: none;
        }
        .slide {
          width: fit-content;
          position: relative;
          overflow: hidden;
          border-radius: 5px;
        }
      `}</style>
      <style>
        {`
        .gallery-wrapper .slick-slide {
          // width: 300px !important;
          // margin-right: 15px;
        }
        `}
      </style>
    </>
  );
};
export default GoodDetailsImgGallery;
