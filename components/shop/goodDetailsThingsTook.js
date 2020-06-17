import Popup from "reactjs-popup";
import GoodDiscountInComplect from "./goodDiscountInComplect";
const GoodDetailsThingsTook = ({ things, сontent }) => {
  return (
    <>
      <div className="taken-things-wrapper">
        <div className="things-main-question">
          Що можна покласти в комплект?
        </div>
        <div className="main-imgs-wrapper">
          <div className="large-img-content">
            <img
              className="large-img"
              src={things.largeImg.src}
              srcSet={things.largeImg.srcSet}
            />
            <div className="img-large-sub-question">
              Як щодо такого комлекту сумок?
            </div>
            <Popup
              trigger={
                <button className="show-complect-btn">Клікни сюди</button>
              }
              modal
            >
              {(close) => (
                <div className="complect-popup">
                  <a className="close" onClick={close}>
                    <img src="/img/good-to-complect-img/cancel-icon.svg" />
                  </a>
                  <div className="header">Замов одразу весь комлект</div>
                  <div className="sub-title-discount">
                    Якщо замовляти весь комлект разом, ми даємо знижку{" "}
                    <span className="amount-percent">- 10%</span>
                  </div>
                  <div className="content">
                    <div className="goods-to-complect-wrapper">
                      {сontent.allKitDiscount.map((good, index) => (
                        <GoodDiscountInComplect content={good} key={index} />
                      ))}
                    </div>
                    <div className="price-submit-wrapper">
                      <div className="price-inf">
                        <span className="price-intro">Сума:</span>
                        <span className="price-prev">1300 грн</span>
                        <span className="price-new">1000 грн</span>
                      </div>
                      <button type="submit" className="order-btn">
                        ЗАМОВИТИ
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div className="small-things-wrapper">
            <span className="small-things-title">
              Ось ці речі ми брали з собою:
            </span>
            <ul className="small-content">
              {things.smallThings.map((goodData, index) => (
                <li className="small-item" key={index}>
                  <a href="#">
                    <img
                      className="small-img"
                      key={index}
                      src={goodData.src}
                      srcSet={goodData.srcSet}
                    />
                    <span className="small-name">{goodData.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .taken-things-wrapper {
          font-family: Montserrat;
          font-size: 17px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
          color: var(--texticonscolor);
        }
        .things-main-question {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.6;
          letter-spacing: 1.05px;
          text-align: center;
          margin-bottom: 61px;
        }
        .large-img {
          margin-top: 18px;
          margin-bottom: 41px;
          width: 614px;
          height: 377px;
        }
        .img-large-sub-question {
          margin-bottom: 9px;
        }
        .show-complect-btn,
        .small-more-inf {
          font-weight: 600;
          color: var(--primarycolor);
          text-decoration: none;
        }
        .show-complect-btn {
          background: none;
          border: none;
          font-family: Montserrat;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.53;
          letter-spacing: 0.89px;
          cursor: pointer;
          outline: none;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-right: 30px;
        }
        .show-complect-btn:after {
          content: "";
          position: absolute;
          background-image: url("/img/good-to-complect-img/click-here.svg");
          width: 18px;
          height: 18px;
          margin-left: 25px;
        }
        .main-imgs-wrapper {
          display: flex;
          justify-content: space-between;
        }
        .small-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 30px;
          white-space: pre-wrap;
          text-align: center;
          list-style: none;
          padding-inline-start: 0;
        }
        .small-item {
          display: flex;
          flex-direction: column;
          width: 90px;
          margin-bottom: 20px;
        }
        .small-img {
          object-fit: contain;
          margin-bottom: 14px;
          width: 70px;
          height: 70px;
        }
        .small-item a {
          text-decoration: none;
          color: var(--texticonscolor);
        }
        .small-item a:hover {
          color: var(--primarycolor);
        }
        .small-things-wrapper {
          width: 449px;
        }
        .small-things-wrapper,
        .large-img-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .small-things-title {
          margin-bottom: 37px;
          font-weight: 600;
        }
        .complect-popup {
          font-weight: 600;
        }
        .complect-popup .close {
          float: right;
          margin-right: -7px;
          cursor: pointer;
        }
        .complect-popup .header {
          text-align: center;
          margin-left: 12px;
          margin-bottom: 10px;
          font-size: 20px;
          padding-top: 8px;
        }
        .complect-popup .goods-to-complect-wrapper {
          display: flex;
          flex-direction: column;
          padding-left: 4px;
          margin-bottom: 8px;
        }
        .complect-popup .price-submit-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 3px;
        }
        .complect-popup .price-inf .price-intro {
          padding-right: 11px;
        }
        .complect-popup .price-inf .price-prev {
          padding-right: 10px;
          font-weight: 500;
          position: relative;
          text-decoration: line-through;
        }
        .complect-popup .price-inf .price-new {
          color: var(--primarycolor);
          font-size: 20px;
        }
        .complect-popup .sub-title-discount {
          font-weight: 500;
          letter-spacing: 0.84px;
          font-size: 16px;
          margin-bottom: 12px;
        }
        .complect-popup .sub-title-discount .amount-percent {
          color: var(--primarycolor);
          font-weight: 600;
        }
        .complect-popup .order-btn {
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.75px;
          color: #fff;
          border: none;
          width: 200px;
          height: 50px;
          border-radius: 25px;
          box-shadow: 0 10px 32px 0 rgba(13, 26, 113, 0.2);
          background-color: var(--primarycolor);
          outline: none;
          cursor: pointer;
        }
      `}</style>
      <style>
        {`
        .popup-content {
          width: 576px !important;
          border-radius: 10px;
          padding: 28px 35px !important;
        }
        `}
      </style>
    </>
  );
};
export default GoodDetailsThingsTook;
