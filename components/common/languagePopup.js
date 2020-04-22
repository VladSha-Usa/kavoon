const LanguagePopup = () => {
  return (
    <>
      <div className="lang-wrapper">
        <div className="choosen-lang">
          <img
            src="/img/country-flag-ua.png"
            srcSet="/img/country-flag-ua@2x.png 2x, img/country-flag-ua@3x.png 3x"
          />
          Українська
        </div>
        <ul className="available__list-lang">
          <li>
            <div className="available-lang">
              <img
                src="/img/country-flag-ua.png"
                srcSet="/img/country-flag-ua@2x.png 2x, img/country-flag-ua@3x.png 3x"
              />
              Українська
            </div>
          </li>
          <li>
            <div className="available-lang">
              <img
                src="/img/country-flag-en.png"
                srcSet="/img/country-flag-en@2x.png 2x, img/country-flag-en@3x.png 3x"
              />
              English
            </div>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .lang-wrapper {
          width: 170px;
          height: 45px;
          border-radius: 22.5px;

        }
        .lang-wrapper:hover {
          background-color: #ecefff;
        }

        .choosen-lang,
        .available__list-lang .available-lang {
          display: flex;
          align-items: center;
          justify-content: left;
          margin-left: 17px;
          height: 45px;
          cursor: pointer;
          font-family: Montserrat;
          font-size: 17px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.79px;
          color: #061434;
        }
        .choosen-lang img,
        .available__list-lang .available-lang img {
          padding-right: 10px;
        }
        .choosen-lang,
        .available__list-lang .available-lang:focus {
          outline: none;
        }

        .available__list-lang li:first-child {
          padding-top: 14px;
        }

        .choosen-lang {
          padding-bottom: 29px;
          padding-top: 12px;
          height: 0;
          min-height: 20px;
        }

        .lang-wrapper:hover > .choosen-lang {
          color: var(--primarycolor);
        }

        .available__list-lang .available-lang:hover {
          color: var(--primarycolor);
        }

        .lang-wrapper:hover > .available__list-lang {
          display: block;
        }

        .available__list-lang {
          display: none;
          flex-direction: column;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 0;
          position: absolute;
          list-style: none;
          width: 170px;
          height: 125px;
          border-radius: 10px;
          box-shadow: 4px 8px 48px -1px rgba(8, 32, 79, 0.19);
          background-color: #fff;
        }

        .available__list-lang:after {
          content: "";
          position: absolute;
          top: -19px;
          left: 19px;
          border: 7px solid transparent;
          border-bottom: 15px solid #fff;
        }
      `}</style>
    </>
  );
};

export default LanguagePopup;
