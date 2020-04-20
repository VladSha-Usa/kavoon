import GoodListItem from "./goodListItem";
import GoodListData from "../../data/shop/adapters/goods"

const GoodsList = () => {
  const contentWrapper = "goods-list__content-wrapper";

  return (
    <>
      <div className={contentWrapper}>
{GoodListData.map(goodListItem=> (<GoodListItem
          src={goodListItem.image}
          // srcSet="img/img-shop-item/photo-1@2x.jpg 2x, img/img-shop-item/photo-1@3x.jpg 3x,"
          contentTitle={goodListItem.name}
          capacity={goodListItem.volume}
          price={goodListItem.price}
        />) )}
      </div>
      <style jsx>{`
        .${contentWrapper} {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        @media only screen and (max-width: 1023px) {
          .${contentWrapper} {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default GoodsList;
