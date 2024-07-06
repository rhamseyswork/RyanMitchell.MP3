import React, {useState} from 'react';
import styles from './SignupForm.module.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here, e.g., send data to server, clear form, etc.
        console.log('Form submitted with:', formData);
        // Clear form fields after submission
        setFormData({ name: '', email: '' });
      };

  return (
    <div className={styles.container}>
        <h2>Sign Up to get the latest News & Releases</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignupForm