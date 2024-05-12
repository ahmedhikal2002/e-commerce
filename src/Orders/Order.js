import moment from "moment";
import React from "react";
import Cartitem from "../Cart/Cartitem";
import { FormatCurrency, totalPrice } from "../Context/AppReducer";

function Order({ order }) {
  console.log(order.data);
  return (
    <div>
      <div className=" w-[900px] max-w-full mx-auto">
        <div className="flex items-center justify-between  pt-11  md:pt-2">
          <p>{moment.unix(order.data.created).format("MM DD yyyy")}</p>
          <small>{order.id}</small>
        </div>
        <div className=" pb-5 border-b border-gray-300  dark:border-gray-800 ">
          {order?.data?.courses?.map((product) => (
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
            />
          ))}
          <strong className="block pt-4">
            Order total :
            <span className="text-primary-400 ml-3">
              {FormatCurrency(totalPrice(order?.data?.courses))}
            </span>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Order;
