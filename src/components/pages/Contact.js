import React, { Component } from 'react';

// CSS
import '../../css/Contact.scss';

function Contact() {
	return (
		<div className="contact">
			<div className="contact__img"></div>
			<h1 clasName="contact__h1">Contact Me</h1>
			<form className="contact__form">
				<input className="contact__form-email" type="email" name="email" placeholder="Email Address" />
				<textarea className="contact__form-message" rows="10" cols="30" placeholder="Message" />
			</form>
		</div>
	)
}

export default Contact;
