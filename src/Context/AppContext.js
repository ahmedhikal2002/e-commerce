import { createContext, useContext, useReducer } from "react";
import { AppReducer, intialstate } from "./AppReducer";

const appContext = createContext();

const ContextProvider = ({ children }) => {
 
  const [state, dispatch] = useReducer(AppReducer, intialstate); 
  return (
    <appContext.Provider
      value={{
        products: state.products,
        user: state.user,
        dispatch: dispatch,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(appContext);
};

export default ContextProvider;
