import ShopBasketAmount from "../../components/shop/shopBasketAmount";
const ShopStatus = () => {
  const statusWrapper = "status-wrapper";
  const showedGoods = "status-showed";
  const showedGoodsText = "status-showed__text";
  const showedGoodsAmount = "status-showed__amount";
  const showedGoodsAmountText = "status-showed__amount-text";
  const addedGoodsText = "status-added__text";
  const addedGoods = "status-added";

  const mainFontSize = 17;
  return (
    <>
      <div className={statusWrapper}>
        <div className={showedGoods}>
          <span className={showedGoodsText}>Показано:</span>
          <span className={showedGoodsAmount}>
            8<span className={showedGoodsAmountText}>товарів</span>
          </span>
        </div>
        <div className={addedGoods}>
          <span className={addedGoodsText}>Додані:</span>
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
          margin: 0 7px 0 -7px;
        }
        .${showedGoods} {
          display: flex;
          align-items: center;
          margin: 0 15px 0 30px;
        }
        .${addedGoods} {
          display: flex;
          align-items: center;
          margin-right: 38px;
        }
        .${showedGoodsText} {
          margin-right: 5px;
        }
        .${showedGoodsAmountText} {
          margin-left: 5px;
        }
        .${addedGoodsText} {
          margin-right: 8px;
        }
        @media only screen and (max-width: 1023px) {
          .${statusWrapper} {
            box-shadow: none;
            margin: 0 10px 0 -12px;
          }
          .${addedGoodsText} {
            display: none;
          }
          .${showedGoods} {
            margin: 0;
          }
          .${addedGoods} {
            margin: -3px 0 0 0;
          }
        }
      `}</style>
    </>
  );
};

export default ShopStatus;
