import React, { useEffect, useState } from "react";
import Order from "./Order";
import { useAppContext } from "../Context/AppContext";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

function Orders() {
  const { user } = useAppContext();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      const collRef = collection(db, "user", user?.uid, "courses");
      const createdRef = query(collRef, orderBy("created", "desc"));
      onSnapshot(createdRef, (items) => {
        setOrders(
          items.docs.map((data) => {
            return {
              id: data.id,
              data: data.data(),
            };
          })
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <section className="min-h-[400px] py-6">
      <div className="container">
        <div>
          <div>
            <h3>Your Orders</h3>
          </div>
          <div>
            {orders?.map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orders;
