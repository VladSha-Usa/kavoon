import BasketMainGood from "./basketMainGood";
import GoodDetailsWizardAddOther from "./goodDetailsWizardAddOther";
import BasketLogic from "../../data/shop/logic/basket";
import useRx from "../../components/shop/useRx";
import HelperFun from "../common/helper";

const BasketInfoChooseGoods = () => {
  const goods = useRx(BasketLogic.goods);
  const countValue = useRx(BasketLogic.count);

  return (
    <>
      <div className="info-choose-goods-wrapper">
        <div className="info-choose-status">
          Твій кошик{" "}
          <span className="info-choose-status-amount">
            ( {countValue} товар{HelperFun.endingOfWord(countValue)} )
          </span>
        </div>
        <div className="info-choose-goods">
          {goods.map((good, index) => (
            <div className="choose-good-wrapper" key={index}>
              <BasketMainGood basketMainGoodData={good} />
              <img
                src="/img/good-to-complect-img/cancel-icon.svg"
                onClick={() => BasketLogic.deleteGood(good.id)}
              />
            </div>
          ))}
          {goods
            .filter((good) => good.additionGoodData)
            .map((good, index) => (
              <div className="choose-good-wrapper" key={index}>
                <GoodDetailsWizardAddOther
                  additionGoodData={good.additionGoodData}
                  basketStyleSettings={true}
                />
                <img src="/img/good-to-complect-img/cancel-icon.svg" />
              </div>
            ))}
          <div className="info-choose-sum">
            <span className="info-choose-sum-intro">Разом:</span>
            <span className="info-choose-sum-num">
              {goods.reduce(
                (sum, good) =>
                  good.additionGoodData
                    ? sum + good.price + good.additionGoodData.price
                    : sum + good.price,
                0
              )}{" "}
              грн
            </span>
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
          margin-right: 34px;
        }
        .info-choose-status {
          font-size: 24px;
          letter-spacing: 1.26px;
          margin-bottom: 18px;
        }
        .info-choose-status-amount {
          color: #b9c6dc;
        }
        .info-choose-goods {
          width: 646px;
          border-radius: 10px;
          border: solid 1.5px #b9c6dc;
          padding: 20px 18px 23px 18px;
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
        .choose-good-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-bottom:1.5px solid #b9c6dc;
          padding-bottom: 12px;
          margin-bottom: 20px;
        }
        .choose-good-wrapper img{
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default BasketInfoChooseGoods;
