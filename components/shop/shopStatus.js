const ShopStatus = () => {
  const statusWrapper = "status-wrapper";
  const showedGoods = "status-showed";
  const showedGoodsText = "status-showed__text";
  const showedGoodsAmount = "status-showed__amount";
  const showedGoodsAmountText = "status-showed__amount-text";
  const addedGoodsAmountWrapper = "status-added__amount-wrapper";
  const addedGoodsAmountImg = "status-added__amount-img";
  const addedGoodsText = "status-added__text";
  const addedGoodsAmountNumber = "status-added__amount-number";
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
          <div className={addedGoodsAmountWrapper}>
            <img src="img/shop-icon.svg" className={addedGoodsAmountImg} />
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
          margin: 0 7px 0 -7px;
        }
        .${showedGoods}, .${addedGoods} {
          display: flex;
          align-items: center;
          margin: 0 15px 0 30px;
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

        .${addedGoodsAmountWrapper} {
          margin-right: 23px;
          box-shadow: 0 8px 12px 0 rgba(9, 21, 85, 0.12);
          background-color: var(--white);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .${addedGoodsAmountImg} {
          position: relative;
        }
        .${addedGoodsAmountNumber} {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20px;
          height: 20px;
          margin-top: -13px;
          margin-left: 21px;
          border-radius: 50%;
          background-color: var(--primarycolor);
          font-size: 14px;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.65px;
          color: #fff;
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
          .${addedGoodsAmountWrapper} {
            margin-right: 0;
          }
          .${addedGoods} {
            margin: 0;
          }
        }
      `}</style>
    </>
  );
};

export default ShopStatus;
