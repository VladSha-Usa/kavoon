import Title from './title'

const setActive = (active, id) => () => {
  const element = document.getElementById(id);
  if (active) {
    element.classList.add("pathfinder-blog-item-hover");
  } else {
    element.classList.remove("pathfinder-blog-item-hover")
  }
}


const BlockItem = ({ classPrefix, src, srcSet, children, backText, enabled, backStyle, sizeStyle }) => {
  const prefix = `${classPrefix ? classPrefix + '-' : ""}block`
  const shapeRightClass = `${prefix}-shape-right`
  const shapeLeftClass = `${prefix}-shape-left`
  const titleClass = `${prefix}-shape-title`

  const vertBackgroundClass = `${prefix}-background`
  const blockClass = `${prefix}-block`

  return (<>
    <div className={blockClass}>
      <a href="#">
        <img src={src} srcSet={srcSet} className="pathfinder-blog-image" />
        <div className={vertBackgroundClass}>{backText || children}</div>

        <div className={titleClass}>
          <div className={shapeLeftClass} />
          <div className="text">{children}</div>
          <div className={shapeRightClass} />
        </div>
      </a>
    </div>
    <style jsx>{`
     .${shapeLeftClass} {
        margin-left: auto;
        margin-right: 10px;
        width: 15px;
        height: 2px;
        background-color: #1831aa;
      }
      .${shapeRightClass}{
        margin-left: 10px;
        margin-right: auto;
        width: 15px;
        height: 2px;
        background-color: #1831aa;
      }
      .${titleClass} {
        width: ${sizeStyle.imageWidth};
        align-items: center;
        display: flex;
        position: relative;
       
        top: -${backStyle.fontSize};
      }
      .${vertBackgroundClass} {
        object-fit: contain;
        transform: rotate(-90deg);
        opacity: 0.12;
        font-family: Montserrat;
        font-size: ${backStyle.fontSize};
        font-weight: 900;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.11;
        letter-spacing: 1.68px;
        color: #296fdc;

        position: relative;
        left: ${backStyle.offsetLeft};
        top: ${backStyle.offsetTop};
      }

      a:link {
        text-decoration: none;
      }

      a:visited {
        text-decoration: none;
      }

      .pathfinder-blog-image {
        border-radius: 10px;
        position: relative;
        width: ${sizeStyle.imageWidth};
        height: ${sizeStyle.imageHeight};
        object-fit: contain;
        box-shadow: 14px 25px 46px 0 rgba(9, 21, 85, 0.2);
        z-index: 1;
      }

      .text {
        font-family: Montserrat;
        font-size: 17px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.65;
        letter-spacing: 0.79px;
        text-align: center;
        color: #061434;
        text-transform: uppercase;
      }

      .${blockClass} {
        width: ${sizeStyle.width};
        height: ${sizeStyle.height};
      }
  `}</style>
  </>)
}


const Content = ({ classPrefix }) => {

  const prefix = `${classPrefix ? classPrefix + '-' : ""}content`

  const backgroundClass = `${prefix}-background`
  const layoutClass = `${prefix}-layout`

  const bannerClass = `${prefix}-banner`
  const menuClass = `${prefix}-menu`
  const socialClass = `${prefix}-social`
  const hamburgerClass = `${prefix}-hamburger`

  return (<>
    <div >
      <span className={backgroundClass}>FLOWERS<br /> WAY</span>
      <Title classPrefix={prefix} />
      <div className={layoutClass}>

        <BlockItem
          src="img/blog.jpg"
          srcSet="img/blog@2x.jpg 2x, img/blog@3x.jpg 3x"
          backStyle={{
            fontSize: "36px", 
            offsetLeft: "120px",
            offsetTop: "-160px" }}
          sizeStyle={{
            imageWidth: "250px",
            imageHeight: "200px",
            width: "280px",
            height: "244px"
          }}>BLOG</BlockItem>

        <BlockItem src="img/image.jpg"
          srcSet="img/image@2x.jpg 2x, img/image@3x.jpg 3x"
          backStyle={{
            fontSize: "28px", 
            offsetLeft: "120px",
            offsetTop: "-160px" }}
          sizeStyle={{
            imageWidth: "250px",
            imageHeight: "200px",
            width: "280px",
            height: "244px"
          }}>ПУТІВНИК</BlockItem>
        <div style={{alignContent: "flex-end", height: "600px", marginLeft: "auto"}}>

          <BlockItem src="img/shop-image.jpg"
            srcSet="img/shop-image@2x.jpg 2x,img/shop-image@3x.jpg 3x"
            backText="МАГАЗИН"
            backStyle={{
              fontSize: "70px" ,
              offsetLeft: "160px",
              offsetTop: "-223px"
            }}
            sizeStyle={{
              imageWidth: "320px",
              imageHeight: "400px",
              width: "360px",
              height: "468px"
            }}>Велоспорядження<br />для легких подорожей </BlockItem>

          <div className="where-buy-area" >
            <div className="where-buy-text ">Де купити?</div>
            <a href="https://www.facebook.com/pg/ovchynnikova.nadiia/shop/?ref=flowersway.com.ua">
              <div className="button-field button-field-text">
                <img style={{ marginLeft: "auto", marginRight: "6px" }} src="img/shop-icon.svg" className="shop-icon" />
                <div style={{ marginRight: "auto", marginLeft: "6px" }}>Shop</div>
              </div>
            </a>
          </div>
        </div>



        {/* <div className="scroll-down">
              <a href="#">
                <img src="img/scroll-down.svg"  />
              </a>
            </div> */}
      </div>
    </div>

    <style jsx>{`
      .${layoutClass} {
        position: relative;
        height: 304px;
        display: flex;
        flex-wrap: wrap-reverse;
      }
      .${backgroundClass} {
        position: absolute;
        left: -150px;
        object-fit: contain;
        opacity: 0.08;
        font-family: 'Archivo Black', sans-serif;
        font-size: 184px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.88;
        letter-spacing: 8.6px;
        color: #296fdc;
      }
      @media only screen and (max-width: 1023px) {
        .${backgroundClass} {
          left: 0;
          font-size: 72px;
          line-height: 60px;
        }
      }
      .where-buy-area {

        height: 155px;
        display: flex;
        align-items: center;
      }
      .where-buy-text {
        // width: 124px;
        // height: 22px;
        font-family: Montserrat;
        font-size: 17px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: 0.79px;
        text-transform: uppercase;
        color: #061434;
      }
      .pathfinder-blog-margin-adjust {
        top: 55px;
        height: 100%;
        position: relative;
        display: flex;
      }
       .shop-icon {
        margin-right: 12px;
        width: 20px;
        height: 20px;
        object-fit: contain;
      }
      .button-field {
        position: relative;
        left:20px;
        top: 0px;
        width: 180px;
        height: 50px;
        border-radius: 25px;
        box-shadow: 0 14px 24px 0 rgba(13, 26, 113, 0.25);
        background-color: #1831aa;
        align-items: center;
        display: flex;
      }
      .button-field :hover{
          background-color: #3653e2;
      }
      .button-field-text {
        font-family: Montserrat;
        font-size: 17px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.79px;
        text-transform: uppercase;
        color: #ffffff;
      }
    `}</style>
  </>)
}

export default Content