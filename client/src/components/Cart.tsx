import React from "react";

const Cart = (props: any) => {
  const { cartItems } = props;
  return (
    <div>
      <h2>Cart items</h2>
      {cartItems.length === 0 && <div>Cart empty</div>}
    </div>
  );
};

export default Cart;
