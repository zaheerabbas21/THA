import { useEffect, useReducer } from "react";
import { LOGIN_SUCCESS, LOGOUT, SET_LOADING } from "../types";
import authContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = ({children}) => {
  const initialState = {
    isLoggedIn: false,
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const setLoading = (state) => {
    dispatch({
      type: SET_LOADING,
      payload: state,
    });
  };

  const login = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    dispatch({
      type: LOGIN_SUCCESS,
    });
  };

  const logout = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    dispatch({
      type: LOGOUT,
    });
  };

  useEffect(() => {
    new Promise((r) => setTimeout(r, 1000)).then(() => {
      setLoading(false);
    });
  });

  return (
    <authContext.Provider
      value={{
        loading: state.loading,
        isLoggedIn: state.isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
