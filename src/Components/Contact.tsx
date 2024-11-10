'use client'
import React from 'react'
import { motion } from 'framer-motion'; // Correct import for motion
import "../style/contact.css";

const Contact = () => {
  // State to handle form input values
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Clear form inputs on button click
  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <main className="container-main">
      <div className="fore-container">
        <h1 className="cont-title">Contact Us</h1>
        <form action="" className="form">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            className='msg'
            placeholder="Description"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </form>

        <motion.button
          type="button"
          className="btn-sub"
          onClick={clearForm}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </div>
    </main>
  );
};

export default Contact;
