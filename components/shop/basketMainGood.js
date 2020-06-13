import useRx from "../../components/shop/useRx";
import BasketLogic from "../../data/shop/logic/basket";
const BasketMainGood = ({ basketMainGoodData }) => {
  const amount = useRx(BasketLogic.countForGood(basketMainGoodData));
  const activeMinus =
    amount <= 1
      ? "/img/remove-button-not-active.svg"
      : "/img/remove-button.svg";
  let fields = [
    {
      name: "Об’єм",
      field: "volume",
      unitOfMeasure: "л",
    },
    {
      name: "Основна тканина",
      field: "fabric",
    },
    {
      name: "Основний колір",
      field: "print",
    },
    {
      name: "Додатковий колір",
      field: "additionalColor",
    },
    {
      name: "Марка фурнітури",
      field: "brandOfAccessories",
    },
    {
      name: "Колір фурнітури",
      field: "colorOfAccessories",
    },
    {
      name: "Колір строп",
      field: "colorOfSlings",
    },
    {
      name: "Сума",
      field: "price",
      unitOfMeasure: "грн",
    },
  ];
  return (
    <>
      <div className="main-good-wrapper">
        <img
          className="main-good-img"
          src={basketMainGoodData.picture.src}
          srcSet={basketMainGoodData.picture.srcSet}
        />
        <div className="main-good-info">
          <div className="main-good-name">{basketMainGoodData.name}.</div>
          <div className="main-good-control-info">
            <div
              className="conrol-amount-wrapper"
              onClick={() =>
                amount > 1 ? BasketLogic.decrease(basketMainGoodData) : null
              }
            >
              <img src={activeMinus} />
            </div>
            <div className="amount">{amount}</div>
            <div className="conrol-amount-wrapper">
              <img
                src="/img/add-button.svg"
                onClick={() => BasketLogic.increase(basketMainGoodData)}
              />
            </div>
            <div className="main-amount">{amount}шт.</div>
          </div>
          <div className="main-good-description">
            {fields
              .filter((field) => basketMainGoodData[field.field])
              .map((field, index) => {
                return (
                  <div key={index} className="good-parametr">
                    {field.name}:{" "}
                    <span className="good-parametr-main">
                      {basketMainGoodData[field.field]} {field.unitOfMeasure}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .main-good-wrapper {
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.63;
          letter-spacing: 0.84px;
          color: var(--texticonscolor);
          display: flex;
          align-items: flex-start;
        }
        .main-good-img {
          object-fit: contain;
          width: 100px;
          height: 120px;
        }
        .main-good-name {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 1.05px;
          margin-bottom: 20px;
        }
        .main-good-control-info {
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 1.05px;
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        .conrol-amount-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .good-parametr {
          margin-bottom: 8px;
        }
        .good-parametr-main {
          font-weight: 600;
        }
        .main-good-info {
          margin-left: 30px;
        }
        .amount {
          width: 46px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .main-amount {
          font-size: 16px;
          letter-spacing: 0.75px;
          margin-left: 20px;
        }
      `}</style>
    </>
  );
};

export default BasketMainGood;
