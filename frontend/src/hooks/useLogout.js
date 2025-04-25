import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const logout = async () => {
        // remove user from storage
        localStorage.removeItem("user");
        // dispatch logout action
        dispatch({ type: "LOGOUT" });
    };
    return {logout};
}