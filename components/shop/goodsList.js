import GoodListItem from './goodListItem';
import GoodListData from '../../data/shop/viewModels/goods';
import RespScreenWidth from '../common/mediaConst';

const GoodsList = () => {
  const contentWrapper = 'goods-list__content-wrapper';

  return (
    <>
      <div className={contentWrapper}>
        {GoodListData.map((goodListItem, i) => (
          <GoodListItem
            key={i}
            src={goodListItem.image}
            srcSet={goodListItem.srcSet}
            href={goodListItem.href}
            contentTitle={goodListItem.name}
            capacity={goodListItem.volume}
            price={goodListItem.price}
          />
        ))}
      </div>
      <style jsx>
        {`
        .${contentWrapper} {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .${contentWrapper} {
            justify-content: center;
          }
        }
      `}
      </style>
    </>
  );
};

export default GoodsList;
