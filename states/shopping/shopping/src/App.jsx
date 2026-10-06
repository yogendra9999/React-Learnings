import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  function addProduct() {
    setCart([
      ...cart,
      {
        id: 1,
        name: "Laptop",
        quantity: 1
      }
    ]);
  }

  function increaseQuantity(id) {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  return (
    <div>
      <button onClick={addProduct}>Add Laptop</button>

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;