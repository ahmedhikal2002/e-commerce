import Logo from "../assets/logo.svg";
import Bars from "../assets/bars.svg";
import ProfileImg from "../assets/profile.png";
import { Fragment, useState } from "react";
import MenuSection from "./MenuSection";
import { Link, NavLink } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import Profile from "../Components/Profile";
import CartMenue from "../Cart/CartMenue";

function Header() {
  const { user, products } = useAppContext();
  const [openedMenue, setOpenedMenue] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [linkActive, setLinkActive] = useState("home");

  const ToggleMenue = () => {
    setOpenedMenue(!openedMenue);
  };
  const MYactiveLink = (link) => {
    setLinkActive(link);
  };
  const toggleProfile = () => {
    setOpenProfile(!openProfile);
  };
  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <>
      <header className=" my-header   ">
        <div className="container  ">
          <div className="header ">
            <div className=" flex items-center gap-5">
              <img className="avater " src={Logo} alt="logo" />
              <nav className="hidden sm:block">
                <ul className="flex gap-4 items-center font-medium">
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => MYactiveLink("home")}
                      className={`${
                        linkActive === "home" ? `text-primary-700` : "nav-links"
                      }${linkActive === "home" ? `dark:text-white` : ""}  `}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li
                    onClick={() => MYactiveLink("explore")}
                    className={`${
                      linkActive === "explore"
                        ? `text-primary-700`
                        : "nav-links"
                    }${linkActive === "explore" ? `dark:text-white` : ""}`}
                  >
                    <NavLink to="/">Explore</NavLink>
                  </li>
                  <li
                    onClick={() => MYactiveLink("projects")}
                    className={`${
                      linkActive === "projects"
                        ? `text-primary-700`
                        : "nav-links"
                    }${linkActive === "projects" ? `dark:text-white` : ""}`}
                  >
                    <NavLink to="/">Projects</NavLink>
                  </li>
                  <li
                    onClick={() => MYactiveLink("about")}
                    className={`${
                      linkActive === "about" ? `text-primary-700` : "nav-links"
                    }${linkActive === "about" ? `dark:text-white` : ""}`}
                  >
                    <NavLink to="/">About Us</NavLink>
                  </li>
                  <li
                    onClick={() => MYactiveLink("contact")}
                    className={`${
                      linkActive === "contact"
                        ? `text-primary-700`
                        : "nav-links"
                    }${linkActive === "contact" ? `dark:text-white` : ""}`}
                  >
                    <NavLink to="/">Contact Us</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex gap-3 items-center">
              {user ? (
                <div className="user">
                  <div className="flex gap-1">
                    <svg
                      onClick={toggleCart}
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="currentColor"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    <p>({products?.length})</p>
                  </div>
                  <div
                    className="w-fit cursor-pointer "
                    onClick={toggleProfile}
                  >
                    {user?.photoURL ? (
                      <img
                        className="avater rounded-full"
                        src={user.photoURL}
                        alt="profile"
                      />
                    ) : (
                      <img
                        className="avater rounded-full"
                        src={ProfileImg}
                        alt="profile"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="user">
                  <button className="bg-primary-400 hover:bg-primary-300 text-white btn">
                    <Link to="/login">Login</Link>
                  </button>
                  <button className="resgister btn text-gray-900 dark:text-white">
                    <NavLink to="/register">Register</NavLink>
                  </button>
                </div>
              )}
              <div
                className="block sm:hidden cursor-pointer ml-auto w-fit  "
                onClick={ToggleMenue}
              >
                <img
                  className="avater resgister btn p-0 "
                  src={Bars}
                  alt="menue"
                />
              </div>
            </div>
          </div>
          
        </div>
 
        <Fragment>{openedMenue ? <MenuSection /> : ""}</Fragment>
      </header>
      <Fragment>{openProfile && <Profile />}</Fragment>
      {products.length > 0 && <Fragment>{openCart && <CartMenue />}</Fragment>}
    </>
  );
}

export default Header;
