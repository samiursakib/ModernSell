import React, { useState } from "react";
import { useHistory } from "react-router";
import { authorizeCustomer } from "../app/api";
import { useDispatch } from "react-redux";

export const LoginForm = (props) => {
  const dispatch = useDispatch();
	const history = useHistory();
  const [errorOccured, setErrorOccured] = useState(false);
	const [state, setState] = useState({
		email: '',
		password: ''
	});
	const handleChange = e => {
    const { name, value } = e.target;
    setState({...state, [name]: value});
  };

  const handleSubmit = () => {
    const { email, password } = state;
    authorizeCustomer(email, password)
      .then(res => {
        console.log(res.data[0]);
        dispatch({ type: 'LOGIN', data: res.data[0].id});
        if(res.data.length) history.push('/products');
        else {
          setErrorOccured(true);
        }
			})
      .catch(error => {
        console.log(error);
      });
  };

return (
	<div>
		<div className="login-form">
			<h2>Login</h2>
			<div className="form-group ">
				<input
					type="text"
					className="form-control"
					placeholder="Email "
					id="UserName"
					name="email"
					value={state.email}
					onChange={handleChange}
					autoComplete="false"
				/>
				<i className="fa fa-user"></i>
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
				Log in
			</button>
      {errorOccured && <p style={{color: 'lightpink'}}>Username or password didn't match!</p>}
			<div
				onClick={() => history.push('/register')}
				style={{
					textAlign: "center",
					fontSize: 12,
					color: "#c4c4c4",
					cursor: "pointer"
				}}
			>
				New user ? Please Register
			</div>
		</div>
	</div>
	);
};