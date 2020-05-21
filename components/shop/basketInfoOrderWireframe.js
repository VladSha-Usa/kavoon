import BasketInfoChooseGoods from "../../components/shop/basketInfoChooseGoods";
import BasketOrderForm from "../../components/shop/BasketOrderForm";
const BasketInfoOrderWireframe = () => {
  return (
    <>
      <div className="info-order-wrapper">
        <BasketInfoChooseGoods />
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
