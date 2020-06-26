import ShopBasketAmount from './shopBasketAmount';
import BreadcrumbsNav from './breadcrumbsNav';

const BasketStatus = ({ vm }) => (
  <>
    <div className="status-wrapper">
      <BreadcrumbsNav breadcrumbsData={breadcrumbs} />
      <div className="added-goods">
        <span className="added-goods-text">Додані товари:</span>
        <ShopBasketAmount />
      </div>
    </div>
    <style jsx>
      {`
        .status-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: Montserrat;
        }
        .added-goods-text {
          margin-right: 16px;
        }
        .added-goods {
          display: flex;
          align-items: center;
          font-size: 17px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
          color: var(--texticonscolor);
          margin: -3px 6px 0 0;
        }
      `}
    </style>
  </>
);

export default BasketStatus;
