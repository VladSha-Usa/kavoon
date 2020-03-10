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
          title='ЩО ПОЧИТАТИ?'>БЛОГ</BlockItem>

        <BlockItem src="/img/image.jpg"
          srcSet="/img/image@2x.jpg 2x, img/image@3x.jpg 3x"
          enabled={true}
          type='pathfinder'
          title='КУДИ ПОЇХАТИ?'>ПУТІВНИК</BlockItem>

        <div className="content-layout-shop">

          <BlockItem src="/img/shop-image.jpg"
            srcSet="/img/shop-image@2x.jpg 2x,img/shop-image@3x.jpg 3x"
            backText="МАГАЗИН"
            enabled={true}
            type='shop'
            title='ЯКЕ СПОРЯДЖЕННЯ?'>Велоспорядження<br />для легких подорожей </BlockItem>
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