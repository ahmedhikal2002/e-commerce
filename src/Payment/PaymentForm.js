import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { axiosStripe } from "../AxiosClient/AxiosClient";
import { totalPrice } from "../Context/AppReducer";
import { useAppContext } from "../Context/AppContext";

import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function PaymentForm() {
  const { products, dispatch, user } = useAppContext();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState("");
  const [process, setprocess] = useState(false);
  const [success, setSuccess] = useState(false);
  const total = totalPrice(products) * 100;

  const navigate = useNavigate();

  const handelChange = (e) => {
    setDisable(false);
    setprocess(false);
    setSuccess(false);
    setError(error ? error : "");
  };

  useEffect(() => {
    axiosStripe({
      method: "post",
      url: `/payments/create?total=${parseFloat(total.toFixed(2))}`,
    })
      .then((res) => setClientSecret(res.data.clientSecret))
      .catch((err) => alert(err.message));
  }, [products, total]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (total === 0) {
      return;
    }
    if (!stripe || !elements) {
      return;
    }
    setDisable(true);
    setprocess(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSuccess(true);
        setprocess(false);
        const docRef = doc(db, "user", user?.uid, "courses", paymentIntent.id);
        setDoc(docRef, {
          email: user.email,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
          courses: products,
        });
        dispatch({ type: "CLEAR_CART" });
        navigate("/payment-success", { replace: true });
      })
      .catch((err) => setError(err.message));

    return payload;
  };

  return (
    <form className="w-[900px] max-w-full mx-auto " onSubmit={handleSubmit}>
      <CardElement onChange={handelChange} />
      <button
        className="btn bg-primary-400 w-full my-3 p-3"
        disabled={disable || process || success}
      >
        {process ? "Processing" : "Submit"}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default PaymentForm;
