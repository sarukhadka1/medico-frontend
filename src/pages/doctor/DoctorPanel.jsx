import React from 'react';
import './DoctorPanel.css'; // Ensure you create this CSS file for styling

const doctors = [
    {
        name: "Dr. Ram Prasad",
        specialization: "Dentist",
        fees: "NPR 850",
        image: "/assets/images/ram_prasad.png",
        
    },
    {
        name: "Dr. Shova Basnet",
        specialization: "Neurologist",
        fees: "NPR 850",
        image: "/assets/images/neurologist.png",
        
    },
    {
        name: "Dr. Anand K.C",
        specialization: "Surgeon",
        fees: "NPR 850",
        image: "/assets/images/surgeon.png",
        
    },
    {
        name: "Dr. Meera Shah",
        specialization: "Dietician",
        fees: "NPR 850",
        image: "/assets/images/dietician.png",
        
    },
    {
        name: "Dr. Yosha Shrestha",
        specialization: "Dentist",
        fees: "NPR 850",
        image: "/assets/images/dentistt.png",
        
    },
    {
        name: "Dr. Abhishek Rai",
        specialization: "Psychologist",
        fees: "NPR 850",
        image: "/assets/images/psychologist.png",
        
    },
    {
        name: "Dr. Prem Rana",
        specialization: "Dermatologist",
        fees: "NPR 850",
        image: "/assets/images/dermatologist.png",
        
    },
    {
        name: "Dr. Ranju Khadka",
        specialization: "Nephrologist",
        fees: "NPR 850",
        image: "/assets/images/nephrologist.png",
        
    },
];

const DoctorPanel = () => {
    return (
        <div>
            <div className="doctor-panel-container mt-2">
                <h2>Our Doctors</h2>
                <p>Choose the best doctor for your needs from our list of highly qualified professionals.</p>
                <div className="doctor-grid">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="doctor-card">
                            <a href={doctor.link}>
                                <img src={doctor.image} alt={doctor.name} />
                                <h3>{doctor.name}</h3>
                                <p>{doctor.specialization}</p>
                                <p>{doctor.fees}</p>
                                <button className="btn btn-primary">Review and Rating</button>
                                <button className="btn btn-secondary">Get Details</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorPanel;
