import React, { useState } from "react";
const GoodDetailsWizardAdd = ({ additionGoodData }) => {
  const [amount, setAmount] = useState(0);
  const displayChooseRes = amount > 0 ? "flex" : "none";

  return (
    <>
      <div className="addition-wrapper">
        <span className="addition-title">Додати в комплект:</span>
        <div className="addition-good-wrapper">
          <img
            className="addition-good-img"
            src={additionGoodData.picture.src}
            srcSet={additionGoodData.picture.srcSet}
          />
          <div className="good-description-amount">
            <span className="good-title">{additionGoodData.name}</span>
            <span className="good-price">{additionGoodData.price}</span>
            <div className="good-control-amount-wrapper">
              <div
                className="control-amount-btn control-amount-btn-minus"
                onClick={() => (amount > 0 ? setAmount(amount - 1) : {})}
              ></div>
              <div className="good-amount">{amount}</div>
              <div
                className="control-amount-btn control-amount-btn-plus"
                onClick={() => setAmount(amount + 1)}
              ></div>
              <div className="good-choose-result">Додано в комплект</div>
            </div>
          </div>
        </div>
        <button className="btn-submit" type="submit">
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
        .addition-good-img {
          box-shadow: 2px 2px 24px 0 rgba(9, 21, 85, 0.08);
          border-radius: 4px;
        }
        .addition-title {
          margin-bottom: 21px;
          display: block;
        }
        .good-title {
          padding-bottom: 10px;
        }
        .good-price {
          padding-bottom: 18px;
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
        }
        .addition-good-wrapper {
          display: flex;
          margin-bottom: 39px;
        }
        .good-description-amount {
          display: flex;
          flex-direction: column;
          margin-left: 20px;
        }
        .good-amount {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 46px;
        }
        .good-control-amount-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .control-amount-btn {
          cursor: pointer;
        }
        .control-amount-btn-plus {
          background-image: url("/img/good-to-complect-img/add-button.svg");
          height: 32px;
          width: 32px;
        }
        .control-amount-btn-plus:hover {
          background-image: url("/img/good-to-complect-img/add-button-active.svg");
        }
        .control-amount-btn-minus {
          background-image: url("/img/good-to-complect-img/remove-button.svg");
          height: 32px;
          width: 32px;
        }
        .control-amount-btn-minus:hover {
          background-image: url("/img/good-to-complect-img/remove-button-active.svg");
        }
        .good-choose-result {
          display: ${displayChooseRes};
          white-space: nowrap;
          color: var(--primarycolor);
          margin-left: 14px;
          align-items: center;
          justify-content: flex-end;
        }
        .good-choose-result:after {
          content: "";
          position: absolute;
          width: 18px;
          height: 14px;
          object-fit: contain;
          background-image: url("/img/good-to-complect-img/tick-icon.svg");
          margin-left: 24px;
        }
      `}</style>
    </>
  );
};

export default GoodDetailsWizardAdd;
