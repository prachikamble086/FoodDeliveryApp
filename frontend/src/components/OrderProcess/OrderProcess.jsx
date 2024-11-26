import "./OrderProcess.css";
const OrderProcess = ({ header, orderProcess, footer }) => {
  return (
    <>
      <div className="order-process">
        <div className="order-process-header">{header}</div>
        <img
          src={orderProcess}
          alt="PlaceOrder"
          className="order-process-image"
        />
        <p className="order-process-footer">{footer}</p>
      </div>
    </>
  );
};

export default OrderProcess;
