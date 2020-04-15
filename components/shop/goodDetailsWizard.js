import GoodDetailsWizardTitle from "./goodDetailsWizardTitle";
import GoodDetailsWizardPicker from "./goodDetailsWizardPicker";
const GoodDetailsWizard = () => {
  const wizardWrap = "good-wizard-wrapper";
  return (
    <>
      <div className={wizardWrap}>
        <GoodDetailsWizardTitle />
        <GoodDetailsWizardPicker
          mainTheme="Основна тканина"
          src="/img/wizard-picker/material-oksford.png"
          srcSet="/img/wizard-picker/material-oksford@2x.png 2x, img/wizard-picker/material-oksford@3x.png 3x"
          nameOfChoose="Оксфорд тканина"
        ></GoodDetailsWizardPicker>
        <GoodDetailsWizardPicker
          mainTheme="Основна тканина"
          src="/img/wizard-picker/material-oksford.png"
          srcSet="/img/wizard-picker/material-oksford@2x.png 2x, img/wizard-picker/material-oksford@3x.png 3x"
          nameOfChoose="Оксфорд тканина"
        ></GoodDetailsWizardPicker>
        <GoodDetailsWizardPicker
          mainTheme="Основна тканина"
          src="/img/wizard-picker/material-oksford.png"
          srcSet="/img/wizard-picker/material-oksford@2x.png 2x, img/wizard-picker/material-oksford@3x.png 3x"
          nameOfChoose="Оксфорд тканина"
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
