import React, { useState } from 'react';
import { registerUserApi } from '../../apis/Api';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!firstName.trim()) validationErrors.firstName = 'First Name is required.';
    if (!lastName.trim()) validationErrors.lastName = 'Last Name is required.';
    if (!email.trim()) validationErrors.email = 'Email is required.';
    else if (!emailRegex.test(email)) validationErrors.email = 'Invalid email format.';
    if (!phone.trim()) validationErrors.phone = 'Phone number is required.';
    else if (!phoneRegex.test(phone)) validationErrors.phone = 'Phone number must be 10 digits.';
    if (!password.trim()) validationErrors.password = 'Password is required.';
    else if (password.length < 6) validationErrors.password = 'Password must be at least 6 characters.';
    if (!confirmPassword.trim()) validationErrors.confirmPassword = 'Confirm Password is required.';
    else if (confirmPassword !== password) validationErrors.confirmPassword = 'Passwords do not match.';

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = { firstName, middleName, lastName, email, phone, password };

    registerUserApi(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => {
        toast.error('An error occurred. Please try again.');
      });
  };

  // Styles as JavaScript objects
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#F9F9F9',
    },
    box: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '850px',
      background: '#ffffff',
      border: '2px solid #0056D2',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    image: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: '300px',
      marginRight: '15px',
      marginTop: '-60px',
    },
    imageImg: {
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
    },
    formContainer: {
      flex: 1,
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    header: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#0056D2',
      marginBottom: '15px',
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '10px',
      display: 'flex',
      gap: '5px',
    },
    input: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '12px',
    },
    errorText: {
      color: '#ff0000',
      fontSize: '12px',
      margin: '5px 0 0',
      textAlign: 'left',
    },
    submitButton: {
      width: '100%',
      padding: '8px',
      backgroundColor: '#0056D2',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '5px',
    },
    alreadyAccount: {
      textAlign: 'center',
      marginTop: '10px',
      fontSize: '12px',
    },
  };

  return (
    <div style={styles.container}>
      <Toaster />
      <div style={styles.box}>
        <div style={styles.image}>
          <img style={styles.imageImg} src="/assets/images/login.png" alt="Register" />
        </div>
        <div style={styles.formContainer}>
          <h2 style={styles.header}>Welcome to Medico</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <div>
                <input
                  style={styles.input}
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <p style={styles.errorText}>{errors.firstName}</p>}
              </div>
              <div>
                <input
                  style={styles.input}
                  type="text"
                  placeholder="Middle Name"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
              <div>
                <input
                  style={styles.input}
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <p style={styles.errorText}>{errors.lastName}</p>}
              </div>
            </div>
            <div style={styles.inputGroup}>
              <input
                style={styles.input}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && <p style={styles.errorText}>{errors.email}</p>}
            <div style={styles.inputGroup}>
              <input
                style={styles.input}
                type="text"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}
            <div style={styles.inputGroup}>
              <input
                style={styles.input}
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && <p style={styles.errorText}>{errors.password}</p>}
            <div style={styles.inputGroup}>
              <input
                style={styles.input}
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {errors.confirmPassword && <p style={styles.errorText}>{errors.confirmPassword}</p>}
            <button
              style={styles.submitButton}
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div style={styles.socialIcons}>
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <p style={styles.alreadyAccount}>
            Already have an account? <a href="/login">Sign in Now.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;




// import React, { useState } from 'react';
// import { registerUserApi } from '../../apis/Api';
// import { toast } from 'react-toastify';
// import './Registerpage.css';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [middleName, setMiddleName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const validationErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10}$/;

