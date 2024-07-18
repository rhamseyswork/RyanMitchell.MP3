import { useState } from 'react';
import styles from './SignupForm.module.css';
import { useDispatch } from 'react-redux';
import { useSignupMutation, useLogoutMutation } from '../../slices/newsLetterApiSlice.js';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [signUp] = useSignupMutation();
    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(false);
    const [phone, setPhone] = useState('');


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (event) => {
        let input = event.target.value.replace(/\D/g, ''); // Remove non-digit characters

        // Limit input to 10 digits
        if (input.length > 10) {
            input = input.slice(0, 10);
        }

        // Format the phone number with parentheses and dashes
        let formattedPhoneNumber = '';
        if (input.length >= 3) {
            formattedPhoneNumber = `(${input.slice(0, 3)}`;
        }
        if (input.length > 3) {
            formattedPhoneNumber += `) ${input.slice(3, 6)}`;
        }
        if (input.length > 6) {
            formattedPhoneNumber += `-${input.slice(6, 10)}`;
        }

        // Update both formData.phone and phone state
        setFormData({ ...formData, phone: input });
        setPhone(formattedPhoneNumber); // Update the state with formatted phone number
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (disableSubmit) return;

        setIsSubmitting(true);
        setDisableSubmit(true);

        // Split the name into first and last name
        const nameParts = formData.name.trim().split(' ');
        if (nameParts.length < 2) {
            alert('Please enter both first and last name.');
            setIsSubmitting(false);
            setDisableSubmit(false);
            return;
        }

        const [firstName, lastName] = nameParts;

        try {
            const newNewsLetterUser = await signUp({
                firstName, 
                lastName, 
                email: formData.email, 
                phoneNumber: formData.phone 
            }).unwrap();

            const { success, message, status } = newNewsLetterUser;
            
            if (success === true && success) {
                console.log('User successfully updated:', newNewsLetterUser.email);
                if (status === 400) {
                    console.log(message);
                    dispatch({ type: 'NEWSLETTER_USER_ALREADY_EXISTS', payload: formData.email });
                    alert('Signup failed: ' + message + '. Please contact admin to report bug.');
                }
                dispatch({ type: 'NEWSLETTER_USER_CREATED', payload: newNewsLetterUser });
                alert(message);
            } else if (status === true) {
                console.log('User successfully updated:', newNewsLetterUser.email);
                dispatch({ type: 'NEWSLETTER_USER_CREATED', payload: newNewsLetterUser });
                alert(message);
            } else {
                console.error('Unexpected response:', newNewsLetterUser);
                dispatch({ type: 'NEWSLETTER_USER_SIGNUP_ERROR', payload: newNewsLetterUser });
                alert('An unexpected error occurred. Please try again later.');
            }

            await logout(); // Clear cookie after signup

            // Clear form fields after submission
            setFormData({ name: '', email: '', phone: '' });

        } catch (error) {
            console.error('Error during signup:', error);
            if (error.code === 'ENOTFOUND') {
                alert('Error: Unable to connect to required services. Please check your network connection.\n conatct admin');
            }
            else if (error.response.status >= 500 && error.response.status < 600) {
                alert('Server error. Please try again later.');
            }
            else if (error.response.status === 400) {
                alert('Invalid data submitted. Please check your inputs and try again.');
            } else {
                alert('An unexpected error occurred. Please try again later.\n conatct admin');
            }
            dispatch({ type: 'NEWSLETTER_USER_SIGNUP_ERROR', payload: error });
        } finally {
            const timeoutDuration = process.env.NODE_ENV != 'development' ? 1000 : 15000;
            setTimeout(() => {
                setIsSubmitting(false);
                setDisableSubmit(false);
            }, timeoutDuration);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Sign Up to get the latest News & Releases</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    placeholder="Your First & Last Name (e.g., Firstname Lastname)"
                    value={formData.name}
                    onChange={handleInputChange}
                    pattern="[a-zA-Z]+ [a-zA-Z]+"
                    required
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email (e.g., john@example.com)"
                    value={formData.email}
                    onChange={handleInputChange}
                    pattern="[a-zA-Z]{4,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}"
                    required
                />
                <br />
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number (e.g., (555) 123-4567)"
                    value={phone}
                    pattern="[0-9 ()-]*"
                    onChange={handlePhoneChange}
                    inputMode="numeric" // This can also help with mobile keyboards
                />
                <button type="submit" disabled={isSubmitting || disableSubmit}>
                    {isSubmitting ? 'Submitting...' : 'Signup'}
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
