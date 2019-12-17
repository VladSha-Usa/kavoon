
import ImageLink from '../common/imageLink'

const setImage = (active, id) => (el1) => {

  const element = document.getElementById(id);
  console.log(el1 == element)
  if (active) {
    element.src = `img/${id}.svg`
  } else {
    element.src = `img/${id}-hover.svg`
  }
}


const Header = () => {
  const prefix = "header"
  const navbarClass = `${prefix}-navbar`
  const bannerClass = `${prefix}-banner`
  const menuClass = `${prefix}-menu`
  const socialClass = `${prefix}-social`
  const hamburgerClass = `${prefix}-hamburger`
  return (<>
    <header className={ navbarClass }>
      <div className={ bannerClass }>
          <nav >
            <a href="#home">
              <img src="img/logotype.png" srcSet="img/logotype@2x.png 2x, img/logotype@3x.png 3x" />
            </a>
          </nav>
        </div>
        <div className={ menuClass }>
          <nav >
            <a href="https://www.facebook.com/pg/ovchynnikova.nadiia/shop/?ref=flowersway.com.ua">Магазин</a>
          </nav>
          <nav >
            <a href="#">Путівник</a>
          </nav>
          <nav >
            <span className="disabled">Блог</span>
          </nav>
        </div>
        <div className={socialClass} >

          <nav style={{ width: "50px", height: "40px" }} >
            <ImageLink href="#" className="TG"
              src="img/viber.svg"
              hoverSrc="img/viber-hover.svg" />
          </nav>

          <nav style={{ width: "50px", height: "40px" }}>
            <ImageLink href="http://instagram.com/flowers__way/" className="TG"
              src="img/instagram.svg"
              hoverSrc="img/instagram-hover.svg" />
          </nav>
          <nav style={{ width: "50px", height: "40px" }}>
            <ImageLink href="https://www.facebook.com/ovchynnikova.nadiia/" className="TG"
              src="img/facebook.svg"
              hoverSrc="img/facebook-hover.svg" />
          </nav>
        </div>
        <div className={hamburgerClass}>
          <nav >
            <a href="#home">
              <img src="img/menu.png" srcSet="img/menu@2x.png 2x, img/menu@3x.png 3x" />
            </a>
          </nav>
        </div>
    </header>
    <style jsx>{`
    
    .${navbarClass} {
      align-items: center;
      display: flex;
      height: 100%
    }

    .${bannerClass} {
      justify-content: start;
      margin-right: auto;
    }
    .${hamburgerClass} {
      justify-content: flex-end;
      margin-left: auto;
    }
    .${socialClass} {
      display: flex;
    }
    .${menuClass} {
      display: flex;
    }

    .nav-menu-title {
      font-family: Montserrat;
      font-size: 17px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.79px;
      color: #061434;
      position: relative;
    }

    a:link {
      text-decoration: none;
    }

    a:visited {
      text-decoration: none;
    }

    .nav-menu-title a:link {
      color: #061434;
    }

    .nav-menu-title a:visited {
      color: #061434;
    }

    .disabled {
      opacity: 0.5;
    }

    .nav-menu-title a:hover {
      color: var(--primarycolor);
    }

    .nav-menu-title-underline a::after {
      content: "";
      display: block;
      position: relative;
      bottom: -8px;
      left: 0px;
      width: 0%;
      height: 2px;
      background: var(--primarycolor);
    }

    .nav-menu-title-underline a:hover::after {
      width: 100%;
    }

    @media only screen and (max-width: 1023px) {
      .${menuClass} {
        display: none;
      }
      .${socialClass} {
        display: none;
      }
    }

    @media only screen and (min-width: 1024px) {
      .${hamburgerClass} {
        display: none;
      }
    }

    `}</style>
  </>)
}

export default Header