import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import "./App.css";
import AuthState from "./context/auth/AuthState";
import Dashboard from "./Dashboard";
import Home from "./Home";
import NavBar from "./NavBar";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <AuthState>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              {" "}
              <Home />
            </Route>
            <PrivateRoute exact path="/profile">
              {" "}
              <Profile />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/about">
              {" "}
              <About />
            </Route>
          </Switch>
        </div>
      </AuthState>
    </BrowserRouter>
  );
}

export default App;
