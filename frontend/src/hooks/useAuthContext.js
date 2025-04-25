import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
}
// This custom hook allows you to access the authentication context in your components.
// It uses the useContext hook to get the context value and throws an error if used outside of the AuthContextProvider.
