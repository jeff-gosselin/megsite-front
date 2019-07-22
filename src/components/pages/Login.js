import React, { Component } from 'react';

// CSS
import '../../css/Login.scss';

function Login() {
	return (
		<div className="login">
			<div className="login__profile-label">
				<div className="login__img"></div>
				<h1 clasName="login__h1">Admin Login</h1>
			</div>

			<form className="login__form">
				<input className="login__form-username" type="text" name="username" placeholder="Username" />
				<input className="login__form-password" type="password" placeholder="Password" />
			</form>
		</div>
	)
}

export default Login;
