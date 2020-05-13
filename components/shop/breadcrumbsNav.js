const BreadcrumbsNav = ({ breadcrumbsData }) => {
  return (
    <>
      <ul className="breadcrumbs-wrapper">
        {breadcrumbsData.map((obj, index) => (
          <li className="breadcrumbs-item" key={index}>
            <a href={obj.src}>{obj.name}</a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .breadcrumbs-wrapper {
          display: flex;
          align-items: center;
          list-style-type: none;
          padding-inline-start: 0px;
        }
        .breadcrumbs-wrapper .breadcrumbs-item a {
          text-decoration: none !important;
          font-family: Montserrat;
          font-size: 17px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.53;
          letter-spacing: 0.89px;
          color: var(--texticonscolor);
        }
        .breadcrumbs-wrapper .breadcrumbs-item {
          margin-right: 23px;
        }
        .breadcrumbs-wrapper .breadcrumbs-item:last-child a {
          color: var(--primarycolor);
          pointer-events: none;
          font-weight: 600;
        }
        .breadcrumbs-wrapper .breadcrumbs-item:nth-child(n + 2):before {
          content: "";
          position: absolute;
          width: 2px;
          height: 16px;
          border-radius: 1.5px;
          background-color: var(--primarycolor);
          margin-left: -12.5px;
          margin-top: 5px;
        }
      `}</style>
    </>
  );
};
export default BreadcrumbsNav;
