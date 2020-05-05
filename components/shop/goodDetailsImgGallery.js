import Slider from "react-slick";

const GoodDetailsImgGallery = ({ galleryContent }) => {
  return (
    <>
      <div className="gallery-wrapper">
        <Slider
          focusOnSelect={true}
          infinite={true}
          slidesToShow={5}
          slidesToScroll={1}
          speed={1000}
        >
          {galleryContent.map((slideContent, index) => (
            <div key={index} className="slide-wrapper">
              <img
                src={slideContent.src}
                srcSet={slideContent.srcSet}
                className="gallery-img"
              ></img>
              <span className="img-subtext">{slideContent.subText}</span>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .gallery-img {
          object-fit: contain;
          box-shadow: 2px 2px 24px 0 rgba(9, 21, 85, 0.08);
          border-radius: 5px;
          outline: none;
          cursor: pointer;
        }
        .img-subtext {
          position: absolute;
          cursor: pointer;
          width: 290px;
          bottom: 4px;
          height: 45px;
          background-color: rgba(14, 19, 39, 0.75);
          font-family: Montserrat;
          font-size: 14px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.74px;
          color: #fff;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          display: flex;
          align-items: center;
          padding-left: 10px;
        }
        .slide-wrapper {
          outline: none;
        }
      `}</style>
    </>
  );
};
export default GoodDetailsImgGallery;
