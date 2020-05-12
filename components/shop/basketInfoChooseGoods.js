import BasketMainGood from "./BasketMainGood";
const BasketInfoChooseGoods = () => {
  return (
    <>
      <div className="info-choose-goods-wrapper">
        <div className="info-choose-status">
          Твій кошик{" "}
          <span className="info-choose-status-amount">( 1 товар )</span>
        </div>
        <div className="info-choose-goods">
          <div className="choose-good-wrapper">
            <BasketMainGood />
            <img src="" />
          </div>
          <div className="info-choose-sum">
            <span className="info-choose-sum-intro">Разом:</span>
            <span className="info-choose-sum-num">2100 грн</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .info-choose-goods-wrapper {
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          color: var(--texticonscolor);
        }
        .info-choose-status {
          font-size: 24px;
          letter-spacing: 1.26px;
        }
        .info-choose-status-amount {
          color: #b9c6dc;
        }
        .info-choose-goods {
          width: 685px;
          border-radius: 10px;
          border: solid 1.5px #b9c6dc;
          padding: 20px 20px 23px 20px;
        }
        .info-choose-sum {
          display: flex;
          justify-content: space-between;1
        }
        .info-choose-sum-intro {
          font-size: 20px;
          line-height: 1.3;
          letter-spacing: 1.05px;
        }
        .info-choose-sum-num {
          font-size: 20px;
          line-height: 1.4;
          letter-spacing: 0.94px;
          color: var(--primarycolor);
        }
      `}</style>
    </>
  );
};

export default BasketInfoChooseGoods;
