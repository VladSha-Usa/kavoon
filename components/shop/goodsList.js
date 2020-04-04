import GoodItem from "./goodItem";

const GoodsList = () => {
  const caseField = "case-field";
  const contentWrapper = "goods-list__content-wrapper";

  return (
    <>
      <div className={contentWrapper}>
        <div className={caseField}>
          <GoodItem
            src="img/img-shop-item/photo-1.jpg"
            srcSet="img/img-shop-item/photo-1@2x.jpg 2x, img/img-shop-item/photo-1@3x.jpg 3x,"
            contentTitle="Сумка-тубус на вилку і ще щось у 2му рядку"
            capacity="10"
            price="1300"
          ></GoodItem>
        </div>
        <div className={caseField}>
          <GoodItem
            src="img/img-shop-item/photo-2.jpg"
            srcSet="img/img-shop-item/photo-2@2x.jpg 2x, img/img-shop-item/photo-2@3x.jpg 3x,"
            contentTitle="Сумка-тубус на вилку."
            capacity="10"
            price="1300"
          ></GoodItem>
        </div>
        <div className={caseField}>
          <GoodItem
            src="img/img-shop-item/photo-3.jpg"
            srcSet="img/img-shop-item/photo-3@2x.jpg 2x, img/img-shop-item/photo-3@3x.jpg 3x,"
            contentTitle="Сумка-тубус"
            capacity="10"
            price="1300"
          ></GoodItem>
        </div>
        <div className={caseField}>
          <GoodItem
            src="img/img-shop-item/photo-4.jpg"
            srcSet="img/img-shop-item/photo-4@2x.jpg 2x, img/img-shop-item/photo-4@3x.jpg 3x,"
            contentTitle="Сумка-тубус на вилку"
            capacity="6"
            price="1300"
          ></GoodItem>
        </div>
        <div className={caseField}>
          <GoodItem
            src="img/img-shop-item/photo-5.jpg"
            srcSet="img/img-shop-item/photo-5@2x.jpg 2x, img/img-shop-item/photo-5@3x.jpg 3x,"
            contentTitle="Сумка-бананка на кермо"
            capacity="3"
            price="1300"
          ></GoodItem>
        </div>
        <div className={caseField}>
          <GoodItem
            src="img/img-shop-item/photo-6.jpg"
            srcSet="img/img-shop-item/photo-6@2x.jpg 2x, img/img-shop-item/photo-6@3x.jpg 3x,"
            contentTitle="Бананка"
            capacity="10"
            price="1300"
          ></GoodItem>
        </div>
        <div className={caseField}>
          <GoodItem
            src="img/img-shop-item/photo-7.jpg"
            srcSet="img/img-shop-item/photo-7@2x.jpg 2x, img/img-shop-item/photo-7@3x.jpg 3x,"
            contentTitle="Внутрірамна сумка"
            capacity="10"
            price="1300"
          ></GoodItem>
        </div>
        <div className={caseField}>
          <GoodItem
            src="img/img-shop-item/photo-8.jpg"
            srcSet="img/img-shop-item/photo-8@2x.jpg 2x, img/img-shop-item/photo-8@3x.jpg 3x,"
            contentTitle="Сумка-тубус на вилку"
            capacity="10"
            price="1300"
          ></GoodItem>
        </div>
      </div>
      <style jsx>{`
        .${caseField} {
          width: 275px;
          height: 380px;
          border-radius: 12px;
          box-shadow: 2px 2px 42px -2px rgba(12, 32, 60, 0.12);
          background-color: var(--white);
          display: inline-block;
          margin-bottom: 20px;
          position: relative;
        }
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
