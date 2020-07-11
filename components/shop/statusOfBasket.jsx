import React, { useState, useEffect } from 'react';
import useRx from './useRx';
import Popup from 'reactjs-popup';
import RespScreenWidth from '../common/mediaConst';

const StatusOfBasket = ({ vm }) => {
  const statusOfAdding = useRx(vm.statusOfAdding);
  const statusOfEmptyBasket = useRx(vm.statusOfEmptyBasket);
  const count = useRx(vm.count);
  const [emptyBasket, setEmptyBasket] = useState(false);
  useEffect(() => {
    statusOfEmptyBasket && count === 0
      ? setEmptyBasket(true)
      : setEmptyBasket(false);
  }, [statusOfEmptyBasket, count]);
  return (
    <>
      {emptyBasket ? (
        <div className="status-empty-wrapper">
          Ваш кошик порожній{'\u00A0\u00A0\u00A0'}😩
        </div>
      ) : statusOfAdding ? (
        <>
          <div className="status-adding-wrapper">
            <Popup open={statusOfAdding} modal>
              <span className="smile">😊</span>
              <span className="good-name">{vm.name}</span>
              <span className="good-status">успішно додано до кошику!</span>
            </Popup>
          </div>
        </>
      ) : null}
      <style jsx>
        {`
          .status-empty-wrapper {
            position: absolute;
            width: auto;
            box-sizing: border-box;
            border-radius: 12px;
            box-shadow: 4px 8px 48px -1px rgba(8, 32, 79, 0.19);
            background-color: var(--white);
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5;
            letter-spacing: 0.84px;
            color: var(--texticonscolor);
            color: var(--texticonscolor);
            left: -95px;
            top: 81px;
            padding: 28px 55px;
            display: block;
            white-space: nowrap;
          }
          .status-empty-wrapper:before {
            position: absolute;
            content: '';
            width: 0;
            height: 0;
            top: -13px;
            right: 50px;
            border-style: solid;
            border-width: 0 10px 20px 10px;
            border-color: transparent transparent #fff transparent;
            z-index: 30;
          }
          .status-adding-wrapper {
            font-size: 16px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: 0.84px;
          }
          .status-adding-wrapper .good-status {
            font-weight: 500;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
            .status-empty-wrapper {
              left: -125px;
            }
            .status-empty-wrapper:before {
              right: 20px;
            }
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .status-empty-wrapper {
              left: 0;
              top: 70px;
              z-index: 20;
              padding: 28px 49.5px;
              width: auto;
            }
            .status-empty-wrapper:before {
              right: 15px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .status-adding-wrapper .popup-content {
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            align-items: center;
            width: 455px !important;
            border-radius: 10px;
            padding: 25px 85px !important;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .status-adding-wrapper {
              line-height: 1.5 !important;
            }
            .status-adding-wrapper .popup-content {
              width: 335px !important;
              padding: 20px 28px !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default StatusOfBasket;
