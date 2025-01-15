// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Navbar = () => {
//   // Get user data from local storage
//   const user = JSON.parse(localStorage.getItem('user'));
//   const navigate = useNavigate();

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//     navigate("/login");
//     window.dispatchEvent(new Event('storage'));
//   };

//   return (
//     <div className='container-fluid p-0'>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Medico</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/homepage" style={{ color: '#4A90E2' }}>Dashboard</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/MyPlan" style={{ color: '#4A90E2' }}>My Plan</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/my_appointments" className="nav-link" aria-current="page" style={{ color: '#4A90E2' }}>My Appointments</Link>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               {
//                 user ? (
//                   <div className="dropdown">
//                     <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}>
//                       Welcome, {user.firstName}!
//                     </button>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link to="/profile" className="dropdown-item">
//                           Profile
//                         </Link>
//                       </li>
//                       <li><button onClick={handleLogout} className="dropdown-item">Log Out</button></li>
//                     </ul>
//                   </div>
//                 ) : (
//                   <>
//                     <Link to={'/login'} className="btn btn-light-blue" type="button">Login</Link>
//                     <Link to={'/register'} className="btn btn-blue ms-2" type="button">Register</Link>
//                   </>
//                 )
//               }
//             </form>
//           </div>
//         </div>
//       </nav>

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css'; // Ensure this file is present for styles

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate("/login");
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src="/assets/images/medico1.png" alt="" className="navbar-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/homepage">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/MyPlan">My Plan</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my_appointments">My Appointments</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {user ? (
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Welcome, {user.firstName}!
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="dropdown-item">
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <Link to="/login" className="btn btn-link-blue" type="button">Login</Link>
                  <Link to="/register" className="btn btn-link-blue ms-2" type="button">Register</Link>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>



      {/* Modal for Appointment Form */}
      <div className="modal fade" id="appointmentModal" tabIndex="-1" aria-labelledby="appointmentModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="appointmentModalLabel">Book an Appointment</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeAppointmentModal"></button>
            </div>
            <div className="modal-body">
              {/* Appointment form goes here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
