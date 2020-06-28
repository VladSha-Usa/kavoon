import BasketInfoChooseGoods from "./basketInfoChooseGoods";
import BasketOrderForm from "./basketOrderForm";

const BasketInfoOrderWireframe = ({ vm }) => {
  return (
    <>
      <div className="info-order-wrapper">
        <BasketInfoChooseGoods vm={vm.basketInfoChooseGoodsVM} />
        <BasketOrderForm />
      </div>
      <style jsx>{`
        .info-order-wrapper {
          display: flex;
        }
      `}</style>
    </>
  );
};

export default BasketInfoOrderWireframe;
