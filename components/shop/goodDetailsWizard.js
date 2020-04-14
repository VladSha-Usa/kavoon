import GoodDetailsWizardTitle from "./goodDetailsWizardTitle";
const GoodDetailsWizard = () => {
  const wizardWrap = "good-wizard-wrapper";
  return (
    <>
      <div className={wizardWrap}>
        <GoodDetailsWizardTitle />
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
