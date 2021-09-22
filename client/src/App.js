import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";


// Styles
import "./app.scss";
import "bootstrap/dist/css/bootstrap.css";
import "./css/responsive.css";
import "./css/style.css";

// Components
import { Container, Nav, Navbar } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Customer } from "./section/Customer";
import { Tab } from "./components/Header/Tab";
import { Order } from "./section/Order";
import { Product } from "./section/Product";
import { Supplies } from "./section/Supplies";
import { RegisterForm } from "./section/RegisterForm";
import { LoginForm } from "./section/LoginForm";
import { Home } from "./section/Home";
import { Store } from "./section/Store";

function App() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('Products');
  const loggedIn = useSelector(state => state.token.loggedIn);
  const logout = () => {
    dispatch({type: 'LOGOUT'});
    return <Redirect to='/'/>;
  };
  return (
    <div className = "app">
    <Router>
      <Navbar bg="primary" variant="dark" sticky="top" style={{width: '100%'}}>
        <Container>
          <Navbar.Brand href="/">ModernSell</Navbar.Brand>
          <Nav className="me-auto" style={{width: '100%'}}>
            {loggedIn ? <Nav.Link href="/admin">Admin</Nav.Link>
                      : <Nav.Link href="/login">Login</Nav.Link>
            }
            {loggedIn && <Nav.Link onClick={logout}>Logout</Nav.Link>}
            <Nav.Link href="#contact" style={{position: 'absolute', right: 0}}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route exact path="/products">
          <Store />
        </Route>
        <Route exact path="/admin">
          <Container>
            <Header tabs = {['Products', 'Orders', 'Customers', 'Supplies']} selected = {selected} setSelected = {(tab) => setSelected(tab)}>
              <Tab isSelected = {selected === 'Products'}>
                <Product />
              </Tab>
              <Tab isSelected = {selected === 'Orders'}>
                <Order />
              </Tab>
              <Tab isSelected = {selected === 'Customers'}>
                <Customer />
              </Tab>
              <Tab isSelected = {selected === 'Supplies'}>
                <Supplies />
              </Tab>
            </Header>
          </Container>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>      
      <Footer />
    </div>
  );
}

export default App;
