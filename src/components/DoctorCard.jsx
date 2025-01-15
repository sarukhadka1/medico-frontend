// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAdd, faCalendar, faCalendarCheck, faHeart } from '@fortawesome/free-solid-svg-icons';
// import DoctorModal from './doctorModel'; 
// import AppointmentForm from '../pages/appoint/AppointmentForm'; 
// import { addToMyPlanApi, getUserMyPlanApi, removeFromMyPlanApi } from '../apis/Api'; 
// import { Link } from 'react-router-dom';
// import './DoctorCard.css'; 

// const DoctorCard = ({ doctorInformation, color, updatePlan }) => {
//     const [showModal, setShowModal] = useState(false);
//     const [doctor, setDoctor] = useState(null);
//     const [showAppointmentForm, setShowAppointmentForm] = useState(false);
//     const [isInPlan, setIsInPlan] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const checkPlanStatus = async () => {
//             try {
//                 const res = await getUserMyPlanApi();
//                 const plan = res.data.data;
//                 const isDoctorInPlan = plan.some(doc => doc._id === doctorInformation._id);
//                 setIsInPlan(isDoctorInPlan);
//             } catch (error) {
//                 setError(error.response?.data?.message || 'Error fetching plan');
//             }
//         };

//         checkPlanStatus();
//     }, [doctorInformation._id]);

//     const handleViewMoreClick = () => {
//         axios.get(`http://localhost:5000/api/doctor/get_single_doctor/${doctorInformation._id}`)
//             .then(response => {
//                 setDoctor(response.data.doctor);
//                 setShowModal(true);  
//             })
//             .catch(error => console.error('Error fetching doctor data:', error));
//     };

//     const handleGetDetailsClick = () => {
//         setShowAppointmentForm(true);
//     };

//     const handlePlanToggle = async () => {
//         setError(null);
//         try {
//             if (isInPlan) {
//                 await removeFromMyPlanApi(doctorInformation._id);
//                 toast.success("Doctor removed from My Plan");
//             } else {
//                 await addToMyPlanApi(doctorInformation._id);
//                 toast.success("Doctor added to My Plan");
//             }

//             setIsInPlan(!isInPlan);
//             updatePlan();
//         } catch (err) {
//             setError(err.response?.data?.message || 'Error updating plan');
//         }
//     };

//     return (
//         <>
//         <div className='container'>
//             <div className="card" style={{ width: '18rem', height: '100%' }}>
//                 <span
//                     style={{ backgroundColor: color }}
//                     className='badge position-absolute top-0'
//                 >
//                     {doctorInformation.doctorSpecialization}
//                 </span>
//                 <img
//                     src={`http://localhost:5000/doctors/${doctorInformation.doctorImage}`}
//                     className="card-img-top"
//                     alt="doctor"
//                     style={{ height: '12rem', objectFit: 'cover' }}
//                 />
//                 <div className="position-absolute top-0 end-0 p-2">
//                     <FontAwesomeIcon 
//                         icon={faCalendarCheck} 
//                         size="1x" 
//                         color={isInPlan ? 'red' : 'rgb(41, 5, 125)'} 
//                         onClick={handlePlanToggle} 
//                         style={{ cursor: 'pointer' }}
//                     />
//                 </div>
//                 <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 'calc(100% - 12rem)' }}>
//                     <div className='d-flex justify-content-between'>
//                         <h5 className="card-title">{doctorInformation.doctorName}</h5>
//                         <h5 className="card-title text-danger">NPR. {doctorInformation.doctorFees}</h5>
//                     </div>
//                     {/* <p className="card-text">{doctorInformation.doctorDescription.slice(0, 30)}</p> */}
//                     <button className="btn btn-blue w-100" onClick={handleViewMoreClick}>Review and Rating</button>
//                     <Link to={`/view/${doctorInformation._id}`} className="btn btn-light-blue w-100 mt-2" onClick={handleGetDetailsClick}>Get Details</Link>
//                     <ToastContainer />
//                 </div>
//             </div>

//             {showModal && <DoctorModal doctor={doctor} onClose={() => setShowModal(false)} />}
//             {showAppointmentForm && doctor && (
//                 <div className="appointment-form-modal">
//                     <AppointmentForm doctor={doctor} />
//                     <button className="btn btn-secondary mt-2" onClick={() => setShowAppointmentForm(false)}>Close</button>
//                 </div>
//             )}
//             </div>
//         </>
//     );
// };

