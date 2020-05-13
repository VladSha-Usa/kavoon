import ShopBasketAmount from "../../components/shop/shopBasketAmount";
import BreadcrumbsNav from "../../components/shop/breadcrumbsNav";
const GoodDetailsStatus = ({ breadcrumbs }) => {
  const statusWrapper = "status-wrapper";
  const addedGoodsText = "status-added__text";
  const addedGoods = "status-added";

  const mainFontSize = 17;
  return (
    <>
      <div className={statusWrapper}>
        <BreadcrumbsNav breadcrumbsData={breadcrumbs} />
        <div className={addedGoods}>
          <span className={addedGoodsText}>Додані товари:</span>
          <ShopBasketAmount />
        </div>
      </div>
      <style jsx>{`
        .${statusWrapper} {
          display: flex;
          justify-content: space-between;
          font-size: ${mainFontSize}px;
          font-family: Montserrat;
          font-weight: 600;
          color: #040f2a;
          height: 60px;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
        }
        .${addedGoods} {
          display: flex;
          align-items: center;
        }
        .${addedGoods} {
          margin-top: -6px;
          margin-right: 6px;
        }
        .${addedGoodsText} {
          margin-right: 17px;
        }
      `}</style>
    </>
  );
};

export default GoodDetailsStatus;
