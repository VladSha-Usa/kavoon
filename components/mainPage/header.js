import { useEffect } from 'react'
import ImageLink from '../common/imageLink'

// const onScroll = () => {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("home").classList.add("header-border");
//   } else {
//     document.getElementById("home").classList.remove("header-border");
//   }
// }


const Header = () => {
  const prefix = "header"
  const navbarClass = `${prefix}-navbar`
  const bannerClass = `${prefix}-banner`
  const menuClass = `${prefix}-menu`
  const bannerImgClass = `${prefix}-banner-img`
  const socialClass = `${prefix}-social`
  const hamburgerClass = `${prefix}-hamburger`

  useEffect(() => {
  
    // var firebaseConfig = {
    //   apiKey: "AIzaSyC8mAIUcvd7bqw46bajWEbRrHcDTnd1qTw",
    //   authDomain: "flowers-way.firebaseapp.com",
    //   databaseURL: "https://flowers-way.firebaseio.com",
    //   projectId: "flowers-way",
    //   storageBucket: "flowers-way.appspot.com",
    //   messagingSenderId: "305623494289",
    //   appId: "1:305623494289:web:fa6954b42047c910079930",
    //   measurementId: "G-PSBJYP7E5X"
    // };
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig)
    // firebase.analytics()

  });

  return (<>
    <header className={ navbarClass }>
      <div className={ bannerClass }>
          <nav >
            <a href="#home">
              <img src="img/logotype.png" srcSet="img/logotype@2x.png 2x, img/logotype@3x.png 3x"  
              className={ bannerImgClass }/>
            </a>
          </nav>
        </div>
        <div className={ menuClass }>
          <nav >
            <a href="https://www.facebook.com/pg/ovchynnikova.nadiia/shop/?ref=flowersway.com.ua">Магазин</a>
          </nav>
        <nav style={{ marginLeft: "40px", marginRight: "40px" }}>
            <a href="#">Путівник</a>
          </nav>
          <nav >
            <span className="disabled">Блог</span>
          </nav>
        </div>
        <div className={socialClass} >

          <nav style={{marginRight:"5px"}} >
            <ImageLink href="#" className="TG"
              src="img/viber.svg"
              hoverSrc="img/viber-hover.svg" />
          </nav>

        <nav style={{ marginLeft: "5px", marginRight: "5px" }}>
            <ImageLink href="http://instagram.com/flowers__way/" className="TG"
              src="img/instagram.svg"
              hoverSrc="img/instagram-hover.svg" />
          </nav>
        <nav style={{ marginLeft: "5px" }}>
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
    .${bannerImgClass} {
      width: 218px;
      height: 40px;
      object-fit: contain;
    }
    .${bannerClass} {
      justify-content: start;
      margin-right: auto;
    }
    .${hamburgerClass} {
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;
    }
    .${socialClass} {
      align-items: center;
      display: flex;
      margin-left: auto;
    }
    .${menuClass} {
      display: flex;
      font-family: Montserrat;
      font-size: 17px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.79px;
      color: #061434;
      position: relative;
      justify-content: center;
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

    a:hover {
      color: var(--primarycolor);
    }

    a::after {
      content: "";
      display: block;
      position: relative;
      bottom: -8px;
      left: 0px;
      width: 0%;
      height: 2px;
      background: var(--primarycolor);
    }

    a:hover::after {
      width: 100%;
    }

    .header-border header::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--light-blue-grey);
    }

    .header-border header {
        background-color: #ffffff;
    }

    @media only screen and (max-width: 1023px) {
      .${menuClass} {
        display: none;
      }
      .${socialClass} {
        display: none;
      }
      .${bannerImgClass} {
        width: 238px;
        object-fit: contain;
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