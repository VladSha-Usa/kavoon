import React, { useReducer } from "react";

import GoodDetailsWizardTitle from "./goodDetailsWizardTitle";
import GoodDetailsWizardPicker from "./goodDetailsWizardPicker";
import GoodDetailsWizardAddOther from "./goodDetailsWizardAddOther";
import DataGood1 from "../../data/shop/adapters/good1";

import { bagBigFork } from "../../data/shop/data/goods";


function fabricReducer(state, action){
  switch (action.type) {
    case 'setFabric':
      return {fabric: action.payload, print: action.payload.prints[0] }
    case 'setPrint':
      return {fabric: state.fabric, print: action.payload};
    default:
      throw new Error();
  }
}

function extractAction(dipatch, actionType) {
  return (payload) => {
    dipatch({type: actionType, payload: payload})
  }

}

const GoodDetailsWizard = () => {
  const fabrics = bagBigFork.fabrics;

  const [state, dispatch] = useReducer(
    fabricReducer,
    { fabric: fabrics[0], print: fabrics[0].prints[0] }
  );

  return (
    <>
      <div className="good-wizard-wrapper">
        <GoodDetailsWizardTitle dataForTitle={DataGood1} />
        <GoodDetailsWizardPicker
          mainTheme="Основна тканина"
          items={fabrics}
          selected={[ state.fabric, extractAction(dispatch, 'setFabric') ]}

        ></GoodDetailsWizardPicker>
        <GoodDetailsWizardPicker
          mainTheme="Основний колір"
          items={state.fabric.prints}
          selected={[ state.print, extractAction(dispatch, 'setPrint') ]}
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