// export default DoctorCard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import DoctorModal from './doctorModel';
import AppointmentForm from '../pages/appoint/AppointmentForm';
import { addToMyPlanApi, getUserMyPlanApi, removeFromMyPlanApi } from '../apis/Api';
import { Link } from 'react-router-dom';
import './DoctorCard.css';

const DoctorCard = ({ doctorInformation, color, updatePlan }) => {
    const [showModal, setShowModal] = useState(false);
    const [doctor, setDoctor] = useState(null);
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const [isInPlan, setIsInPlan] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkPlanStatus = async () => {
            try {
                const res = await getUserMyPlanApi();
                const plan = res.data.data;
                const isDoctorInPlan = plan.some(doc => doc._id === doctorInformation._id);
                setIsInPlan(isDoctorInPlan);
            } catch (error) {
                setError(error.response?.data?.message || 'Error fetching plan');
            }
        };

        checkPlanStatus();
    }, [doctorInformation._id]);

    const handleViewMoreClick = () => {
        axios.get(`http://localhost:5000/api/doctor/get_single_doctor/${doctorInformation._id}`)
            .then(response => {
                setDoctor(response.data.doctor);
                setShowModal(true);
            })
            .catch(error => console.error('Error fetching doctor data:', error));
    };

    const handleGetDetailsClick = () => {
        setShowAppointmentForm(true);
    };

    const handlePlanToggle = async () => {
        setError(null);
        try {
            if (isInPlan) {
                await removeFromMyPlanApi(doctorInformation._id);
                toast.success("Doctor removed from My Plan");
            } else {
                await addToMyPlanApi(doctorInformation._id);
                toast.success("Doctor added to My Plan");
            }

            setIsInPlan(!isInPlan);
            updatePlan();
        } catch (err) {
            setError(err.response?.data?.message || 'Error updating plan');
        }
    };

    return (
        <>
            <div className='container'>
                <div className="card" style={{ width: '18rem', height: '100%' }}>
                    <span
                        style={{
                            backgroundColor: '#587DBD',
                            padding: '5px 5px', // Add padding inside the badge
                            margin: '3px', // Add margin around the badge
                            borderRadius: '9px', // Optional: Add rounded corners for a cleaner look
                        }}
                        className="badge position-absolute top-0"
                    >
                        {doctorInformation.doctorSpecialization}
                    </span>

                    <img
                        src={`http://localhost:5000/doctors/${doctorInformation.doctorImage}`}
                        className="card-img-top"
                        alt="doctor"
                        style={{
                            height: '14rem', // Adjusted height for better face visibility
                            objectFit: 'cover', // Ensures the image covers the area
                            objectPosition: 'top', // Focuses on the upper part of the image
                            borderBottom: '1px solid #ddd' // Added for visual separation
                        }}
                    />
                    <div className="position-absolute top-0 end-0 p-2">
                        <FontAwesomeIcon
                            icon={faCalendarCheck}
                            size="1x"
                            color={isInPlan ? 'red' : 'rgb(41, 5, 125)'}
                            onClick={handlePlanToggle}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 'calc(100% - 14rem)' }}>
                        <div className='d-flex justify-content-between'>
                            <h5 className="card-title">{doctorInformation.doctorName}</h5>
                            
                            <h5 className="card-title text-danger">NPR. {doctorInformation.doctorFees}</h5>
                        </div>
                        <button className="btn btn-blue w-100" onClick={handleViewMoreClick}>Review and Rating</button>
                        <Link to={`/view/${doctorInformation._id}`} className="btn btn-light-blue w-100 mt-2" onClick={handleGetDetailsClick}>Get Details</Link>
                        <ToastContainer />
                    </div>
                </div>

                {showModal && <DoctorModal doctor={doctor} onClose={() => setShowModal(false)} />}
                {showAppointmentForm && doctor && (
                    <div className="appointment-form-modal">
                        <AppointmentForm doctor={doctor} />
                        <button className="btn btn-secondary mt-2" onClick={() => setShowAppointmentForm(false)}>Close</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default DoctorCard;

