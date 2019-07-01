import React, { Component } from 'react';

// CSS
import '../../css/Contact.scss';

function Contact() {
	return (
		<div className="contact">
			<h2>Contact Page</h2>
			<form className="contact__form">
				<input className="contact__form-email" type="text" name="email" />
				<textarea name="contact__form-message" rows="10" cols="30" />
			</form>
		</div>
	)
}

export default Contact;
