import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals
} from "../app/CartSlice.js";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { popularsales, toprateslaes } from "../data/data.js";

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals())
  },[cartItems, dispatch])

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  }

  const handleCheckout = async () => {
    // Use stripePromise instead of loading Stripe again
    const stripe = await stripePromise;

    // Rest of your checkout logic
    const allProducts = [...popularsales.items, ...toprateslaes.items];

    const lineItems = allProducts.map(item => ({
      price: item.price_id, // Use the ID of the price (or product) from Stripe
      quantity: 1,
    }));


    console.log(lineItems);
    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItems,
      mode: "payment",
      successUrl: "http://localhost:3000/success",
      cancelUrl: "http://localhost:3000/cancel",
    });

    if (error) {
      console.error("Error:", error);
    }
  };


  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifCartState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }`}
        >
          <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
          {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>

            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                <button type="button" className="button-theme bg-theme-cart text-white" onClick={handleCheckout}>Check Out</button>
              </div>
            </div>

          </div>}
        </div>
      </div>
    </>
  );
};

export default Cart;
