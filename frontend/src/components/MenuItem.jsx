import React from "react";

function MenuItem({ item, addToOrder }) {
  return (
    <div className="menu-item">
      <div>
        <h3>{item.name}</h3>
        <p>{item.category}</p>
      </div>

      <div className="menu-item-actions">
        <strong>${item.price.toFixed(2)}</strong>
        <button onClick={() => addToOrder(item)}>Add to Order</button>
      </div>
    </div>
  );
}

export default MenuItem;