//     if (!firstName.trim()) validationErrors.firstName = 'First Name is required.';
//     if (!lastName.trim()) validationErrors.lastName = 'Last Name is required.';
//     if (!email.trim()) validationErrors.email = 'Email is required.';
//     else if (!emailRegex.test(email)) validationErrors.email = 'Invalid email format.';
//     if (!phone.trim()) validationErrors.phone = 'Phone number is required.';
//     else if (!phoneRegex.test(phone)) validationErrors.phone = 'Phone number must be 10 digits.';
//     if (!password.trim()) validationErrors.password = 'Password is required.';
//     else if (password.length < 6) validationErrors.password = 'Password must be at least 6 characters.';
//     if (!confirmPassword.trim()) validationErrors.confirmPassword = 'Confirm Password is required.';
//     else if (confirmPassword !== password) validationErrors.confirmPassword = 'Passwords do not match.';

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const data = { firstName, middleName, lastName, email, phone, password };

//     registerUserApi(data)
//       .then((res) => {
//         if (res.data.success) {
//           toast.success(res.data.message);
//         } else {
//           toast.error(res.data.message);
//         }
//       })
//       .catch(() => {
//         toast.error('An error occurred. Please try again.');
//       });
//   };

//   return (
//     <div className="register-container">
//       <div className="register-box">
//         <div className="register-image">
//           <img src="/assets/images/login.png" alt="Register" />
//         </div>
//         <div className="register-form-container">
//           <h2>Welcome to Medico</h2>
//           <form className="register-form" onSubmit={handleSubmit}>
//             <div className="input-row">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Middle Name"
//                   value={middleName}
//                   onChange={(e) => setMiddleName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//                 {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
//               </div>
//             </div>
//             <div className="input-group input-with-icon">
//               <i className="fas fa-envelope icon"></i>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             {errors.email && <p className="text-danger">{errors.email}</p>}
//             <div className="input-group input-with-icon">
//               <i className="fas fa-phone icon"></i>
//               <input
//                 type="text"
//                 placeholder="Phone number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//             {errors.phone && <p className="text-danger">{errors.phone}</p>}
//             <div className="input-group input-with-icon">
//               <i className="fas fa-lock icon"></i>
//               <input
//                 type="password"
//                 placeholder="Create password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             {errors.password && <p className="text-danger">{errors.password}</p>}
//             <div className="input-group input-with-icon">
//               <i className="fas fa-lock icon"></i>
//               <input
//                 type="password"
//                 placeholder="Confirm password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </div>
//             {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
//             <button type="submit" className="btn-submit">Sign Up</button>
//           </form>
//           <p className="or-signup">Or Sign Up With</p>
//           <div className="social-icons">
//             <i className="fab fa-google"></i>
//             <i className="fab fa-facebook"></i>
//             <i className="fab fa-twitter"></i>
//           </div>
//           <p className="already-account">
//             Already have an account? <a href="/login">Sign in Now.</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import { registerUserApi } from '../../apis/Api';
// import { toast } from 'react-toastify';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [middleName, setMiddleName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const validationErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10}$/;

//     if (!firstName.trim()) validationErrors.firstName = 'First Name is required.';
//     if (!lastName.trim()) validationErrors.lastName = 'Last Name is required.';
//     if (!email.trim()) validationErrors.email = 'Email is required.';
//     else if (!emailRegex.test(email)) validationErrors.email = 'Invalid email format.';
//     if (!phone.trim()) validationErrors.phone = 'Phone number is required.';
//     else if (!phoneRegex.test(phone)) validationErrors.phone = 'Phone number must be 10 digits.';
//     if (!password.trim()) validationErrors.password = 'Password is required.';
//     else if (password.length < 6) validationErrors.password = 'Password must be at least 6 characters.';
//     if (!confirmPassword.trim()) validationErrors.confirmPassword = 'Confirm Password is required.';
//     else if (confirmPassword !== password) validationErrors.confirmPassword = 'Passwords do not match.';

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const data = { firstName, middleName, lastName, email, phone, password };

//     registerUserApi(data)
//       .then((res) => {
//         if (res.data.success) {
//           toast.success(res.data.message);
//         } else {
//           toast.error(res.data.message);
//         }
//       })
//       .catch(() => {
//         toast.error('An error occurred. Please try again.');
//       });
//   };

