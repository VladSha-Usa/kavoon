import GoodDetailsWizardTitle from "./goodDetailsWizardTitle";
import GoodDetailsWizardPicker from "./goodDetailsWizardPicker";
import GoodDetailsWizardAddOther from "./goodDetailsWizardAddOther";
import DataGood1 from "../../data/shop/adapters/good1";
const GoodDetailsWizard = () => {
  return (
    <>
      <div className="good-wizard-wrapper">
        <GoodDetailsWizardTitle dataForTitle={DataGood1} />
        <GoodDetailsWizardPicker
          mainTheme="Основна тканина"
          src="/img/wizard-picker/material-oksford.png"
          srcSet="/img/wizard-picker/material-oksford@2x.png 2x, img/wizard-picker/material-oksford@3x.png 3x"
          nameOfChoose="Оксфорд тканина"
          zIndex="20"
        ></GoodDetailsWizardPicker>
        <GoodDetailsWizardPicker
          mainTheme="Основна тканина"
          src="/img/wizard-picker/material-oksford.png"
          srcSet="/img/wizard-picker/material-oksford@2x.png 2x, img/wizard-picker/material-oksford@3x.png 3x"
          nameOfChoose="Оксфорд тканина"
          zIndex="19"
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
