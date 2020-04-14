const GoodDetailsWizardTitle = () => {
  const title = "good-wizard__title";
  const nameCapacity = "good-wizard__title-description";
  const price = "good-wizard__title-price";
  return (
    <>
      <div className={title}>
        <span className={nameCapacity}>Сумка-тубус на вилку 10л.</span>
        <span className={price}>1 300 грн</span>
      </div>
      <style jsx>{`
        .${title} {
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
        }
        .${nameCapacity} {
          margin-bottom: 15px;
        }
        .${price} {
          color: var(--primarycolor);
        }
      `}</style>
    </>
  );
};
export default GoodDetailsWizardTitle;
