import GoodDetailsWizardTitle from "./goodDetailsWizardTitle";
import GoodDetailsWizardPicker from "./goodDetailsWizardPicker";
import GoodDetailsWizardAddOther from "./goodDetailsWizardAddOther";
import DataGood1 from "../../data/shop/adapters/good1";
import dataOfGoods from "../../data/shop/data/goods";
const GoodDetailsWizard = () => {
  const wizardWrap = "good-wizard-wrapper";
  console.log(
    dataOfGoods
      .filter((el) => el.id === "bag-big-fork")
      .map((el) => el.fabrics)[0].map(el => el.mainColor)[0]
  );

  return (
    <>
      <div className="good-wizard-wrapper">
        <GoodDetailsWizardTitle dataForTitle={DataGood1} />
        <GoodDetailsWizardPicker
          mainTheme="Основна тканина"
          zIndex="20"
          data={
            dataOfGoods
              .filter((el) => el.id === "bag-big-fork")
              .map((el) => el.fabrics)[0]
          }
        ></GoodDetailsWizardPicker>
        <GoodDetailsWizardPicker
          mainTheme="Основний колір"
          zIndex="19"
          data={
            dataOfGoods
              .filter((el) => el.id === "bag-big-fork")
              .map((el) => el.fabrics)[0]
              .map((el) => el.mainColor)[0]
          }
        ></GoodDetailsWizardPicker>
        <GoodDetailsWizardAddOther
          additionGoodData={DataGood1.additionGoodToCompl}
        />
      </div>
      <style jsx>{`
        .good-wizard-wrapper {
          width: 380px;
          margin-left: 96px;
        }
      `}</style>
    </>
  );
};
export default GoodDetailsWizard;
