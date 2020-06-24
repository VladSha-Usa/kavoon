import React, { useState } from "react";
import BasketLogic from "../../data/shop/logic/basket";
import RespScreenWidth from "../common/mediaConst";
import { v4 as uuidv4 } from "uuid";
const GoodDetailsOrderBtn = ({ basketStyleSettings }) => {
  const statusWhileInBasket = basketStyleSettings ? "none" : "block";
  return (
    <>
      <button
        className="btn-submit"
        type="submit"
        onClick={() => {
          BasketLogic.colectDataOfGood({ id: uuidv4() });
          BasketLogic.addGood();
        }}
      >
        Зробити замовлення
      </button>
      <style jsx>{`
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
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .btn-submit {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default GoodDetailsOrderBtn;