//   // Styles as JavaScript objects
//   const styles = {
//     container: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       backgroundColor: '#F9F9F9',
//     },
//     box: {
//       display: 'flex',
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       width: '850px',
//       background: '#ffffff',
//       border: '2px solid #0056D2',
//       padding: '15px',
//       borderRadius: '10px',
//       boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//     },
//     image: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'flex-end',
//       width: '350px',
//       marginRight: '15px',
//       marginTop: '-60px',
//     },
//     imageImg: {
//       width: '100%',
//       height: 'auto',
//       borderRadius: '5px',
//     },
//     formContainer: {
//       flex: 1,
//       padding: '10px',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//     },
//     header: {
//       fontSize: '20px',
//       fontWeight: 'bold',
//       color: '#0056D2',
//       marginBottom: '15px',
//       textAlign: 'center',
//     },
//     inputGroup: {
//       marginBottom: '10px',
//       display: 'flex',
//       gap: '5px',
//     },
//     input: {
//       width: '100%',
//       padding: '8px',
//       border: '1px solid #ccc',
//       borderRadius: '5px',
//       fontSize: '12px',
//     },
//     inputFocus: {
//       borderColor: '#0056D2',
//     },
//     errorText: {
//       color: '#ff0000',
//       fontSize: '12px',
//       margin: '5px 0 0',
//       textAlign: 'left',
//     },
//     submitButton: {
//       width: '100%',
//       padding: '8px',
//       backgroundColor: '#0056D2',
//       color: 'white',
//       border: 'none',
//       borderRadius: '5px',
//       fontSize: '14px',
//       fontWeight: 'bold',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s ease',
//     },
//     submitButtonHover: {
//       backgroundColor: '#003F88',
//     },
//     socialIcons: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '10px',
//       marginTop: '5px',
//     },
//     alreadyAccount: {
//       textAlign: 'center',
//       marginTop: '10px',
//       fontSize: '12px',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.box}>
//         <div style={styles.image}>
//           <img style={styles.imageImg} src="/assets/images/login.png" alt="Register" />
//         </div>
//         <div style={styles.formContainer}>
//           <h2 style={styles.header}>Welcome to Medico</h2>
//           <form onSubmit={handleSubmit}>
//             <div style={styles.inputGroup}>
//               <div>
//                 <input
//                   style={styles.input}
//                   type="text"
//                   placeholder="First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 {errors.firstName && <p style={styles.errorText}>{errors.firstName}</p>}
//               </div>
//               <div>
//                 <input
//                   style={styles.input}
//                   type="text"
//                   placeholder="Middle Name"
//                   value={middleName}
//                   onChange={(e) => setMiddleName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   style={styles.input}
//                   type="text"
//                   placeholder="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//                 {errors.lastName && <p style={styles.errorText}>{errors.lastName}</p>}
//               </div>
//             </div>
//             <div style={styles.inputGroup}>
//               <input
//                 style={styles.input}
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             {errors.email && <p style={styles.errorText}>{errors.email}</p>}
//             <div style={styles.inputGroup}>
//               <input
//                 style={styles.input}
//                 type="text"
//                 placeholder="Phone number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//             {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}
//             <div style={styles.inputGroup}>
//               <input
//                 style={styles.input}
//                 type="password"
//                 placeholder="Create password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             {errors.password && <p style={styles.errorText}>{errors.password}</p>}
//             <div style={styles.inputGroup}>
//               <input
//                 style={styles.input}
//                 type="password"
//                 placeholder="Confirm password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </div>
//             {errors.confirmPassword && <p style={styles.errorText}>{errors.confirmPassword}</p>}
//             <button
//               style={styles.submitButton}
//               type="submit"
//             >
//               Sign Up
//             </button>
//           </form>
//           <div style={styles.socialIcons}>
//             <i className="fab fa-google"></i>
//             <i className="fab fa-facebook"></i>
//             <i className="fab fa-twitter"></i>
//           </div>
//           <p style={styles.alreadyAccount}>
//             Already have an account? <a href="/login">Sign in Now.</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


