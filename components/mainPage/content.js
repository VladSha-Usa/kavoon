import Title from './title'
import BlockItem from './blockItem'

const Content = ({ classPrefix }) => {
  const prefix = `${classPrefix ? classPrefix + '-' : ""}content`

  return (
    <>
      <div>
        <Title classPrefix={prefix} />
        <div className="content-layout">
          <BlockItem
            src="/img/blog.jpg"
            srcSet="/img/blog@2x.jpg 2x, img/blog@3x.jpg 3x"
            enabled={false}
            type="blog"
            title="ЩО ПОЧИТАТИ?"
            button="ІСТОРІЇ"
            icoButton="/img/arrow-button-ico.svg"
          >
            БЛОГ
          </BlockItem>

          <BlockItem
            src="/img/image.jpg"
            srcSet="/img/image@2x.jpg 2x, img/image@3x.jpg 3x"
            enabled={true}
            type="pathfinder"
            title="КУДИ ПОЇХАТИ?"
            button="СЮДИ"
            href="#pathfinder"
            icoButton="/img/arrow-button-ico.svg"
          >
            ПУТІВНИК
          </BlockItem>

          <div className="content-layout-shop">
            <BlockItem
              src="/img/shop-image.jpg"
              srcSet="/img/shop-image@2x.jpg 2x,img/shop-image@3x.jpg 3x"
              backText="МАГАЗИН"
              enabled={true}
              type="shop"
              title="ЯКЕ СПОРЯДЖЕННЯ?"
              button="ТУТ МОЖНА ПРИДБАТИ"
              href="https://www.facebook.com/pg/ovchynnikova.nadiia/shop/?ref=flowersway.com.ua"
              icoButton="/img/shop-button-ico.svg"
            >
              Велоспорядження
              <br />
              для легких подорожей
            </BlockItem>
          </div>
        </div>
      </div>

      <style jsx>{`
        .content-layout {
          position: relative;
          padding-top: 40px;
          display: flex;
          flex-wrap: wrap-reverse;
        }
        .content-layout-shop {
          position: relative;
          top: -270px;
          margin-left: auto;
        }
        @media only screen and (max-width: 1165px) {
          .content-layout-shop {
          }
        }
        @media only screen and (max-width: 1023px) {
          .content-layout {
            padding-top: 40px;
          }
          .content-layout-shop {
            margin-right: inherit;
            margin-left: inherit;
            top: 0px;
          }
        }
      `}</style>
    </>
  );
}

export default Content