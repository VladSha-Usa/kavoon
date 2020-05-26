import React, { useState, useRef, useEffect } from "react";
import useOutsideClick from "./useOutsideClick";
import dataOfGood from "../../data/shop/data/goods";
const GoodDetailsWizardPicker = ({ mainTheme, zIndex }) => {
  let [isOpened, setOpened] = useState(false);
  let [contentPicker, setContentPicker] = useState(
    dataOfGood
      .filter((el) => el.id === "bag-big-fork")
      .map((el) => el.fabrics)[0]
      .map((el) => el)
  );
  const ref = useRef();
  useOutsideClick(ref, () => {
    setOpened(false);
  });
  return (
    <>
      <div className="wizard__picker-param">
        <span className="param__general-title">{mainTheme}</span>
        <div
          className={
            "picker-param__status" + (isOpened ? " active__status-choose" : "")
          }
          ref={ref}
        >
          <div className="picker-param__status-main">
            <img
              className="picker-param__status-img"
              src={contentPicker[0].src}
            />
            <span className="param__status-choose__title">
              {contentPicker[0].name}
            </span>
            <button
              id="picker-param__status-more"
              onClick={() => setOpened(!isOpened)}
            ></button>
          </div>
          <ul className="picker-param__status-list">
            {contentPicker.map((el, i) => (
              <li
                onClick={() => {
                  setContentPicker(contentPicker.unshift(el));
                }}
                key={i}
              >
                <img className="status-list__img" src={el.src} />
                <span className="param__status-list__title">{el.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .wizard__picker-param {
            width: 380px;
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 0.85px;
            color: var(--texticonscolor);
            margin-bottom: 75px;
          }
          .picker-param__status {
            position: absolute;
            width: 380px;
            height: 50px;
            border-radius: 25px;
            box-shadow: 0 6px 32px -6px rgb(194, 197, 199);
            background-color: white;
            display: flex;
            align-items: flex-start;
            transition: 0.3s ease;
            z-index: ${zIndex ?? 10};
          }
          .active__status-choose {
            height: 350px;
          }
          .picker-param__status-main {
            display: flex;
            align-items: center;
            width: -webkit-fill-available;
            height: 50px;
          }
          .param__general-title {
            display: block;
            letter-spacing: 0.84px;
            margin-bottom: 10px;
            font-size: 14px;
          }
          .picker-param__status-img {
            margin: 0 15px 0 20px;
          }
          .param__status-choose__title {
            margin-right: auto;
          }
          #picker-param__status-more {
            padding: 0;
            border-width: 0;
            height: 20px;
            width: 20px;
            cursor: pointer;
            background: transparent;
            outline: none;
            margin-right: 18px;
          }
          #picker-param__status-more:before {
            content: "";
            position: absolute;
            height: 9px;
            width: 16px;
            background-image: url("/img/wizard-picker/more-icon.svg");
            margin-left: 0px;
            margin: -4.5px 0 0 -8px;
            transition: 0.5s ease;
          }
          .active__status-choose #picker-param__status-more:before {
            transform: rotate(180deg);
            transition: 0.5s ease;
          }
          .active__status-choose .picker-param__status-list {
            height: 270px;
          }
          .picker-param__status-list {
            position: absolute;
            list-style: none;
            height: 0px;
            width: 360px;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 20px;
            margin-top: 50px;
            overflow: auto;
            transition: 0.3s ease;
            border-radius: 25px;
            background-color: white;
          }
          .picker-param__status-list::-webkit-scrollbar-button {
            background-repeat: no-repeat;
            width: 5px;
            height: 0px;
            display: none;
          }

          .picker-param__status-list::-webkit-scrollbar-track {
            background-color: tarnsparent;
          }

          .picker-param__status-list::-webkit-scrollbar-thumb {
            -webkit-border-radius: 2, 5px;
            border-radius: 2.5px;
            background-color: #ced5e1;
          }

          .picker-param__status-list::-webkit-scrollbar-thumb:hover {
            background-color: #ced5e1;
          }

          .picker-param__status-list::-webkit-resizer {
            background-image: url("");
            background-repeat: no-repeat;
            width: 5px;
            height: 0px;
          }

          .picker-param__status-list::-webkit-scrollbar {
            width: 5px;
          }
          .picker-param__status-list li {
            font-size: 16px;
            letter-spacing: 0.84px;
            margin-bottom: 19px;
            display: flex;
            align-items: center;
          }
          .picker-param__status-list li:first-child {
            margin-top: 14px;
          }
          .param__status-list__title {
            margin-left: 10px;
          }
        `}
      </style>
    </>
  );
};
export default GoodDetailsWizardPicker;
