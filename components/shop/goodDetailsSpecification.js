import RespScreenWidth from "../common/mediaConst";

const GoodDetailsSpecification = ({ specification }) => {
  let fields = [
    {
      name: "Об’єм",
      field: "volume",
      column: false,
      left: true,
      unitOfMeasure: "л",
    },
    {
      name: "Висота",
      field: "height",
      column: false,
      left: true,
      unitOfMeasure: "см",
    },
    {
      name: "Матеріали",
      field: "materials",
      column: false,
      left: true,
    },
    {
      name: "Опис",
      field: "description",
      column: true,
      left: true,
      margTop: true,
    },
    {
      name: "Додатково",
      field: "inAddition",
      column: true,
      left: false,
    },
  ];
  const specificationLeft = fields
    .filter((field) => field.left)
    .filter((field) => specification[field.field])
    .map((field, index) => {
      return (
        <div
          key={index}
          className="specification-parametr"
          style={
            field.column || field.margTop
              ? { display: "flex", flexDirection: "column", marginTop: "28px" }
              : {}
          }
        >
          {field.name}:{" "}
          <span className="specification-parametr-main">
            {specification[field.field]}
            {field.unitOfMeasure}
          </span>
        </div>
      );
    });
  const specificationRight = fields
    .filter((field) => !field.left)
    .filter((field) => specification[field.field])
    .map((field, index) => {
      return (
        <div
          key={index}
          className="specification-parametr"
          style={
            field.column ? { display: "flex", flexDirection: "column" } : {}
          }
        >
          {field.name}:{" "}
          <span className="specification-parametr-main">
            {specification[field.field]}
          </span>
        </div>
      );
    });

  return (
    <>
      <div className="specification-wrapper">
        <div className="specification-title">Характеристика товару:</div>
        <div className="specification-main-content">
          <div className="specification-left">{specificationLeft}</div>
          <div className="specification-right">{specificationRight}</div>
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
        .specification-main-content {
          display: flex;
        }
        .specification-title {
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 37px;
        }
        .specification-left {
          width: 484px;
        }
        .specification-right {
          margin-left: 142px;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .specification-wrapper {
            margin-left: 0;
          }
          .specification-main-content {
            display: block;
          }
          .specification-right {
            margin-left: 0;
            margin-top: 24px;
          }
          .specification-left {
            width: auto;
          }
          .specification-title {
            margin-bottom: 17px;
          }
        }
      `}</style>
      <style>{`
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
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px){
          
        }
        `}</style>
    </>
  );
};

export default GoodDetailsSpecification;
