import GoodDetailsPrevSlider from "./goodDetailsPrevSlider";
import GoodDetailsWizard from "./goodDetailsWizard";
import dataGood1 from "../../data/shop/adapters/good1";

const GoodDetailsChoose = () => {
  const content = "good-details-choose__content-wrapper";
  return (
    <>
      <div className={content}>
        {dataGood1.map((images) => (
          <GoodDetailsPrevSlider images={images} />
        ))}
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
