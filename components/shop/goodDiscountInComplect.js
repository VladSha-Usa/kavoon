const GoodDiscountInComplect = ({ content }) => {
  return (
    <>
      <div className="good-wrapper">
        <img src={content.src} srcSet={content.srcSet} className="good-img" />
        <div className="good-main-content">
          <span className="title">{content.name}</span>
          <span className="volume">Об'єм: {content.volume}л</span>
          <span className="volume">{content.price} грн</span>
        </div>
      </div>
      <style jsx>{`
        .good-wrapper {
          display: flex;
          margin-bottom: 18px;
        }
        .good-img {
          width: 120px;
          height: 120px;
        }
        .good-main-content {
          display: flex;
          flex-direction: column;
          margin-left: 19px;
          padding-top: 14px;
          letter-spacing: 0.34px;
        }
        .good-main-content span {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
};
export default GoodDiscountInComplect;
