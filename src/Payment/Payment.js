import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

  const option = {
    mode: "payment",
    currency: "usd",
    amount: 100,
  };
  return (
    <section className="p-3 md:p-0 h-[400px] ">
      <div className="container h-full flex justify-center items-center  ">
        <Elements stripe={stripePromise} options={option}>
          <PaymentForm />
        </Elements>
      </div>
    </section>
  );
}

export default Payment;
