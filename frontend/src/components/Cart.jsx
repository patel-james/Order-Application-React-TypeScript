import React from "react";

function Cart({ currentOrder, total, submitOrder }) {
  return (
    <section className="cart">
      <h2>Current Order</h2>

      {currentOrder.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {currentOrder.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>

          <p className="total">Total: ${total.toFixed(2)}</p>
          <button onClick={submitOrder}>Submit Order</button>
        </>
      )}
    </section>
  );
}

export default Cart;
