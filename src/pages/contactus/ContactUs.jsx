import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact/contact', formData);
            toast.success(response.data.message || 'Form submitted successfully');
            setFormData({ firstName: '', middleName: '', lastName: '', email: '', message: '' });
        } catch (error) {
            toast.error((error.response && error.response.data && error.response.data.message) || 'Error submitting form');
        }
    };

    return (
        <div>
            <div className="contact-container">
                <div className="contact-us">
                    <h2>Contact Medico</h2>
                    <p>
                        For inquiries on healthcare services, please leave a message and we will get back to you within 24 hours. We look forward to hearing from you!
                    </p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
                            <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} />
                            <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="btn-submit">Send Message</button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};

export default Contact;
