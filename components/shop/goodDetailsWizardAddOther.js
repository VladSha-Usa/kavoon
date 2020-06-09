import React, { useState, useEffect } from "react";
import BasketLogic from "../../data/shop/logic/basket";
const GoodDetailsWizardAddOther = ({
  additionGoodData,
  basketStyleSettings,
}) => {
  const [status, checkerStatus] = useState(true);
  const textStatus = status ? "ти" : "но";
  const textColor = status ? "var(--primarycolor)" : "var(--texticonscolor)";
  const statusWhileInBasket = basketStyleSettings ? "none" : "block";
  useEffect(() => {
    basketStyleSettings
      ? document
          .querySelector(".addition-wrapper")
          .classList.add("addition-basket-style-wrapper")
      : "";
    return BasketLogic.init();
  });
  return (
    <>
      <div className="addition-wrapper">
        <span className="addition-title">
          Дода{basketStyleSettings ? "но" : "ти"} в комплект:
        </span>
        <div className="addition-good-wrapper">
          <img
            className="addition-good-img"
            src={additionGoodData.picture.src}
            srcSet={additionGoodData.picture.srcSet}
          />
          <div className="good-description-checker">
            <span className="good-title">{additionGoodData.name}</span>
            <span className="good-amount">{additionGoodData.amount}шт.</span>
            <span className="good-price">
              {basketStyleSettings ? "Сума: " : ""}
              {additionGoodData.price} грн
            </span>
            <label className="good-checkcontainer">
              <input
                className="good-checkbox"
                type="checkbox"
                onChange={() => {
                  checkerStatus(!status);
                }}
              />
              <span className="good-checkmark"></span>
              <span className="good-checkcontainer-text">
                Дода{textStatus} в комплект
              </span>
            </label>
          </div>
        </div>
        <button
          className="btn-submit"
          type="submit"
          onClick={() => BasketLogic.addGood()}
        >
          Зробити замовлення
        </button>
      </div>
      <style jsx>{`
        .addition-wrapper {
          font-family: Montserrat;
          font-size: 17px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.89px;
          color: var(--texticonscolor);
          margin-top: 95px;
        }
        .addition-basket-style-wrapper {
          margin-top: 0px;
        }
        .addition-good-img {
          box-shadow: 2px 2px 24px 0 rgba(9, 21, 85, 0.08);
          border-radius: 4px;
          object-fit: contain;
          width: 100px;
          height: 100px;
        }
        .addition-title {
          margin-bottom: 21px;
          display: block;
        }
        .addition-basket-style-wrapper .addition-title {
          margin-bottom: 14px;
        }
        .good-title {
          padding-bottom: 10px;
        }
        .good-price {
          padding-bottom: 22px;
        }
        .addition-basket-style-wrapper .good-price {
          letter-spacing: 0.75px;
          font-size: 16px;
        }
        .good-checkcontainer {
          display: ${statusWhileInBasket};
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          user-select: none;
          width: fit-content;
          color: ${textColor};
          font-weight: 600;
        }
        .good-checkbox {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .good-checkmark {
          position: absolute;
          top: 0;
          left: 0;
          width: 25px;
          height: 25px;
          border-radius: 5px;
          border: solid 1.5px var(--primarycolor);
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -1.5px;
          margin-top: 0.5px;
        }
        .good-checkcontainer:hover .good-checkbox ~ .good-checkmark {
          background-color: #eee;
        }
        .good-checkcontainer .good-checkbox:checked ~ .good-checkmark {
          background-color: var(--primarycolor);
        }
        .good-checkcontainer .good-checkmark:after {
          content: "";
          position: absolute;
          display: none;
          background-image: url("/img/checker-tick.svg");
          width: 15px;
          height: 12px;
          object-fit: contain;
        }
        .good-checkcontainer .good-checkbox:checked ~ .good-checkmark:after {
          display: block;
        }
        .good-checkcontainer .good-checkbox:checked ~ .good-checkmark {
          border: none;
          margin-top: 2px;
          margin-left: 0;
        }
        .good-checkcontainer-text {
          color: ${textColor};
          line-height: normal;
          letter-spacing: 0.89px;
          margin-left: 5px;
          margin-top: 5px;
          display: block;
        }
        .btn-submit {
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.75px;
          color: var(--white);
          width: 290px;
          height: 50px;
          border-radius: 25px;
          box-shadow: 0 10px 32px 0 rgba(13, 26, 113, 0.2);
          background-color: var(--primarycolor);
          border: none;
          text-transform: uppercase;
          cursor: pointer;
          outline: none;
          display: ${statusWhileInBasket};
        }
        .addition-good-wrapper {
          display: flex;
          margin-bottom: 29px;
        }
        .addition-basket-style-wrapper .addition-good-wrapper {
          margin-bottom: 2px;
        }
        .good-description-checker {
          display: flex;
          flex-direction: column;
          margin-left: 20px;
        }
        .addition-basket-style-wrapper .good-description-checker {
          margin-left: 31px;
        }
        .good-amount {
          display: none;
        }
        .addition-basket-style-wrapper .good-amount {
          display: block;
          margin-bottom: 27px;
        }
      `}</style>
    </>
  );
};

export default GoodDetailsWizardAddOther;
