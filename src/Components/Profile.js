import React from "react";
import { useAppContext } from "../Context/AppContext";
import ProfileImg from "../assets/profile.png";
import Logout from "../assets/logout.png";
import { signOut } from "firebase/auth";
import { Auth } from "../firebase";
import { useNavigate } from "react-router-dom";
function Profile() {
  const { user } = useAppContext();
  const navigate = useNavigate();

  const logout = () => {
    signOut(Auth);
    navigate("/login");
  };
  console.log(user);
  return (
    <section className="w-[322px] rounded-lg absolute top-20 right-10 sm:right-14 p-5 bg-white shadow-md dark:bg-gray-800 z-[2]">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        {user?.displayName ? <p>{user.displayName}</p> : ""}
      </div>
      <div className="flex items-center  gap-5 border-b border-gray-200 dark:border-gray-700 py-4">
        {user?.photoURL ? (
          <img
            className="avater rounded-full"
            src={user.photoURL}
            alt="Profile_image"
          />
        ) : (
          <img
            className=" avater rounded-full"
            src={ProfileImg}
            alt="profile_image"
          />
        )}
        <p>{user.email}</p>
      </div>
      <div
        className="w-fit mt-4 flex items-center gap-5 cursor-pointer"
        onClick={logout}
      >
        <img className="w-7 h-7" src={Logout} alt="signout" />
        Sign out
      </div>
    </section>
  );
}

export default Profile;
