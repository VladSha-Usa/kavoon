import ShopBasketAmount from './shopBasketAmount';
import BreadcrumbsNav from './breadcrumbsNav';
import StatusOfAddingGoodToBasket from './statusOfAddingGoodToBasket';
import RespScreenWidth from '../common/mediaConst';

import BreadcrumbsNavVM from '../../data/shop/viewModels/shop/BreadcrumbsNavVM';
import ShopBasketAmountVM from '../../data/shop/viewModels/shop/ShopBasketAmountVM';

const GoodDetailsStatus = ({ statusData }) => (
  <>
    <div className="status-wrapper">
      <BreadcrumbsNav vm={BreadcrumbsNavVM()} />
      <div className="status-added">
        <span className="status-added__text">Додані товари:</span>
        <ShopBasketAmount vm={ShopBasketAmountVM()} />
        <StatusOfAddingGoodToBasket addedGoodName={statusData.name} />
      </div>
    </div>
    <style jsx>
      {`
        .status-wrapper {
          display: flex;
          justify-content: space-between;
          font-size: 17px;
          font-family: Montserrat;
          font-weight: 600;
          color: #040f2a;
          height: 60px;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
          height: auto;
        }
        .status-added {
          display: flex;
          align-items: center;
          position: relative;
        }
        .status-added {
          margin-top: -6px;
        }
        .status-added__text {
          margin-right: 17px;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .status-wrapper {
            flex-direction: column;
          }
          .status-added {
            justify-content: space-between;
          }
          .status-added__text {
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 0.84px;
            margin-right: 0px;
          }
        }
      `}
    </style>
  </>
);

export default GoodDetailsStatus;
