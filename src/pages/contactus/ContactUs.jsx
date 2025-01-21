// import axios from 'axios';
// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Contact.css';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         middleName: '',
//         lastName: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/contact/contact', formData);
//             toast.success(response.data.message || 'Form submitted successfully');
//             setFormData({ firstName: '', middleName: '', lastName: '', email: '', message: '' });
//         } catch (error) {
//             toast.error((error.response && error.response.data && error.response.data.message) || 'Error submitting form');
//         }
//     };

//     return (
//         <div>
//             <div className="contact-container">
//                 <div className="contact-us">
//                     <h2>Contact Medico</h2>
//                     <p>
//                         For inquiries on healthcare services, please leave a message and we will get back to you within 24 hours. We look forward to hearing from you!
//                     </p>
//                     <form className="contact-form" onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
//                             <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} />
//                             <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
//                         </div>
//                         <div className="form-group">
//                             <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
//                         </div>
//                         <div className="form-group">
//                             <textarea name="message" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>
//                         </div>
//                         <button type="submit" className="btn-submit">Send Message</button>
//                     </form>
//                 </div>
//             </div>
//             <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
//         </div>
//     );
// };

// export default Contact;

import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <div className="contact-container" style={styles.contactContainer}>
                <div className="contact-us" style={styles.contactUs}>
                    <h2 style={styles.heading}>Contact Medico</h2>
                    <p style={styles.paragraph}>
                        For inquiries on healthcare services, please leave a message and we will get back to you within 24 hours. We look forward to hearing from you!
                    </p>
                    <form className="contact-form" onSubmit={handleSubmit} style={styles.form}>
                        <div className="form-group" style={styles.formGroup}>
                            <input 
                                type="text" 
                                name="firstName" 
                                placeholder="First Name" 
                                required 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                style={styles.input}
                            />
                            <input 
                                type="text" 
                                name="middleName" 
                                placeholder="Middle Name" 
                                value={formData.middleName} 
                                onChange={handleChange} 
                                style={styles.input}
                            />
                            <input 
                                type="text" 
                                name="lastName" 
                                placeholder="Last Name" 
                                required 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                style={styles.input}
                            />
                        </div>
                        <div className="form-group" style={styles.formGroup}>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                required 
                                value={formData.email} 
                                onChange={handleChange} 
                                style={styles.input}
                            />
                        </div>
                        <div className="form-group" style={styles.formGroup}>
                            <textarea 
                                name="message" 
                                placeholder="Message" 
                                required 
                                value={formData.message} 
                                onChange={handleChange} 
                                style={styles.textarea}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-submit" style={styles.button}>Send Message</button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
};

const styles = {
    contactContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://images.pexels.com/photos/7904481/pexels-photo-7904481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Replace with the URL of your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    },
    contactUs: {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
    },
    heading: {
        color: '#1e3a8a',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    paragraph: {
        color: '#4b5563',
        fontSize: '16px',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #d1d5db',
        borderRadius: '4px',
        fontSize: '14px',
        outline: 'none',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #d1d5db',
        borderRadius: '4px',
        fontSize: '14px',
        height: '150px',
        outline: 'none',
    },
    button: {
        padding: '12px 20px',
        backgroundColor: '#1e3a8a',
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }
};

export default Contact;

