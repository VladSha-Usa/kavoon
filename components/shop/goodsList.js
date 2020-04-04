const GoodsList = () => {
  const caseField = "case-field";
  const contentWrapper = "goods-list__content-wrapper";

  return (
    <>
      <div className={contentWrapper}>
        <div className={caseField}></div>
        <div className={caseField}></div>
        <div className={caseField}></div>
        <div className={caseField}></div>
        <div className={caseField}></div>
        <div className={caseField}></div>
        <div className={caseField}></div>
        <div className={caseField}></div>
      </div>
      <style jsx>{`
        .${caseField} {
          width: 275px;
          height: 380px;
          border-radius: 12px;
          box-shadow: 2px 2px 42px -2px rgba(12, 32, 60, 0.12);
          background-color: var(--white);
          display: inline-block;
          margin-bottom: 20px;
        }
        .${contentWrapper} {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        @media only screen and (max-width: 1023px) {
          .${contentWrapper} {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default GoodsList;
