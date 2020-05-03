const GoodDetailsStatus = () => {
  const statusWrapper = "status-wrapper";
  const choosenGood = "choosen-good";
  const choosenGoodBack = "choosen-good__back";
  const choosenGoodName = "choosen-good__name";
  const addedGoodsAmountWrapper = "status-added__amount-wrapper";
  const addedGoodsAmountImg = "status-added__amount-img";
  const addedGoodsText = "status-added__text";
  const addedGoodsAmountNumber = "status-added__amount-number";
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
          <div className={addedGoodsAmountWrapper}>
            <img src="/img/shop-icon.svg" className={addedGoodsAmountImg} />
            <span className={addedGoodsAmountNumber}>2</span>
          </div>
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

        .${addedGoodsAmountWrapper} {
          width: 50px;
          height: 50px;
          box-shadow: 0 8px 12px 0 rgba(9, 21, 85, 0.12);
          background-color: var(--white);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 6px;
        }
        .${addedGoodsAmountImg} {
          position: relative;
        }
        .${addedGoodsAmountNumber} {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          width: 20px;
          height: 20px;
          margin-top: -17px;
          margin-left: 20px;
          border-radius: 50%;
          background-color: var(--primarycolor);
          font-size: 14px;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.65px;
          text-align: center;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default GoodDetailsStatus;
