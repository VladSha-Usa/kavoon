const GoodDetailsWizardAdd = ({}) => {
  return (
    <>
      <div className="addition-wrapper">
        <span className="addition-title">Додати в комплект:</span>
        <div className="addition-good-wrapper">
          <img src="" />
          <div className="good-description-amount">
            <span className="good-title"></span>
            <span className="good-price"></span>
            <div className="good-control-amount-wrapper">
              <div className="control-amount-btn"></div>
              <div className="good-amount"></div>
              <div className="control-amount-btn"></div>
              <div className="good-choose-result">Додано в комплект</div>
            </div>
            <div className="btn-submit-wrapper"><button type="submit">Зробити замовлення</button></div>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default GoodDetailsWizardAdd;
