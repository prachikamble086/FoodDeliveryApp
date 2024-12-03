import { useState } from "react";
import { useAppContext } from "../../context/context.jsx";
import { getCartData } from "../../services/networkCalls";
import { ShoppingBasket, ForwardButton } from "../../constant";
import "./Cart.css";

const Cart = () => {
  const { cart, setCart, user } = useAppContext();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCartClick = async () => {
    if (user) {
      try {
        const cartData = await getCartData(user._id);
        setCart(cartData.cart); // Update cart with fetched data
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setCart({ items: [], quantity: [] }); // Set to empty cart on error
      }
      setIsCartVisible(!isCartVisible); // Toggle cart visibility
    }
  };

  const handleDelete = (itemId) => {
    // Find the index of the item in the cart
    const itemIndex = cart.items.findIndex((item) => item._id === itemId);

    if (itemIndex !== -1) {
      // If the item quantity is greater than 1, decrease the quantity by 1
      if (cart.quantity[itemIndex] > 1) {
        const updatedQuantity = [...cart.quantity];
        updatedQuantity[itemIndex] -= 1;

        // Update cart state with decreased quantity
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
        // If quantity is 1, remove the item completely
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
    <>
      <div className="cart">
        <button className="cart-button" onClick={handleCartClick}>
          <div className="cart-image">
            <img
              className="shopping-basket"
              src={ShoppingBasket}
              alt="ShoppingBasket"
            />
            <p>My cart</p>
          </div>
          <img
            className="forward-button"
            src={ForwardButton}
            alt="ForwardButton"
          />
        </button>
      </div>

      {isCartVisible && (
        <div className="cart-items">
          {cart?.items?.length > 0 ? (
            <>
              <h3>My Cart</h3>
              <ul>
                {cart.items.map((item, index) => (
                  <li key={item._id} className="cart-item">
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.description}</p>
                      <p>Price: ${item.price}</p>
                      <p>Qty: {cart.quantity[index]}</p>
                    </div>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(item._id)}
                    >
                      <span className="delete-icon">X</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-summary">
                <p>Subtotal: ${cart.subtotal}</p>
                <p>Discount: ${cart.discount}</p>
                <p>Delivery Fee: ${cart.deliveryFee}</p>
                <h4>Total: ${cart.total}</h4>
              </div>
            </>
          ) : (
            <div>
              <h3>My Cart</h3>
              <p>Your cart is empty.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
