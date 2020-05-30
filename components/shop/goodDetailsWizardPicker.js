import React, { useState, useRef } from "react";
import useOutsideClick from "./useOutsideClick";
const GoodDetailsWizardPicker = ({ mainTheme, zIndex, data }) => {
  const [isOpened, setOpened] = useState(false);
  const [contentPicker, setContentPicker] = useState(data);
  const [valueForRender, setValueForRender] = useState(true);
  const ref = useRef();
  useOutsideClick(ref, () => {
    setOpened(false);
  });
  return (
    <>
      <div
        className={
          "wizard__picker-param " + (isOpened ? " active__status-choose" : "")
        }
      >
        <span className="param__general-title">{mainTheme}</span>
        <div className="picker-param__status" ref={ref}>
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
              onClick={() => {
                setOpened(!isOpened);
              }}
            ></button>
          </div>
          <ul className="picker-param__status-list">
            {contentPicker.map((el, i) => (
              <li
                onClick={() => {
                  contentPicker.splice(i, 1);
                  contentPicker.splice(0, 0, el);
                  setContentPicker(contentPicker);
                  setValueForRender(!valueForRender);
                }}
                key={i}
                className={i === 0 ? "list-elem-active" : "list-elem"}
              >
                <span className="status-list__img-wrapper">
                  <img className="status-list__img" src={el.src} />
                </span>
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
            margin-bottom: 70px;
          }
          .picker-param__status {
            position: absolute;
            width: 380px;
            max-height: 50px;
            border-radius: 25px;
            box-shadow: 0 6px 32px -6px rgb(194, 197, 199);
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            z-index: ${zIndex ?? 10};
            transition: 0.3s ease;
          }
          .active__status-choose .picker-param__status {
            max-height: 300px;
          }
          .picker-param__status-main {
            display: flex;
            align-items: center;
            width: 100%;
            margin-top: 7.5px;
          }
          .param__general-title {
            display: block;
            letter-spacing: 0.84px;
            margin-bottom: 10px;
            font-size: 14px;
          }
          .list-elem-active {
            color: var(--primarycolor);
          }
          .status-list__img-wrapper {
            position: relative;
          }
          .list-elem-active .status-list__img-wrapper:after {
            content: "";
            position: absolute;
            width: 44px;
            display: block;
            height: 44px;
            object-fit: contain;
            border: solid 1.5px #e15151;
            border-radius: 50%;
            margin-top: -45px;
            margin-left: -6px;
          }
          .status-list__img {
            height: 35px;
            width: 35px;
          }
          .list-elem {
            cursor: pointer;
            height: 39px;
          }
          .list-elem .status-list__img-wrapper:hover .status-list__img {
            position: absolute;
            width: 65px;
            height: 65px;
            margin: -34px 0px 0px -15px;
          }
          .list-elem > .status-list__img-wrapper:hover ~ .param__status-list__title {
            margin-left: 50px;
          }
          .picker-param__status-img {
            margin: 0 15px 0 21px;
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
          }
          .active__status-choose .picker-param__status-list {
            overflow: auto;
          }
          .picker-param__status-list {
            list-style: none;
            width: 360px;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 20px;
            overflow: hidden;
            border-radius: 25px;
            margin-bottom: 18px;
          }
          .active__status-choose .picker-param__status-list::-webkit-scrollbar-button {
            background-repeat: no-repeat;
            width: 5px;
            height: 0px;
            display: none;
          }

          .active__status-choose .picker-param__status-list::-webkit-scrollbar-track {
            background-color: transparent;
          }

          .active__status-choose .picker-param__status-list::-webkit-scrollbar-thumb {
            -webkit-border-radius: 2, 5px;
            border-radius: 2.5px;
            background-color: #ced5e1;
          }

          .active__status-choose .picker-param__status-list::-webkit-scrollbar-thumb:hover {
            background-color: #ced5e1;
          }

          .active__status-choose .picker-param__status-list::-webkit-resizer {
            background-image: url("");
            background-repeat: no-repeat;
            width: 5px;
            height: 0px;
          }

          .active__status-choose .picker-param__status-list::-webkit-scrollbar {
            width: 5px;
          }
          .picker-param__status-list li {
            font-size: 16px;
            letter-spacing: 0.84px;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
          }
          .picker-param__status-list li:first-child {
            margin-top: 28px;
          }
          .param__status-list__title {
            margin-left: 15px;
          }
        `}
      </style>
    </>
  );
};
export default GoodDetailsWizardPicker;
