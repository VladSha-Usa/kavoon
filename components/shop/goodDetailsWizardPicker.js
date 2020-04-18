import React, { useState, useRef } from "react";
import useOutsideClick from "./useOutsideClick";

const GoodDetailsWizardPicker = ({ mainTheme, src, srcSet, nameOfChoose, zIndex }) => {
  const picker = "good-wizard__picker-wrapper";
  const parameters = "good-wizard__picker-param";
  const whatChoose = "good-wizard__picker-param__general-title";
  const statusOfChoose = "good-wizard__picker-param__status";
  const titleOfChoose = "good-wizard__picker-param__status-choose__title";
  const moreVariant = "good-wizard__picker-param__status-more";
  const imgOfTextile = "good-wizard__picker-param__status-img";
  const listOfVariants = "good-wizard__picker-param__status-list";
  const imgVariant = "good-wizard__picker-param__status-list__img";
  const titleVariant = "good-wizard__picker-param__status-list__title";
  const statusOfChooseMain = "good-wizard__picker-param__status-main";
  let [isOpened, setOpened] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, () => {
    setOpened(false);
  });
  return (
    <>
      <div className={parameters}>
        <span className={whatChoose}>{mainTheme}</span>
        <div
          className={
            statusOfChoose + (isOpened ? " active__status-choose" : "")
          }
          ref={ref}
        >
          <div className={statusOfChooseMain}>
            <img className={imgOfTextile} src={src} srcSet={srcSet} />
            <span className={titleOfChoose}>{nameOfChoose}</span>
            <button
              id={moreVariant}
              onClick={() => setOpened(!isOpened)}
            ></button>
          </div>
          <ul className={listOfVariants}>
            <li>
              <img className={imgVariant} src="/img/wizard-picker/field.svg" />
              <span className={titleVariant}>Червоний</span>
            </li>
            <li>
              <img
                className={imgVariant}
                src="/img/wizard-picker/printcolor1.svg"
              />
              <span className={titleVariant}>Прінт 1- Назва Прінта</span>
            </li>
            <li>
              <img
                className={imgVariant}
                src="/img/wizard-picker/printcolor2.svg"
              />
              <span className={titleVariant}>
                Прінт 2 -т Довга назва прінта
              </span>
            </li>
            <li>
              <img
                className={imgVariant}
                src="/img/wizard-picker/printcolor3.svg"
              />
              <span className={titleVariant}>Прінт 3</span>
            </li>
            <li>
              <img className={imgVariant} src="/img/wizard-picker/field5.svg" />
              <span className={titleVariant}>синій колір</span>
            </li>
            <li>
              <img className={imgVariant} src="/img/wizard-picker/field2.svg" />
              <span className={titleVariant}>Червоний</span>
            </li>
            <li>
              <img
                className={imgVariant}
                src="/img/wizard-picker/printcolor3.svg"
              />
              <span className={titleVariant}>Червоний</span>
            </li>
            <li>
              <img
                className={imgVariant}
                src="/img/wizard-picker/printcolor3.svg"
              />
              <span className={titleVariant}>Червоний</span>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .${parameters} {
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
          .${statusOfChoose} {
            position: absolute;
            width: 380px;
            height: 50px;
            border-radius: 25px;
            box-shadow: 0 6px 32px -6px rgb(194, 197, 199);
            background-color: white;
            display: flex;
            align-items: flex-start;
            transition: 0.3s ease;
            z-index: ${ zIndex ?? 10 };
          }
          .active__status-choose {
            height: 350px;
          }
          .${picker} {
          }
          .${statusOfChooseMain} {
            display: flex;
            align-items: center;
            width: -webkit-fill-available;
            height: 50px;
          }
          .${whatChoose} {
            display: block;
            letter-spacing: 0.84px;
            margin-bottom: 10px;
            font-size: 14px;
          }
          .${imgOfTextile} {
            margin: 0 15px 0 20px;
          }
          .${titleOfChoose} {
            margin-right: auto;
          }
          #${moreVariant} {
            padding: 0;
            border-width: 0;
            height: 20px;
            width: 20px;
            cursor: pointer;
            background: transparent;
            outline: none;
            margin-right: 18px;
          }
          #${moreVariant}:before {
            content: "";
            position: absolute;
            height: 9px;
            width: 16px;
            background-image: url("/img/wizard-picker/more-icon.svg");
            margin-left: 0px;
            margin: -4.5px 0 0 -8px;
            transition: 0.5s ease;
          }
          .active__status-choose #${moreVariant}:before {
            transform: rotate(180deg);
            transition: 0.5s ease;
          }
          .active__status-choose .${listOfVariants} {
            height: 270px;
          }
          .${listOfVariants} {
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
          .${listOfVariants}::-webkit-scrollbar-button {
            background-image: url("");
            background-repeat: no-repeat;
            width: 5px;
            height: 0px;
            display: none;
          }

          .${listOfVariants}::-webkit-scrollbar-track {
            background-color: tarnsparent;
          }

          .${listOfVariants}::-webkit-scrollbar-thumb {
            -webkit-border-radius: 2, 5px;
            border-radius: 2.5px;
            background-color: #ced5e1;
          }

          .${listOfVariants}::-webkit-scrollbar-thumb:hover {
            background-color: #ced5e1;
          }

          .${listOfVariants}::-webkit-resizer {
            background-image: url("");
            background-repeat: no-repeat;
            width: 5px;
            height: 0px;
          }

          .${listOfVariants}::-webkit-scrollbar {
            width: 5px;
          }
          .${listOfVariants} li {
            font-size: 16px;
            letter-spacing: 0.84px;
            margin-bottom: 19px;
            display: flex;
            align-items: center;
          }
          .${listOfVariants} li:first-child {
            margin-top: 14px;
          }
          .${titleVariant} {
            margin-left: 10px;
          }
        `}
      </style>
    </>
  );
};
export default GoodDetailsWizardPicker;
