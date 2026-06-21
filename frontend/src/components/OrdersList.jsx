import React from "react";

function OrdersList({ submittedOrders }) {
  return (
    <section>
      <h2>Submitted Orders</h2>

      {submittedOrders.length === 0 ? (
        <p>No submitted orders yet.</p>
      ) : (
        <div className="orders-list">
          {submittedOrders.map((order) => (
            <div className="order" key={order.id}>
              <h3>Order #{order.id}</h3>
              <p>Created: {new Date(order.createdAt).toLocaleString()}</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={`${order.id}-${item.id}-${index}`}>{item.name}</li>
                ))}
              </ul>
              <strong>Total: ${order.total.toFixed(2)}</strong>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default OrdersList;
