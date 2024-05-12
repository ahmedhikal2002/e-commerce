import React from "react";
import { useAppContext } from "../Context/AppContext";
import { NavLink } from "react-router-dom";

function CartMenue() {
  const { products, dispatch } = useAppContext();
  const deleteCourse = (id) => {
    dispatch({ type: "DELETE_FROM_CART", id: id });
  };

  return (
    <div className="container relative">
      <div className="cart-menue">
        {products.map((product) => (
          <div className="flex gap-3 items-center" key={product.id}>
            <img
              className="w-20 h-16 rounded-md "
              src={`${process.env.REACT_APP_BASEURL}${product.img}`}
              alt="course banner"
            />
            <div className="flex flex-1 flex-col gap-1">
              <span className="text-sm font-bold ">{product.title}</span>
              <span className="text-xs font-semibold text-gray-500">
                {product.category}
              </span>
              <p className="text-primary-400">${product.price}</p>
            </div>
            <div
              className="text-red-500 text-2xl font-bold cursor-pointer"
              onClick={() => deleteCourse(product.id)}
            >
              &times;
            </div>
          </div>
        ))}
        <button className="btn bg-primary-400 w-fit mx-auto pb-3 hover:bg-primary-500 tracking-[0.8px] text-sm ">
          <NavLink to="/cart">Continue to the Cart</NavLink>
        </button>
      </div>
    </div>
  );
}

export default CartMenue;
