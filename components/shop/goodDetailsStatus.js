import ShopBasketAmount from "../../components/shop/shopBasketAmount";

const GoodDetailsStatus = () => {
  const statusWrapper = "status-wrapper";
  const choosenGood = "choosen-good";
  const choosenGoodBack = "choosen-good__back";
  const choosenGoodName = "choosen-good__name";
  const addedGoodsText = "status-added__text";
  const addedGoods = "status-added";

  const mainFontSize = 17;
  return (
    <>
      <div className={statusWrapper}>
        <div className={choosenGood}>
          <a href="#" className={choosenGoodBack}>
            Список товарів
          </a>
          <span className={choosenGoodName}>Сумка-тубус на вилку 10л</span>
        </div>
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
        .${choosenGood}, .${addedGoods} {
          display: flex;
          align-items: center;
        }
        .${addedGoods} {
          margin-top: -6px;
          margin-right: 6px;
        }
        .${choosenGoodBack} {
          letter-spacing: 0.79px;
          text-decoration: none;
          color: var(--texticonscolor);
          margin-right: 21px;
        }
        .${choosenGoodBack}:after {
          content: "";
          position: absolute;
          width: 2px;
          height: 16px;
          border-radius: 1.5px;
          background-color: var(--primarycolor);
          margin: 6px 0 0 10px;
        }
        .${choosenGoodName} {
          color: #1831aa;
        }
        .${addedGoodsText} {
          margin-right: 17px;
        }
      `}</style>
    </>
  );
};

export default GoodDetailsStatus;
