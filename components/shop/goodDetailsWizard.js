import GoodDetailsWizardTitle from "./goodDetailsWizardTitle";
import GoodDetailsWizardPicker from "./goodDetailsWizardPicker";
const GoodDetailsWizard = () => {
  const wizardWrap = "good-wizard-wrapper";
  return (
    <>
      <div className={wizardWrap}>
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
      </div>
      <style jsx>{`
        .${wizardWrap} {
          width: 380px;
          margin-left: 96px;
        }
      `}</style>
    </>
  );
};
export default GoodDetailsWizard;
