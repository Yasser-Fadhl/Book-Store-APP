import React from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Login from "./components/login /login";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Error from "./components/ErrorPage/Error";
import BookStore from "./components/bookStore/bookStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="top">
        <Header />
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact component={Body} />
        <Route path="/books" component={BookStore} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={Login} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
