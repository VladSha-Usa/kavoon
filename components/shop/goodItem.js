const GoodItem = ({ src, srcSet, contentTitle, capacity, price }) => {
  const imgWrapper = "item__img-wrapper";
  const title = "item__title";
  const description = "item__description";
  const descriptionCapacity = "item__description-capacity";
  const descriptionPrice = "item__description-price";
  const descriptionPriceCurrency = "item__description-price__currency";
  const descriptionCapacityLitres = "item__description-capacity__litres";
  const descriptionCapacityIntro = "item__description-capacity__intro";

  return (
    <>
      <div className={imgWrapper}>
        <img src={src} srcSet={srcSet} />
      </div>
      <div className={title}>{contentTitle}</div>
      <div className={description}>
        <div className={descriptionCapacity}>
          <span className={descriptionCapacityIntro}>Об'єм:</span>
          {capacity}
          <span className={descriptionCapacityLitres}>л</span>
        </div>
        <div className={descriptionPrice}>
          {price}
          <span className={descriptionPriceCurrency}>грн</span>
        </div>
      </div>
      <style jsx>{`
        .${imgWrapper} {
          margin-top: 10px;
          margin-bottom: 15px;
          text-align: center;
        }
        * {
          font-family: Montserrat;
          font-size: 17px;
          font-stretch: normal;
          font-style: normal;
        }
        .${title} {
          font-weight: 600;
          line-height: 1.53;
          letter-spacing: 0.89px;
          text-align: center;
          color: var(--texticonscolor);
          margin: 0 28px 15px 28px;
        }
        .${description} {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: flex-end;
          position: absolute;
          bottom: 25px;
        }
        .${descriptionCapacity} {
          font-weight: 600;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
          color: var(--texticonscolor);
          margin-left: 25px;
        }
        .${descriptionCapacityIntro} {
          font-weight: 500;
          margin-right: 5px;
        }
        .${descriptionPrice} {
          font-weight: 600;
          line-height: 1.65;
          letter-spacing: 0.79px;
          text-align: center;
          color: var(--primarycolor);
          margin-right: 25px;
        }
        .${descriptionPriceCurrency} {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
};

export default GoodItem;
