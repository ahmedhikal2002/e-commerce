import React from "react";
import { useAppContext } from "../Context/AppContext";
import Cartitem from "./Cartitem";
import { FormatCurrency, totalPrice } from "../Context/AppReducer";
import { NavLink } from "react-router-dom";

function Cart() {
  const { products } = useAppContext();
  const total = totalPrice(products);

  return (
    <section className="pb-8 min-h-[400px]">
      <div className="container w-[900px] max-w-full mx-auto mt-16">
        {products?.map((product) => (
          <Cartitem
            key={product.id}
            // product={product}
            id={product.id}
            title={product.title}
            category={product.category}
            desc={product.desc}
            instantDelivery={product.instantDelivery}
            price={product.price}
            img={product.img}
            shownInCartPage
          />
        ))}
        <div className="text-2xl mt-24 lg:mt-24 xl:mt-16 flex items-center justify-between p-3 lg:p-0">
          <p>Total</p>
          <div>
            <p>{FormatCurrency(total)}</p>
          </div>
        </div>
        <div className="p-3 lg:p-0">
          <button className="btn  block ml-auto  bg-primary-400 mt-4 ">
            <NavLink to={`${total > 0 ? "/payment" : ""}`}>Checkout</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
