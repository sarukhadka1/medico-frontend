// // import React, { useState } from "react";
// // import { toast } from 'react-toastify';
// // import { loginUserApi } from "../../apis/Api";
// // import './Loginpage.css';
// // import { useNavigate } from "react-router-dom";
// // import 'font-awesome/css/font-awesome.min.css';

// // const Login = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');

// //     const [emailError, setEmailError] = useState('');
// //     const [passwordError, setPasswordError] = useState('');

// //     const navigate = useNavigate();

// //     const validation = () => {
// //         let isValid = true;
// //         setEmailError('');
// //         setPasswordError('');

// //         if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
// //             setEmailError("Email is empty or invalid");
// //             isValid = false;
// //             toast.error("Email is empty or invalid");
// //         }

// //         if (password.trim() === '' || password.length < 6) {
// //             setPasswordError("Password is empty or less than 6 characters");
// //             isValid = false;
// //             toast.error("Password is empty or less than 6 characters");
// //         }

// //         return isValid;
// //     };

// //     const handleLogin = (e) => {
// //         e.preventDefault();

// //         if (!validation()) {
// //             return;
// //         }

// //         const data = {
// //             "email": email,
// //             "password": password
// //         };

// //         loginUserApi(data)
// //             .then((res) => {
// //                 if (res.data.success === false) {
// //                     toast.error(res.data.message);
// //                 } else {
// //                     toast.success(res.data.message);

// //                     localStorage.setItem("token", res.data.token);
// //                     localStorage.setItem("user", JSON.stringify(res.data.user));

// //                     const convertedUser = JSON.stringify(res.data.userData);
// //                     localStorage.setItem("user", convertedUser);

// //                     if (res.data.userData.isAdmin) {
// //                         window.location.href = "/admin/dashboard";
// //                     } else {
// //                         window.location.href = "/homepage";
// //                     }
// //                 }
// //             })
// //             .catch(() => {
// //                 toast.error("Login failed");
// //             });
// //     };

// //     return (
// //         <div className="login-container">
// //             <div className="login-box">
// //                 <div className="login-image">
// //                     <img src="/assets/images/login.png" alt="Doctor Login" />
// //                 </div>
// //                 <div className="login-form-container">
// //                     <h2 className="login-heading">Login to your Account</h2>
// //                     <form>
// //                         <div className="form-group">
// //                             <label>Email Address:</label>
// //                             <div className="input-with-icon">
// //                                 <i className="icon fa fa-envelope"></i>
// //                                 <input
// //                                     type="email"
// //                                     placeholder="Enter your email address"
// //                                     value={email}
// //                                     onChange={(e) => setEmail(e.target.value)}
// //                                     className={`form-input ${emailError ? 'error-border' : ''}`}
// //                                 />
// //                             </div>
// //                             {emailError && <p className="error-text">{emailError}</p>}
// //                         </div>
// //                         <div className="form-group">
// //                             <label>Password:</label>
// //                             <div className="input-with-icon">
// //                                 <i className="icon fa fa-lock"></i>
// //                                 <input
// //                                     type="password"
// //                                     placeholder="Enter your password"
// //                                     value={password}
// //                                     onChange={(e) => setPassword(e.target.value)}
// //                                     className={`form-input ${passwordError ? 'error-border' : ''}`}
// //                                 />
// //                             </div>
// //                             {passwordError && <p className="error-text">{passwordError}</p>}
// //                         </div>
// //                         <button onClick={handleLogin} className="login-button">Login</button>
// //                     </form>
// //                     <p className="register-link">
// //                         Don't have an account?{" "}
// //                         <span onClick={() => navigate('/register')}>Register Now.</span>
// //                     </p>

// //                     <p className="forgot-password-link">
// //                         Forgot your password?{" "}
// //                         <span onClick={() => navigate('/forgot-password')}>Click Here</span>
// //                     </p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;

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
//                     <form onSubmit={handleLogin}>
//                         {/* Email Address Field */}
//                         <div className="form-group">
//                             <label className="form-label">Email Address:</label>
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

//                         {/* Password Field */}
//                         <div className="form-group">
//                             <label className="form-label">Password:</label>
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

