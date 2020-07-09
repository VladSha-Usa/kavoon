import React from 'react';
import GoodListItem from './goodListItem';
import RespScreenWidth from '../common/mediaConst';

const GoodsList = ({ vm }) => (
  <>
    <div className="goods-list__content-wrapper">
      {vm.goodVMs.map((goodListItemVM, i) => (
        <GoodListItem vm={goodListItemVM.good} key={i} />
      ))}
    </div>
    <style jsx>
      {`
        .goods-list__content-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
          .goods-list__content-wrapper {
            padding: 0 15px;
          }
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .goods-list__content-wrapper {
            justify-content: center;
            padding: 0;
          }
        }
      `}
    </style>
  </>
);

export default GoodsList;
