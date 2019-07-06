import React, { Component } from 'react';

// CSS
import '../../css/Contact.scss';

function Contact() {
	return (
		<div className="contact">
			<h2>Contact Page</h2>
			<form className="contact__form">
				<input className="contact__form-email" type="email" name="email" placeholder="Email Address" />
				<textarea className="contact__form-message" rows="10" cols="30" placeholder="Message" />
			</form>
		</div>
	)
}

export default Contact;
