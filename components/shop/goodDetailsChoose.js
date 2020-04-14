import GoodDetailsPrevSlider from "./goodDetailsPrevSlider";
import GoodDetailsWizard from "./goodDetailsWizard";

const GoodDetailsChoose = () => {
  const content = "good-details-choose__content-wrapper";
  return (
    <>
      <div className={content}>
        <GoodDetailsPrevSlider />
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
