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
            <img
              src="img/shop-icon.png"
              srcset="img/shop-icon@2x.png 2x,
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
          margin: 0 7px 0 -7px;
        }
        .${showedGoods}, .${addedGoods} {
          display: flex;
          align-items: center;
          margin: 0 30px 0 30px;
        }
        .${showedGoodsText} {
          margin-right: 5px;
        }
        .${showedGoodsAmountText} {
          margin-left: 5px;
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
          margin-top: -5px;
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
            box-shadow: 0px 8px 12px 0px rgba(9, 21, 85, 0.2);
            background-color: rgb(255, 255, 255);
            background-color: rgb(255, 255, 255);
            width: 55px;
            height: 55px;
            border-radius: 50%;
            margin: 0px;
            justify-content: center;
          }
          .${addedGoodsAmountWrapper} {
            margin-right: 0;
          }
          .${addedGoodsAmountNumber} {
            margin-top: -2px;
            margin-left: 0px;
          }
        }
      `}</style>
    </>
  );
};

export default ShopStatus;
