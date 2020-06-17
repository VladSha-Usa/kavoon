import BasketLogic from "../../data/shop/logic/basket";
import useRx from "../../components/shop/useRx";
const StatusOfAddingGoodToBasket = ({ addedGoodName }) => {
  const statusOfAdding = useRx(BasketLogic.statusOfAdding);
  const goods = useRx(BasketLogic.goods);
  return (
    <>
      <div className="status-adding-wrapper">
        {/* {if(goods.length === 0){(
          <>Ваш кошик порожній&nbsp;&nbsp;&nbsp;😊</>
        )}else{ (
          <>
            <span className="status-adding-good-name">{addedGoodName}</span>{" "}
            успішно додано до кошику!&nbsp;&nbsp;&nbsp;😊
          </>
)}} */}
      </div>
      <style jsx>{`
        .status-adding-wrapper {
          position: absolute;
          width: 345px;
          box-sizing: border-box;
          border-radius: 12px;
          box-shadow: 4px 8px 48px -1px rgba(8, 32, 79, 0.19);
          background-color: var(--white);
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: 0.84px;
          color: var(--texticonscolor);
          color: var(--texticonscolor);
          left: -95px;
          top: 81px;
          padding: 18px 27px 13px 32px;
          display: ${statusOfAdding || goods.length === 0 ? "block" : "none"};
          white-space: pre-wrap;
        }
        .status-adding-wrapper:before {
          position: absolute;
          content: "";
          width: 0;
          height: 0;
          top: -13px;
          right: 50px;
          border-style: solid;
          border-width: 0 10px 20px 10px;
          border-color: transparent transparent #fff transparent;
          z-index: 30;
        }
        .status-adding-wrapper img {
          width: 22px;
          height: 25px;
        }
        .status-adding-good-name {
          color: var(--primarycolor);
        }
      `}</style>
    </>
  );
};

export default StatusOfAddingGoodToBasket;
