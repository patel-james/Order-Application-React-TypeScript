import React from "react";
import MenuItem from "./MenuItem.jsx";

function MenuList({ menuItems, addToOrder }) {
  return (
    <section>
      <h2>Menu</h2>

      <div className="menu-list">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} addToOrder={addToOrder} />
        ))}
      </div>
    </section>
  );
}

export default MenuList;
