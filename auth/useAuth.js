// Adapted from [1] Hamedani, M. (2023). The Ultimate React Native Series. CodeWithMosh. [Accessed] August, 2023. [Available] codewithmosh.com.

import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";




export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logIn = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        authStorage.storeToken(authToken);
    };

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    };

    return { user, logIn, logOut };
};

