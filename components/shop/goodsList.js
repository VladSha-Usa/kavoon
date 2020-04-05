import GoodListItem from "./goodListItem";

const GoodsList = () => {
  const contentWrapper = "goods-list__content-wrapper";

  return (
    <>
      <div className={contentWrapper}>
        <GoodListItem
          src="img/img-shop-item/photo-1.jpg"
          srcSet="img/img-shop-item/photo-1@2x.jpg 2x, img/img-shop-item/photo-1@3x.jpg 3x,"
          contentTitle="Сумка-тубус на вилку і ще щось у 2му рядку"
          capacity="10"
          price="1300"
        ></GoodListItem>
        <GoodListItem
          src="img/img-shop-item/photo-2.jpg"
          srcSet="img/img-shop-item/photo-2@2x.jpg 2x, img/img-shop-item/photo-2@3x.jpg 3x,"
          contentTitle="Сумка-тубус на вилку."
          capacity="10"
          price="1300"
        ></GoodListItem>
        <GoodListItem
          src="img/img-shop-item/photo-3.jpg"
          srcSet="img/img-shop-item/photo-3@2x.jpg 2x, img/img-shop-item/photo-3@3x.jpg 3x,"
          contentTitle="Сумка-тубус"
          capacity="10"
          price="1300"
        ></GoodListItem>
        <GoodListItem
          src="img/img-shop-item/photo-4.jpg"
          srcSet="img/img-shop-item/photo-4@2x.jpg 2x, img/img-shop-item/photo-4@3x.jpg 3x,"
          contentTitle="Сумка-тубус на вилку"
          capacity="6"
          price="1300"
        ></GoodListItem>
        <GoodListItem
          src="img/img-shop-item/photo-5.jpg"
          srcSet="img/img-shop-item/photo-5@2x.jpg 2x, img/img-shop-item/photo-5@3x.jpg 3x,"
          contentTitle="Сумка-бананка на кермо"
          capacity="3"
          price="1300"
        ></GoodListItem>
        <GoodListItem
          src="img/img-shop-item/photo-6.jpg"
          srcSet="img/img-shop-item/photo-6@2x.jpg 2x, img/img-shop-item/photo-6@3x.jpg 3x,"
          contentTitle="Бананка"
          capacity="10"
          price="1300"
        ></GoodListItem>
        <GoodListItem
          src="img/img-shop-item/photo-7.jpg"
          srcSet="img/img-shop-item/photo-7@2x.jpg 2x, img/img-shop-item/photo-7@3x.jpg 3x,"
          contentTitle="Внутрірамна сумка"
          capacity="10"
          price="1300"
        ></GoodListItem>
        <GoodListItem
          src="img/img-shop-item/photo-8.jpg"
          srcSet="img/img-shop-item/photo-8@2x.jpg 2x, img/img-shop-item/photo-8@3x.jpg 3x,"
          contentTitle="Сумка-тубус на вилку"
          capacity="10"
          price="1300"
        ></GoodListItem>
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
