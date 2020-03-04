import Title from './title'
import BlockItem from './blockItem'

const Content = ({ classPrefix }) => {

  const prefix = `${classPrefix ? classPrefix + '-' : ""}content`
  const layoutClass = `${prefix}-layout`

  return (<>
    <div >
      <Title classPrefix={prefix} />
      <div className={layoutClass}>
        <BlockItem
          rightMargin={true}
          src="/img/blog.jpg"
          srcSet="/img/blog@2x.jpg 2x, img/blog@3x.jpg 3x"
          enabled={false}
          type='blog'
          titlePointer='ЩО ПОЧИТАТИ?'>БЛОГ</BlockItem>

        <BlockItem src="/img/image.jpg"
          srcSet="/img/image@2x.jpg 2x, img/image@3x.jpg 3x"
          href="#pathfinder"
          enabled={true}
          type='pathfinder'
          titlePointer='КУДИ ПОЇХАТИ?'>ПУТІВНИК</BlockItem>

        <div className="content-layout-shop">

          <BlockItem src="/img/shop-image.jpg"
            srcSet="/img/shop-image@2x.jpg 2x,img/shop-image@3x.jpg 3x"
            backText="МАГАЗИН"
            enabled={true}
            type='shop'
            titlePointer='ЯКЕ СПОРЯДЖЕННЯ?'>Велоспорядження<br />для легких подорожей </BlockItem>

          <div className="where-buy-area" >
            <div className="where-buy-text ">Де купити?</div>
            <a href="https://www.facebook.com/pg/ovchynnikova.nadiia/shop/?ref=flowersway.com.ua">
              <div className="button-field button-field-text">
                <img style={{ marginLeft: "auto", marginRight: "6px" }} src="/img/shop-icon.svg" className="shop-icon" />
                <div style={{ marginRight: "auto", marginLeft: "6px" }}>Shop</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`

      .${layoutClass} {
        position: relative;
        height: 280px;
        display: flex;
        flex-wrap: wrap-reverse;
      }
      .content-layout-shop {
        height: 580px;
        margin-left: auto;
      }
      .where-buy-area {

        height: 155px;
        display: flex;
        align-items: center;
      }
      .where-buy-text {
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
      .where-buy-area a:link {
        text-decoration: none;
      }

      .where-buy-area a:visited {
        text-decoration: none;
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
      @media only screen and (max-width: 1165px) {
        .content-layout-shop {
          height: 530px;
        }
      }
      @media only screen and (max-width: 1023px) {
        .${layoutClass} {
          padding-top: 40px;
          height: inherit;
        }
        .content-layout-shop {
          margin-right: auto;
          height: inherit;
          bottom: 0;
        }
      }
    `}</style>
  </>)
}

export default Content