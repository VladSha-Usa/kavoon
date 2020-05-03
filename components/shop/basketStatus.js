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
          <div className="added-goods-amount">
            <img src="/img/shop-icon.svg" className="added-goods-amount-img" />
            <span className="added-goods-amount-num"></span>
          </div>
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
        }
        .added-goods-amount {
          width: 50px;
          height: 50px;
          box-shadow: 0 8px 12px 0 rgba(9, 21, 85, 0.12);
          background-color: var(--white);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 15px;
        }
      `}</style>
    </>
  );
};

export default BasketStatus;
