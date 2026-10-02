import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>
          Discover a delicious variety of meals from your favorite restaurants,
          prepared with fresh ingredients and authentic flavors. FoodNest makes
          it easy to explore, order, and enjoy your favorite food delivered
          right to your doorstep.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
