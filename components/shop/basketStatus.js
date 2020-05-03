const BasketStatus = () => {

  return (
    <>
      <div className="status-wrapper">
        <div className="breadcrumbs">
          <span className="list-goods">
            <a href="#">Список товарів</a>
          </span>
          <span className="good">
            <a href="#">Сумка-тубус на вилку 10 л.</a>
          </span>
          <span className="basket">
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
      
      `}</style>
    </>
  );
};

export default BasketStatus;
