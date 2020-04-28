const GoodDetailsSpecification = ({ object }) => {
  let fields = [
    {
      name: "Об’єм",
      field: "volume",
    },
    {
      name: "Висота",
      field: "height",
    },
    {
      name: "Матеріали",
      field: "materials",
    },
    {
      name: "Опис",
      field: "description",
    },
    {
      name: "Додатково",
      field: "inAddition",
    },
  ];
  const properties = fields
    .map((field, i) => {
      return (
        object.specification[field.field] && (
          <div key={i} className="specification-parametr" style={{}}>
            {field.name}:{" "}
            <span className="specification-parametr-main">
              {object.specification[field.field]}
            </span>
          </div>
        )
      );
    })
    .filter((field) => field !== undefined);
  properties[properties.length - 3].props.style.marginBottom = "28px";
  for (let i = properties.length - 2; i < properties.length; i++) {
    properties[i].props.style.display = "flex";
    properties[i].props.style.flexDirection = "column";
  }

  return (
    <>
      <div className="specification-wrapper">
        <div className="specification-title">Характеристика даного товару:</div>
        <div className="specification">
          <div className=" characteristic">
            {properties.slice(0, properties.length - 1)}
          </div>
          <div className="addition">
            {properties.slice(properties.length - 1, properties.length)}
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
        .addition {
          margin-left: 186px;
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
        `}</style>
    </>
  );
};

export default GoodDetailsSpecification;
