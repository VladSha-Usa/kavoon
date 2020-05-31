const GoodDetailsWizardTitle = ({ dataForTitle }) => {
  return (
    <>
      <div className="wizard__title">
        <span className="wizard__title-description">{dataForTitle.name}.</span>
        <span className="wizard__title-price">{dataForTitle.price} грн</span>
      </div>
      <style jsx>{`
        .wizard__title {
          font-family: Montserrat;
          font-size: 24px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 1.26px;
          color: var(--texticonscolor);
          display: flex;
          flex-direction: column;
          margin-bottom: 36px;
        }
        .wizard__title-description {
          margin-bottom: 15px;
        }
        .wizard__title-price {
          color: var(--primarycolor);
        }
      `}</style>
    </>
  );
};
export default GoodDetailsWizardTitle;