//                         {/* Submit Button */}
//                         <button type="submit" className="btn-submit">Login</button>
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
import { toast, Toaster } from "react-hot-toast"; // Importing the required toast package
import { loginUserApi } from "../../apis/Api";
import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const css = `
    /* General Container */
    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #F9F9F9;
    }

    /* Login Box */
    .login-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 750px; /* Slightly increased width */
        background: #ffffff;
        border: 2px solid #0056D2;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    /* Login Image */
    .login-image {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 350px; /* Larger image container size */
        margin-right: 15px; /* Space between image and form */
    }

    .login-image img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }

    /* Login Form Container */
    .login-form-container {
        flex: 1;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    /* Login Heading */
    .login-heading {
        font-size: 18px;
        font-weight: bold;
        color: #0056D2;
        margin-bottom: 10px;
        text-align: center;
    }

    /* Form Group */
    .form-group {
        margin-bottom: 10px; /* Space between fields */
        display: flex;
        flex-direction: column;
        position: relative;
    }

    /* Labels */
    .form-label {
        font-size: 14px;
        color: #555;
        margin-bottom: 5px;
        font-weight: normal;
    }

    /* Input Fields with Icon */
    .input-with-icon {
        position: relative;
    }

    .input-with-icon .icon {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        font-size: 14px;
        color: #555;
    }

    .input-with-icon .form-input {
        width: 100%;
        height: 40px; /* Standard height */
        padding: 8px;
        padding-left: 35px; /* Space for the icon */
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
        transition: border-color 0.3s ease;
    }

    .input-with-icon .form-input:focus {
        border-color: #0056D2;
    }

    /* Error Styling */
    .error-border {
        border-color: #FF4D4F;
    }

    .error-text {
        font-size: 12px;
        color: #FF4D4F;
        margin-top: 2px; /* Minimal gap between input and error message */
        margin-bottom: -2px; /* Reduced gap between error and next field */
        line-height: 1; /* Compact error text */
    }

    /* Submit Button */
    .btn-submit {
        width: 100%;
        height: 40px;
        background-color: #0056D2;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-top: 10px;
    }

    .btn-submit:hover {
        background-color: #003F88;
    }

    /* Links */
    .register-link, .forgot-password-link {
        text-align: center;
        margin-top: 5px;
        font-size: 12px;
        color: #555;
        font-weight: normal;
    }

    .register-link span, .forgot-password-link span {
        color: #0056D2;
        cursor: pointer;
    }

    .register-link span:hover, .forgot-password-link span:hover {
        text-decoration: underline;
    }
  `;

  const validation = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (email.trim() === "" || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is empty or invalid");
      isValid = false;
      toast.error("Email is empty or invalid", { position: "top-right" });
    }

    if (password.trim() === "" || password.length < 6) {
      setPasswordError("Password is empty or less than 6 characters");
      isValid = false;
      toast.error("Password is empty or less than 6 characters", { position: "top-right" });
    }

    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    loginUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error("Login failed: Incorrect email or password", { position: "top-right" });
        } else {
          toast.success("Logged in successfully", { position: "top-right", duration: 5000 });

          // Save user data to localStorage
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));

          const convertedUser = JSON.stringify(res.data.userData);
          localStorage.setItem("user", convertedUser);

          // Redirect after showing toast
          setTimeout(() => {
            if (res.data.userData.isAdmin) {
              navigate("/admin/dashboard");
            } else {
              navigate("/homepage");
            }
          }, 1000); // Wait for 5 seconds before redirecting
        }
      })
      .catch(() => {
        toast.error("Login failed", { position: "top-right" });
      });
  };

  return (
    <>
      <style>{css}</style>
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
                    className={`form-input ${emailError ? "error-border" : ""}`}
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
                    className={`form-input ${passwordError ? "error-border" : ""}`}
                  />
                </div>
                {passwordError && <p className="error-text">{passwordError}</p>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-submit">
                Login
              </button>
            </form>
            <p className="register-link">
              Don't have an account?{" "}
              <span onClick={() => navigate("/register")}>Register Now.</span>
            </p>
            <p className="forgot-password-link">
              Forgot your password?{" "}
              <span onClick={() => navigate("/forgot-password")}>
                Click Here
              </span>
            </p>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Login;


