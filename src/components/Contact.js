import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <h2 className="contact__title">Contact Me</h2>
        <p className="contact__text">Feel free to get in touch with me:</p>
        <form className="contact__form">
          {/* Add your form fields here */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
