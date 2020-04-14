import GoodDetailsWizardTitle from "./goodDetailsWizardTitle";
import GoodDetailsWizardPicker from "./goodDetailsWizardPicker";
const GoodDetailsWizard = () => {
  const wizardWrap = "good-wizard-wrapper";
  return (
    <>
      <div className={wizardWrap}>
        <GoodDetailsWizardTitle />
        <GoodDetailsWizardPicker />
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
