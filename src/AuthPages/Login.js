import React, { useRef, useState } from "react";
import Google from "../assets/google.svg";
import { useAppContext } from "../Context/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Auth, Provider } from "../firebase";

function Login() {
  const { dispatch } = useAppContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const [logedin, setLogedin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location?.state?.path || "/";

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLogedin(true);
    await signInWithEmailAndPassword(
      Auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authuser) => {
        dispatch({ type: "SET_USER", user: authuser });
        navigate(redirect, { replace: true });
      })
      .catch((err) => {
        alert(err.message);
        setError(err.message);
      });

    setLogedin(false);
  };

  const googleAuth = async () => {
    setLogedin(true);
    await signInWithPopup(Auth, Provider)
      .then((authuser) => {
        dispatch({ type: "SET_USER", user: authuser });
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        alert(err.message);
      });
    setLogedin(false);
  };
  return (
    <div className="auth">
      <div className="auth-container">
        {error && <p className="error">{error}</p>}
        <div className="flex flex-col gap-3 ">
          <h3>Sign in</h3>
          <p className="font-normal text-gray-500">
            to continue to ecommerce user
          </p>
          <button
            className="google btn"
            disabled={logedin}
            onClick={googleAuth}
          >
            <img className="w-6 h-6" src={Google} alt="google" />
            Continue With Google
          </button>
          <div className="flex items-center justify-between">
            <div className="line"></div>
            <p className="self-center ">or</p>
            <div className="line"></div>
          </div>
        </div>
        <form className="w-[400px] max-w-full" onSubmit={handelSubmit}>
          <label htmlFor="email" className="block my-1">
            Email address
          </label>
          <input type="email" id="email" ref={emailRef} autoComplete="off"/>
          <label htmlFor="password" className="block my-1">
            Password
          </label>
          <input type="password" id="password" ref={passwordRef}  required/>
          <button className="btn submit" disabled={logedin}>
            Submit
          </button>
        </form>
        <div className="mt-5">
          no account?
          <Link className="text-blue-500 ml-1" to="/register">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
