import React, { useRef, useState } from "react";
import Google from "../assets/google.svg";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useAppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { Auth, Provider } from "../firebase";
function Login() {
  const { dispatch } = useAppContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfrimRef = useRef();
  const [error, setError] = useState("");
  const [logedin, setLogedin] = useState(false);
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordconfrimRef.current.value) {
      setError("password confrim is wrong ");
      passwordconfrimRef.current.className = "password-error";
    } else {
      setLogedin(true);
    
      await createUserWithEmailAndPassword(
        Auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((authuser) => {
          dispatch({ type: "SET_USER", user: authuser });
          navigate("/", { replace: true });
        })
        .catch((err) =>{ setError(err.message); alert(err.message) });
    }
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
        <div className="flex flex-col gap-3 ">
          <h3>Sign Up</h3>
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
          <input type="email" id="email" ref={emailRef} autoComplete="off" />
          <label htmlFor="password" className="block my-1">
            Password
          </label>
          <input type="password" id="password" ref={passwordRef} required />
          <label htmlFor="password-con" className="block my-1">
            Password Confirm
          </label>
          <input type="password" id="password-con" ref={passwordconfrimRef} />
          {error && <div className="error">{error}</div>}
          <button className="btn submit" disabled={logedin}>
            Submit
          </button>
        </form>
        <div className="mt-5">
          Have an account?
          <Link className="text-blue-500 ml-1" to="/login">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
