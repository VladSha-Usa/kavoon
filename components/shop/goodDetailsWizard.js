import React, { useState, useRef } from "react";

import GoodDetailsWizardTitle from "./goodDetailsWizardTitle";
import GoodDetailsWizardPicker from "./goodDetailsWizardPicker";
import GoodDetailsWizardAddOther from "./goodDetailsWizardAddOther";
import DataGood1 from "../../data/shop/adapters/good1";

import { bagBigFork } from "../../data/shop/data/goods";

const GoodDetailsWizard = () => {
  const fabrics = bagBigFork.fabrics;
  const [selectedFabric, setSelectedFabric] = useState(fabrics[0]);
  const [selectedPrint, setSelectedPrint] = useState(selectedFabric.prints[0]);

  return (
    <>
      <div className="good-wizard-wrapper">
        <GoodDetailsWizardTitle dataForTitle={DataGood1} />
        <GoodDetailsWizardPicker
          mainTheme="Основна тканина"
          items={fabrics}
          selected={[ selectedFabric, setSelectedFabric ]}

        ></GoodDetailsWizardPicker>
        <GoodDetailsWizardPicker
          mainTheme="Основний колір"
          items={selectedFabric.prints}
          selected={[selectedPrint, setSelectedPrint ]}
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
