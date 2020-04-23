const GoodDetailsSpecification = ({
  capacity,
  height,
  materials,
  description,
  addContent,
}) => {
  const availabilOfHeight = typeof(height) === "undefined" ? "none" : "block";

  return (
    <>
      <div className="specification-wrapper">
        <div className="specification-title">Характеристика даного товару:</div>
        <div className="specification">
          <div className=" characteristic">
            <div className="specification-parametr">
              Об’єм:{" "}
              <span className="specification-parametr-main">{capacity}</span>
            </div>
            <div
              className="specification-parametr"
              style={{ display: `${availabilOfHeight}` }}
            >
              Висота:{" "}
              <span className="specification-parametr-main">{height}</span>
            </div>
            <div className="specification-parametr">
              Матеріали:{" "}
              <span className="specification-parametr-main">{materials}</span>
            </div>
            <div
              className="specification-parametr"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "28px",
              }}
            >
              Опис:
              <span
                className="specification-parametr-main"
                style={{
                  marginTop: "4px",
                }}
              >
                {description}
              </span>
            </div>
          </div>
          <div className="addition">
            <div
              className="specification-parametr"
              style={{ display: "flex", flexDirection: "column" }}
            >
              Додатково:
              <span
                className="specification-parametr-main"
                style={{ marginTop: "8px" }}
              >
                {addContent}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .specification-wrapper {
          font-family: Montserrat;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          color: var(--texticonscolor);
          white-space: pre-wrap;
          margin-left: 46px;
        }
        .specification {
          display: flex;
        }
        .specification-title {
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 37px;
        }
        .specification-parametr {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.6px;
          margin-bottom: 10px;
          line-height: 26px;
        }
        .specification-parametr-main {
          font-weight: 500;
        }
        .addition {
          margin-left: 186px;
        }
      `}</style>
    </>
  );
};

export default GoodDetailsSpecification;
