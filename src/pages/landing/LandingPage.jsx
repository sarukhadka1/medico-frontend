// import React from 'react';
// import { Link } from 'react-router-dom';
// import './LandingPage.css'; // Ensure to create and import this CSS file

// const LandingPage = () => {
//     return (
//         <div className="landing-container">
//             {/* Hero Section */}
//             <div className="landing-content">
//                 <div className="text-container">
//                     <h2>Find Your Perfect Doctor</h2>
//                     <h3>For Your Life</h3>
//                     <p>
//                         Say goodbye to long waiting times and complex appointment processes! Medico is here to revolutionize how you connect with doctors. Whether you need a dentist, specialist, or physician, Medico makes finding and booking appointments effortless.
//                     </p>
//                     <button className="appointment-btn">Make an Appointment</button>
//                 </div>
//                 <div className="image-container">
//                     <img src="/assets/images/servelanding.png" alt="Health Services" className="landing-image" />
//                 </div>
//             </div>

//             {/* Services Section */}
//             <div className="services-section">
//                 <div className="service-wrapper">
//                     <div className="service">
//                         <span className="service-tag">Dentist</span> {/* Service Name */}
//                         <img src="/assets/images/dentist.jpg" alt="Dentist" className="service-image" />
//                         <p className="doctor-name">Dr. Ram Prasad</p> {/* Doctor's Name */}
//                     </div>
//                     <div className="service">
//                         <span className="service-tag">Neurologist</span> {/* Service Name */}
//                         <img src="/assets/images/neurologist.jpg" alt="Neurologist" className="service-image" />
//                         <p className="doctor-name">Dr. Sarah Khan</p> {/* Doctor's Name */}
//                     </div>
//                     <div className="service">
//                         <span className="service-tag">Psychologist</span> {/* Service Name */}
//                         <img src="/assets/images/psychologist.jpg" alt="Psychologist" className="service-image" />
//                         <p className="doctor-name">Dr. John Smith</p> {/* Doctor's Name */}
//                     </div>
//                     <div className="service">
//                         <span className="service-tag">Nephrologist</span> {/* Service Name */}
//                         <img src="/assets/images/nephrologist.jpg" alt="Nephrologist" className="service-image" />
//                         <p className="doctor-name">Dr. Anita Roy</p> {/* Doctor's Name */}
//                     </div>
//                 </div>
//             </div>

//             {/* Tagline Section */}
// <div className="tagline-section">
//     <h4>Your Health Matters,</h4>
//     <p>
//         and Medico ensures a smooth and secure way to access the care you need. Start your journey to better health today!
//     </p>
// </div>

//         </div>
//     );
// };

// export default LandingPage;

import React from 'react';

const LandingPage = () => {
    return (
        <>
            <style>
                {`
                /* General Container */
                .landing-container {
                    font-family: Arial, sans-serif;
                    max-width: 1200px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #ffffff;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                }

                /* Hero Section */
                .landing-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 40px;
                }

                .text-container {
                    flex: 1;
                    margin-right: 20px;
                    text-align: left;
                }

                .text-container h2 {
                    font-size: 36px;
                    color: #00274C;
                    margin-bottom: 10px;
                    font-weight: bold;
                }

                .text-container h3 {
                    font-size: 28px;
                    color: #0056D2;
                    margin-bottom: 20px;
                }

                .text-container p {
                    font-size: 16px;
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }

                .appointment-btn {
                    padding: 12px 30px;
                    background-color: #0462ba;
                    color: white;
                    border: none;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .appointment-btn:hover {
                    background-color: #003f88;
                }

                .image-container {
                    flex: 1;
                    text-align: center;
                }

                .landing-image {
                    max-width: 100%;
                    height: auto;
                }

                /* Services Section */
                .services-section {
                    padding: 20px;
                    background-color: #F9F9F9;
                    margin-bottom: 40px;
                    text-align: center;
                }

                .service-wrapper {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    gap: 20px;
                }

                .service {
                    flex: 1;
                    text-align: center;
                    padding: 20px;
                    background-color: #ffffff;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    position: relative;
                    height: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .service-tag {
                    position: absolute;
                    top: 10px; /* Moved down slightly */
                    left: 10px; /* Moved right slightly */
                    font-size: 14px;
                    color: #0056D2;
                    font-weight: bold;
                    background-color: #f2f5ff;
                    padding: 5px 10px;
                    border-radius: 12px;
                    text-transform: capitalize;
                }

                .service-image {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    object-fit: cover;
                    object-position: top center;
                    display: block;
                    margin: 0 auto;
                }

                .doctor-name {
                    font-size: 16px;
                    color: #333;
                    font-weight: bold;
                    text-transform: capitalize;
                    line-height: 1.2;
                    margin-top: 10px;
                }

                /* Tagline Section */
                .tagline-section {
                    text-align: center;
                    margin-top: 20px;
                    padding: 20px;
                    background-color: #ffffff;
                }

                .tagline-section h4 {
                    font-size: 24px;
                    color: #00274C;
                    margin-bottom: 10px;
                    font-weight: bold;
                }

                .tagline-section p {
                    font-size: 16px;
                    color: #555;
                    line-height: 1.6;
                }
                `}
            </style>

            <div className="landing-container">
                {/* Hero Section */}
                <div className="landing-content">
                    <div className="text-container">
                        <h2>Find Your Perfect Doctor</h2>
                        <h3>For Your Life</h3>
                        <p>
                            Say goodbye to long waiting times and complex appointment processes! Medico is here to revolutionize how you connect with doctors. Whether you need a dentist, specialist, or physician, Medico makes finding and booking appointments effortless.
                        </p>
                        <button className="appointment-btn">Make an Appointment</button>
                    </div>
                    <div className="image-container">
                        <img src="/assets/images/servelanding.png" alt="Health Services" className="landing-image" />
                    </div>
                </div>

                {/* Services Section */}
                <div className="services-section">
                    <div className="service-wrapper">
                        <div className="service">
                            <span className="service-tag">Dentist</span>
                            <img src="/assets/images/dentist.jpg" alt="Dentist" className="service-image" />
                            <p className="doctor-name">Dr. Ram Prasad</p>
                        </div>
                        <div className="service">
                            <span className="service-tag">Neurologist</span>
                            <img src="/assets/images/neurologist.jpg" alt="Neurologist" className="service-image" />
                            <p className="doctor-name">Dr. Sarah Khan</p>
                        </div>
                        <div className="service">
                            <span className="service-tag">Psychologist</span>
                            <img src="/assets/images/psychologist.jpg" alt="Psychologist" className="service-image" />
                            <p className="doctor-name">Dr. John Smith</p>
                        </div>
                        <div className="service">
                            <span className="service-tag">Nephrologist</span>
                            <img src="/assets/images/nephrologist.jpg" alt="Nephrologist" className="service-image" />
                            <p className="doctor-name">Dr. Anita Roy</p>
                        </div>
                    </div>
                </div>

                {/* Tagline Section */}
                <div className="tagline-section">
                    <h4>Your Health Matters,</h4>
                    <p>
                        and Medico ensures a smooth and secure way to access the care you need. Start your journey to better health today!
                    </p>
                </div>
            </div>
        </>
    );
};

export default LandingPage;

