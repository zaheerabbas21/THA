import { useContext } from "react";
import { Redirect, Route } from "react-router-dom"
import AuthContext from "./context/auth/authContext";

const PrivateRoute = ({children, ...rest}) => {
    const authContext = useContext(AuthContext);
    const {isLoggedIn} = authContext;
    return (
        <Route {...rest}
        render = {() => ( 
            isLoggedIn ? children : <Redirect to='/'/>
        )}
        />
    )
}

export default PrivateRoute;