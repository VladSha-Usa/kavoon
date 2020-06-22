import GoodDetailsPrevSlider from "./goodDetailsPrevSlider";
import GoodDetailsWizard from "./goodDetailsWizard";
import DataGood1 from "../../data/shop/viewModels/good1";

const GoodDetailsChoose = () => {
  const content = "good-details-choose__content-wrapper";
  return (
    <>
      <div className={content}>
        <GoodDetailsPrevSlider images={DataGood1.gallery} />
        <GoodDetailsWizard />
      </div>
      <style jsx>{`
        .${content} {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </>
  );
};

export default GoodDetailsChoose;
