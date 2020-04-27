import GoodDetailsPrevSlider from "./goodDetailsPrevSlider";
import GoodDetailsWizard from "./goodDetailsWizard";
import DataGood1 from "../../data/shop/adapters/good1";

const GoodDetailsChoose = () => {
  const content = "good-details-choose__content-wrapper";
  console.log(DataGood1.gallery);
  return (
    <>
      <div className={content}>
        {DataGood1.map((object) => (
          <GoodDetailsPrevSlider images={object.gallery} />
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
