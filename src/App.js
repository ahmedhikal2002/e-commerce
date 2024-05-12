import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Courses from "./Courses/Courses";
import Header from "./Header/Header";
import CourseDetails from "./CourseDetails/CourseDetails";
import { useEffect } from "react";
import Login from "./AuthPages/Login";
import Register from "./AuthPages/Register";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "./firebase";
import { useAppContext } from "./Context/AppContext";
import Cart from "./Cart/Cart";
import RedirectPath from "./Components/RedirectPath";
import Payment from "./Payment/Payment";
import Theme from "./Components/Theme";
import PaymentSuccess from "./Payment/PaymentSuccess";
import Foooter from "./Footer/Foooter";
import Orders from "./Orders/Orders";

function App() {
  const { user, dispatch } = useAppContext();
  useEffect(() => {
    onAuthStateChanged(Auth, (authuser) => {
      if (authuser) {
        dispatch({ type: "SET_USER", user: authuser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, [user]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Theme />
                <Hero />
                <Courses />
                <Foooter />
              </>
            }
          />
          <Route
            path="/course-details/:id"
            element={
              <>
                <Header />
                <Theme /> <CourseDetails /> <Foooter />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Theme />
                <RedirectPath>
                  <Cart />
                </RedirectPath>
                <Foooter />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Theme />
                <RedirectPath>
                  <Payment />
                </RedirectPath>
                <Foooter />
              </>
            }
          />
          <Route
            path="/payment-success"
            element={
              <>
                <Header /> <Theme />
                <RedirectPath>
                  <PaymentSuccess />
                </RedirectPath>
                <Foooter />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Theme />
                <Orders />
                <Foooter />
              </>
            }
          />
          <Route
            path="*"
            element={
              <h1 className="text-2xl font-bold text-center mt-10">
                Page Not Found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
