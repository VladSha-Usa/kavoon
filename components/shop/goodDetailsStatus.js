import ShopBasketAmount from "../../components/shop/shopBasketAmount";
import BreadcrumbsNav from "../../components/shop/breadcrumbsNav";
import StatusOfAddingGoodToBasket from "./statusOfAddingGoodToBasket";
const GoodDetailsStatus = ({ statusData }) => {
  return (
    <>
      <div className="status-wrapper">
        <BreadcrumbsNav breadcrumbsData={statusData.breadcrumbs} />
        <div className="status-added">
          <span className="status-added__text">Додані товари:</span>
          <ShopBasketAmount />
          <StatusOfAddingGoodToBasket addedGoodName={statusData.name} />
        </div>
      </div>
      <style jsx>{`
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
        }
        .status-added {
          display: flex;
          align-items: center;
          position: relative;
        }
        .status-added {
          margin-top: -6px;
          margin-right: 6px;
        }
        .status-added__text {
          margin-right: 17px;
        }
      `}</style>
    </>
  );
};

export default GoodDetailsStatus;
