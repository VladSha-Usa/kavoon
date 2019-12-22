import ImageLink from '../common/imageLink'

const Footer = () => {
  const prefix = "footer"
  //const navbarClass = `${prefix}-navbar`
  const bannerClass = `${prefix}-banner`
  //const menuClass = `${prefix}-menu`
  //const bannerImgClass = `${prefix}-banner-img`
  //const socialClass = `${prefix}-social`
  const hamburgerClass = `${prefix}-hamburger`
  return (<>
    <footer >
      <div style={{ paddingTop: "40px", display: 'flex' }}>
        <div className="footer-banner">
          <nav>
            <a href="#">
              <img src="img/logo-footer.png"
                srcset="img/logo-footer@2x.png 2x, img/logo-footer@3x.png 3x"
                className="logo-footer" />
            </a>
          </nav>
        </div>
        <div className="footer-social">
          <div style={{ marginRight: "20px" }}>Шукайте нас тут: </div>
          <nav style={{ marginRight: "5px" }} >
            <ImageLink href="#" className="footer-icon"
              src="img/viber-footer-icon.svg"
              hoverSrc="img/viber-hover.svg" />
          </nav>
          <nav style={{ marginLeft: "5px", marginRight: "5px" }}>
            <ImageLink href="http://instagram.com/flowers__way/" className="footer-icon"
              src="img/instagram-footer-icon.svg"
              hoverSrc="img/instagram-hover.svg" />
          </nav>
          <nav style={{ marginLeft: "5px" }}>
            <ImageLink href="https://www.facebook.com/ovchynnikova.nadiia/" className="footer-icon"
              src="img/facebook-footer-icon.svg"
              hoverSrc="img/facebook-hover.svg" />
          </nav>
        </div>
      </div>
      <div className="footer-copyright">
        ©2019 Flowers way. All Rights Reserved.
      </div>
    </footer>

    <style jsx>{`
    .footer-copyright {
      font-family: Montserrat;
      font-size: 15px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.7px;
      color: #ffffff;
      
      
      width: 100%;
      padding-top: 40px;
      text-align: center;
    }
    .footer-social {
      align-items: center;
      display: flex;
      
      margin-left: auto;
    }
    .footer-social div {
      font-family: Montserrat;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.84px;
      color: #ffffff;
    }
    .footer-icon {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
    .logo-footer {
      width: 210px;
      height: 55px;
      object-fit: contain;
    }
  `}</style>
  </>)
}

export default Footer