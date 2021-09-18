import React from "react";
import "./day-27.css";

import store from "./store";
import { Provider } from "react-redux";

import Footer from "../footer/Footer";

import AddTodo from "./components/AddTodo.component";
import ListTodo from "./components/ListTodo.component";

const Day27 = () => {
  return (
    <Provider store={store}>
      <div className="day27">
        <h1>Hemlo</h1>
        <h3>Welcome to yet another todo list</h3>
        <AddTodo />
        <ListTodo />
        <Footer />
      </div>
    </Provider>
  );
};

export default Day27;
