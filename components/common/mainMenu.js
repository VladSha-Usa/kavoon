import { useEffect } from "react";
import ImageLink from "../common/imageLink";

const MainMenu = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return function cleanup() {
      document.body.classList.remove("no-scroll");
    };
  });
  return (
    <>
      <div
        style={{
          zIndex: 2000,
          position: "fixed",
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          background: "#ffffff"
        }}
        className="burger__menu-wrapper"
      >
        <div
          style={{
            alignItems: "center",
            position: "absolute",
            width: "20px",
            height: "20px",
            top: "20px",
            right: "20px"
          }}
          onClick={() => onClose()}
        >
          <img style={{ margin: "auto" }} src="/img/cancelIcon.png"></img>
        </div>
        <div className="burger__menu-banner">
          <nav>
            <a href="#home">
              <img
                src="/img/logo-mobile-header.png"
                srcSet="/img/logo-mobile-header@2x.png 2x, img/logo-mobile-header@3x.png 3x"
                className="burger__menu-banner__img"
              />
            </a>
          </nav>
        </div>
        <div className="burger__menu-navigation">
          <nav className="menu-link">
            <a href="https://www.facebook.com/pg/ovchynnikova.nadiia/shop/?ref=flowersway.com.ua">
              Магазин
            </a>
          </nav>
          <nav className="menu-link">
            <a href="#pathfinder">Путівник</a>
          </nav>
          <nav className="menu-link">
            <span className="disabled">Блог</span>
          </nav>
        </div>
        <div className="burger__menu-language">
          <nav>
            <div className="lang-wrapper">
              <span className="choosen-lang">
                <img
                  src="/img/country-flag-ua.png"
                  srcSet="/img/country-flag-ua@2x.png 2x, img/country-flag-ua@3x.png 3x"
                />
                Українська
              </span>
              <ul className="available__list-lang">
                <li>
                  <span className="available-lang">
                    <img
                      src="/img/country-flag-ua.png"
                      srcSet="/img/country-flag-ua@2x.png 2x, img/country-flag-ua@3x.png 3x"
                    />
                    Українська
                  </span>
                </li>
                <li>
                  <span className="available-lang">
                    <img
                      src="/img/country-flag-en.png"
                      srcSet="/img/country-flag-en@2x.png 2x, img/country-flag-en@3x.png 3x"
                    />
                    English
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="burger__menu-socials">
          <nav>
            <ImageLink
              href="#"
              src="/img/viber-burger-menu.svg"
              hoverSrc="/img/viber-burger-menu-hover.svg"
              imgWidth="50px"
              imgHeight="50px"
            />
          </nav>
          <nav>
            <ImageLink
              href="https://www.facebook.com/ovchynnikova.nadiia/"
              src="/img/facebook-burger-menu.svg"
              hoverSrc="/img/facebook-burger-menu-hover.svg"
              imgWidth="50px"
              imgHeight="50px"
            />
          </nav>
          <nav>
            <ImageLink
              href="http://instagram.com/flowers__way/"
              src="/img/instagram-burger-menu.svg"
              hoverSrc="/img/instagram-burger-menu-hover.svg"
              imgWidth="50px"
              imgHeight="50px"
            />
          </nav>
        </div>
      </div>
      <style jsx>{`
        .burger__menu-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .burger__menu-banner {
          margin: 80px 0px 96px;
        }

        .burger__menu-navigation {
          display: flex;
          flex-direction: column;
          text-align: center;
          margin-bottom: 40px;
        }

        .burger__menu-navigation {
          display: flex;
          font-family: Montserrat;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.94px;
          color: var(--primarycolor);
        }
        a:link {
          text-decoration: none;
          color: #061434;
        }

        a:visited {
          text-decoration: none;
          color: #061434;
        }

        .disabled {
          opacity: 0.5;
        }
        .menu-link {
          margin-bottom: 48px;
        }
        .menu-link a:hover {
          color: var(--primarycolor);
        }

        .menu-link a::after {
          content: "";
          display: block;
          position: relative;
          bottom: -8px;
          left: 0px;
          width: 0%;
          height: 2px;
          background: var(--primarycolor);
        }

        .menu-link a:hover::after {
          width: 100%;
        }
        .burger__menu-language {
          margin-bottom: 32px;
        }

        .choosen-lang,
        .available__list-lang .available-lang {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 36px;
          width: fit-content;
          height: 45px;
          cursor: pointer;
          font-family: Montserrat;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.94px;
          color: #061434;
        }

        .choosen-lang,
        .available__list-lang .available-lang:focus {
          outline: none;
        }

        .choosen-lang img,
        .available__list-lang .available-lang img {
          position: absolute;
          margin-left: -89px;
        }

        .available__list-lang li:first-child {
          padding-top: 14px;
        }

        .available__list-lang li:nth-child(2) {
          padding-top: 4px;
        }

        .available__list-lang li:nth-child(2) .available-lang img {
          margin-left: -66px;
        }

        .choosen-lang {
          padding-bottom: 8px;
        }

        .lang-wrapper:hover > .choosen-lang {
          color: var(--primarycolor);
        }

        .available__list-lang .available-lang:hover {
          color: var(--primarycolor);
        }

        .lang-wrapper:hover > .available__list-lang {
          display: flex;
        }

        .available__list-lang {
          display: none;
          flex-direction: column;
          margin-left: -11px;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 10px;
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
          left: 14px;
          border: 7px solid transparent;
          border-bottom: 15px solid #fff;
        }
        .burger__menu-socials {
          display: flex;
          flex-direction: row;
          width: 210px;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};

export default MainMenu;
