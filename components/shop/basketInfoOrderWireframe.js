import BasketInfoChooseGoods from "../../components/shop/basketInfoChooseGoods";
import BasketOrderForm from "../../components/shop/basketOrderForm";
import BasketInfoVM frim  


const BasketInfoOrderWireframe = (vm) => {
  return (
    <>
      <div className="info-order-wrapper">
        <BasketInfoChooseGoods vm =  />
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
