import RespScreenWidth from '../common/mediaConst';
import GoodDetailsPrevSlider from './goodDetailsPrevSlider';
import GoodDetailsWizard from './goodDetailsWizard';
import DataGood1 from '../../data/shop/viewModels/good1';

const GoodDetailsChoose = () => (
  <>
    <div className="good-details-choose-wrapper">
      <GoodDetailsPrevSlider images={DataGood1.gallery} />
      <GoodDetailsWizard />
    </div>
    <style jsx>
      {`
        .good-details-choose-wrapper {
          display: flex;
          flex-direction: row;
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthNetbook}px) {
          .good-details-choose-wrapper {
            justify-content: space-between;
          }
        }
        @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
          .good-details-choose-wrapper {
            flex-direction: column;
          }
        }
      `}
    </style>
  </>
);

export default GoodDetailsChoose;
