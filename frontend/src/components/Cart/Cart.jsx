import { useEffect, useState } from "react";
import { useAppContext } from "../../context/context";
import { useNavigate, useParams } from "react-router-dom";
import { Remove } from "../../constant";
import "./Cart.css";
import { getCartData } from "../../services/networkCalls";

const Cart = () => {
  const { cart, setCart, user } = useAppContext();
  const navigate = useNavigate();
  const { cartId, userId } = useParams();
  const loadCartData = async () => {
    if (user) {
      try {
        const cartData = await getCartData(user._id);
        setCart(cartData.cart);
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setCart({ items: [], quantity: [] });
      }
    }
  };

  useEffect(() => {
    loadCartData();
  }, [user]);

  const handleCheckout = () => {
    if (user && cart) {
      navigate(`/checkout/${user._id}/${cartId}`, { state: { cart } });
    }
  };

  const handleDelete = (itemId) => {
    const itemIndex = cart.items.findIndex((item) => item._id === itemId);

    if (itemIndex !== -1) {
      if (cart.quantity[itemIndex] > 1) {
        const updatedQuantity = [...cart.quantity];
        updatedQuantity[itemIndex] -= 1;

        setCart({
          ...cart,
          quantity: updatedQuantity,
          subtotal: cart.items.reduce(
            (sum, item, index) => sum + item.price * updatedQuantity[index],
            0
          ),
          total:
            cart.items.reduce(
              (sum, item, index) => sum + item.price * updatedQuantity[index],
              0
            ) +
            cart.deliveryFee -
            cart.discount,
        });
      } else {
        const updatedItems = cart.items.filter((item) => item._id !== itemId);
        const updatedQuantity = cart.quantity.filter(
          (_, index) => index !== itemIndex
        );

        setCart({
          ...cart,
          items: updatedItems,
          quantity: updatedQuantity,
          subtotal: updatedItems.reduce(
            (sum, item, index) => sum + item.price * updatedQuantity[index],
            0
          ),
          total:
            updatedItems.reduce(
              (sum, item, index) => sum + item.price * updatedQuantity[index],
              0
            ) +
            cart.deliveryFee -
            cart.discount,
        });
      }
    }
  };

  return (
    <div className="cart-items">
      {cart?.items?.length > 0 ? (
        <>
          <ul className="menu">
            {cart.items.map((item, index) => (
              <li key={item._id} className="cart-item">
                <div className="basket">
                  <div className="item-quantity">{cart.quantity[index]}</div>
                  <div className="price-item-add-ons">
                    <div className="basket-item-cost">${item.price}</div>
                    <div className="basket-item">
                      <strong>{item.name}</strong>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="delete-items">
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(item._id)}
                    >
                      <img src={Remove} alt="Delete" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-discount-delivery-fee">
            <div className="subtotal">
              <div>Sub Total</div>
              <div className="subtotal-price">${cart.subtotal ?? "N/A"}</div>
            </div>
          </div>
          <button className="total-to-pay-button">
            <div>Total to pay</div>
            <div>${cart.total ?? "N/A"}</div>
          </button>
          <button className="checkout-cart-button" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      ) : (
        <div>
          <h3>My Cart</h3>
          <p>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
