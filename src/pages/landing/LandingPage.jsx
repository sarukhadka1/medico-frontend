import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Ensure to create and import this CSS file

const LandingPage = () => {
    return (
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
                        <span className="service-tag">Dentist</span> {/* Service Name */}
                        <img src="/assets/images/dentist.jpg" alt="Dentist" className="service-image" />
                        <p className="doctor-name">Dr. Ram Prasad</p> {/* Doctor's Name */}
                    </div>
                    <div className="service">
                        <span className="service-tag">Neurologist</span> {/* Service Name */}
                        <img src="/assets/images/neurologist.jpg" alt="Neurologist" className="service-image" />
                        <p className="doctor-name">Dr. Sarah Khan</p> {/* Doctor's Name */}
                    </div>
                    <div className="service">
                        <span className="service-tag">Psychologist</span> {/* Service Name */}
                        <img src="/assets/images/psychologist.jpg" alt="Psychologist" className="service-image" />
                        <p className="doctor-name">Dr. John Smith</p> {/* Doctor's Name */}
                    </div>
                    <div className="service">
                        <span className="service-tag">Nephrologist</span> {/* Service Name */}
                        <img src="/assets/images/nephrologist.jpg" alt="Nephrologist" className="service-image" />
                        <p className="doctor-name">Dr. Anita Roy</p> {/* Doctor's Name */}
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
    );
};

export default LandingPage;
