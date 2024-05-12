import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

function RedirectPath({ children }) {
  const { user } = useAppContext();
  const location = useLocation();
  if (user === null) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
}

export default RedirectPath;
