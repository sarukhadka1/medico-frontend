// import React, { useState } from "react";
// import { toast } from 'react-toastify';
// import { loginUserApi } from "../../apis/Api";
// import './Loginpage.css';
// import { useNavigate } from "react-router-dom";
// import 'font-awesome/css/font-awesome.min.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const navigate = useNavigate();

//     const validation = () => {
//         let isValid = true;
//         setEmailError('');
//         setPasswordError('');

//         if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
//             setEmailError("Email is empty or invalid");
//             isValid = false;
//             toast.error("Email is empty or invalid");
//         }

//         if (password.trim() === '' || password.length < 6) {
//             setPasswordError("Password is empty or less than 6 characters");
//             isValid = false;
//             toast.error("Password is empty or less than 6 characters");
//         }

//         return isValid;
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();

//         if (!validation()) {
//             return;
//         }

//         const data = {
//             "email": email,
//             "password": password
//         };

//         loginUserApi(data)
//             .then((res) => {
//                 if (res.data.success === false) {
//                     toast.error(res.data.message);
//                 } else {
//                     toast.success(res.data.message);

//                     localStorage.setItem("token", res.data.token);
//                     localStorage.setItem("user", JSON.stringify(res.data.user));

//                     const convertedUser = JSON.stringify(res.data.userData);
//                     localStorage.setItem("user", convertedUser);

//                     if (res.data.userData.isAdmin) {
//                         window.location.href = "/admin/dashboard";
//                     } else {
//                         window.location.href = "/homepage";
//                     }
//                 }
//             })
//             .catch(() => {
//                 toast.error("Login failed");
//             });
//     };

//     return (
//         <div className="login-container">
//             <div className="login-box">
//                 <div className="login-image">
//                     <img src="/assets/images/login.png" alt="Doctor Login" />
//                 </div>
//                 <div className="login-form-container">
//                     <h2 className="login-heading">Login to your Account</h2>
//                     <form>
//                         <div className="form-group">
//                             <label>Email Address:</label>
//                             <div className="input-with-icon">
//                                 <i className="icon fa fa-envelope"></i>
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email address"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className={`form-input ${emailError ? 'error-border' : ''}`}
//                                 />
//                             </div>
//                             {emailError && <p className="error-text">{emailError}</p>}
//                         </div>
//                         <div className="form-group">
//                             <label>Password:</label>
//                             <div className="input-with-icon">
//                                 <i className="icon fa fa-lock"></i>
//                                 <input
//                                     type="password"
//                                     placeholder="Enter your password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className={`form-input ${passwordError ? 'error-border' : ''}`}
//                                 />
//                             </div>
//                             {passwordError && <p className="error-text">{passwordError}</p>}
//                         </div>
//                         <button onClick={handleLogin} className="login-button">Login</button>
//                     </form>
//                     <p className="register-link">
//                         Don't have an account?{" "}
//                         <span onClick={() => navigate('/register')}>Register Now.</span>
//                     </p>

//                     <p className="forgot-password-link">
//                         Forgot your password?{" "}
//                         <span onClick={() => navigate('/forgot-password')}>Click Here</span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { toast } from 'react-toastify';
import { loginUserApi } from "../../apis/Api";
import './Loginpage.css';
import { useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const validation = () => {
        let isValid = true;
        setEmailError('');
        setPasswordError('');

        if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Email is empty or invalid");
            isValid = false;
            toast.error("Email is empty or invalid");
        }

        if (password.trim() === '' || password.length < 6) {
            setPasswordError("Password is empty or less than 6 characters");
            isValid = false;
            toast.error("Password is empty or less than 6 characters");
        }

        return isValid;
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!validation()) {
            return;
        }

        const data = {
            "email": email,
            "password": password
        };

        loginUserApi(data)
            .then((res) => {
                if (res.data.success === false) {
                    toast.error(res.data.message);
                } else {
                    toast.success(res.data.message);

                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", JSON.stringify(res.data.user));

                    const convertedUser = JSON.stringify(res.data.userData);
                    localStorage.setItem("user", convertedUser);

                    if (res.data.userData.isAdmin) {
                        window.location.href = "/admin/dashboard";
                    } else {
                        window.location.href = "/homepage";
                    }
                }
            })
            .catch(() => {
                toast.error("Login failed");
            });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-image">
                    <img src="/assets/images/login.png" alt="Doctor Login" />
                </div>
                <div className="login-form-container">
                    <h2 className="login-heading">Login to your Account</h2>
                    <form onSubmit={handleLogin}>
                        {/* Email Address Field */}
                        <div className="form-group">
                            <label className="form-label">Email Address:</label>
                            <div className="input-with-icon">
                                <i className="icon fa fa-envelope"></i>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`form-input ${emailError ? 'error-border' : ''}`}
                                />
                            </div>
                            {emailError && <p className="error-text">{emailError}</p>}
                        </div>

                        {/* Password Field */}
                        <div className="form-group">
                            <label className="form-label">Password:</label>
                            <div className="input-with-icon">
                                <i className="icon fa fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`form-input ${passwordError ? 'error-border' : ''}`}
                                />
                            </div>
                            {passwordError && <p className="error-text">{passwordError}</p>}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn-submit">Login</button>
                    </form>
                    <p className="register-link">
                        Don't have an account?{" "}
                        <span onClick={() => navigate('/register')}>Register Now.</span>
                    </p>
                    <p className="forgot-password-link">
                        Forgot your password?{" "}
                        <span onClick={() => navigate('/forgot-password')}>Click Here</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;


