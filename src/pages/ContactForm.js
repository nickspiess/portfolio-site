import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});


  const SERVICE_ID = "service_5e4f1be";
  const TEMPLATE_ID = "template_9dkquwn";
  const USER_ID = "VPkdzprTCBDdiUbQI";

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission - send data to backend for email sending
      // You will need to implement the email sending functionality on the backend
      // using libraries or services like nodemailer or SendGrid

      // Clear form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');

      // Display success message or handle any other post-submission actions
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding state based on the input field name
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const validateInputs = () => {
    const errors = {};

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name.trim()) {
      errors.name = 'Name is required';
    } else if (!nameRegex.test(name)) {
      errors.name = 'Name must contain letters only';
    }

    if (!message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(e)
    const contactMsg = {
      name: name,
      message: message,
      email: email,
      phone: phone,
    };

    const jsonQuoteData = JSON.stringify(contactMsg);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          console.log(result.text);
          Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
          })
          // Reset form fields
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
      }, (error) => {
          console.log(error.text);
          Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text,
          })
      });

    e.target.reset()
    setFormStatus('Submitting...')   
}

  return (
    <>
    <section className={styles.sectionContainer} id='contact'>
    <article className={styles.container}>
    <header className={styles.head}>
      <h2 className={styles.contactHeader}>Let's Build Something</h2> 
    </header>
      <form onSubmit={onSubmit} className={styles.contactForm}>

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.name ? styles.invalid : ''}`}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.email ? styles.invalid : ''}`}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
            className={`${styles.messageInput} ${errors.message ? styles.invalid : ''}`}
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
      </article>
      </section>
    </>
  );
};

export default ContactForm;
