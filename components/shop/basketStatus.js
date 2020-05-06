import ShopBasketAmount from "../../components/shop/shopBasketAmount";
const BasketStatus = () => {
  return (
    <>
      <div className="status-wrapper">
        <div className="breadcrumbs">
          <span className="pagination">
            <a href="#">Список товарів</a>
          </span>
          <span className="pagination">
            <a href="#">Сумка-тубус на вилку 10 л.</a>
          </span>
          <span className="pagination basket">
            <a href="#">Твій кошик</a>
          </span>
        </div>
        <div className="added-goods">
          <span className="added-goods-text">Додані товари:</span>
          <ShopBasketAmount />
        </div>
      </div>
      <style jsx>{`
        .status-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: Montserrat;
        }
        .breadcrumbs {
          font-size: 17px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
        }
        .breadcrumbs a {
          text-decoration: none;
          color: var(--texticonscolor);
        }
        .breadcrumbs .basket a {
          color: var(--primarycolor);
          font-weight: 600;
        }
        .breadcrumbs .pagination {
          position: relative;
          margin-right: 22px;
        }
        .breadcrumbs .pagination:nth-child(n + 2):before {
          content: "";
          position: absolute;
          width: 2px;
          height: 16px;
          border-radius: 1.5px;
          background-color: var(--primarycolor);
          top: calc(50% - 8px);
          margin-left: -12.5px;
        }
        .added-goods-text {
          margin-right: 16px;
        }
        .added-goods {
          display: flex;
          align-items: center;
          font-size: 17px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
          color: var(--texticonscolor);
          margin: -3px 6px 0 0;
        }
      `}</style>
    </>
  );
};

export default BasketStatus;
