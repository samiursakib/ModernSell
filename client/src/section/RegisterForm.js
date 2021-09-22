import React, { Component, useState } from "react";
import { registerCustomer } from '../app/api';
import { Redirect, useHistory } from "react-router";

export const RegisterForm = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    address: ""
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    const { name, email, password, address } = state;
    registerCustomer(name, email, password, address)
      .then(res => {
        console.log(res);
        history.push('/');
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <div className="login-form">
        <h2>Register</h2>
        <div className="form-group ">
          <input
            type="text"
            className="form-control"
            placeholder="Name "
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
            autoComplete="false"
          />
          <i className="fa fa-user"></i>
        </div>
        <div className="form-group ">
          <input
            type="text"
            className="form-control"
            placeholder="Email "
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            autoComplete="false"
          />
          <i className="fa fa-envelope"></i>
        </div>
        <div className="form-group log-status">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            id="Passwod"
            name="password"
            value={state.password}
            onChange={handleChange}
            autoComplete="false"
          />
          <i className="fa fa-lock"></i>
        </div>
        <button
          type="button"
          className="log-btn"
          onClick={() => handleSubmit()}
        >
          Register
        </button>
        <div
          onClick={() => history.push('/login')}
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "#c4c4c4",
            cursor: "pointer"
          }}
        >
          Already have an account ? Please login.
        </div>
      </div>
    </div>
  );
}