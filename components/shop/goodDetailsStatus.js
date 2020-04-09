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
            Назад
          </a>
          <span className={choosenGoodName}>Сумка-тубус на вилку 10л</span>
        </div>
        <div className={addedGoods}>
          <span className={addedGoodsText}>Додані:</span>
          <div className={addedGoodsAmountWrapper}>
            <img
              src="/img/shop-icon.png"
              srcset="/img/shop-icon@2x.png 2x,
             img/shop-icon@3x.png 3x"
              className={addedGoodsAmountImg}
            />
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
          border-radius: 30px;
          box-shadow: 1px 12px 32px -2px rgba(12, 32, 60, 0.12);
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
          background-color: var(--white);
        }
        .${choosenGood}, .${addedGoods} {
          display: flex;
          align-items: center;
          margin: 0 30px 0 30px;
        }
        .${choosenGoodBack} {
          letter-spacing: 0.79px;
          color: #1831aa;
          text-decoration: none;
          padding-left: 20px;
          margin: 0 15px 0 -3px;
        }
        .${choosenGoodBack}:before {
          content: "";
          position: absolute;
          background-image: url("/img/arrow-left-back-good-details.svg");
          object-fit: contain;
          height: 14px;
          width: 8px;
          margin: 6px 0 0 -18px;
        }
        .${choosenGoodName} {
          color: var(--texticonscolor);
        }
        .${addedGoodsText} {
          margin-right: 17px;
        }

        .${addedGoodsAmountWrapper} {
          margin-right: 23px;
        }
        .${addedGoodsAmountImg} {
          position: relative;
          margin-top: 3px;
        }
        .${addedGoodsAmountNumber} {
          position: absolute;
          width: 20px;
          height: 20px;
          margin-top: -3px;
          margin-left: 2px;
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
