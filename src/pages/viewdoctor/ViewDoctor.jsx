// import React, { useEffect, useState } from 'react';
// import { FaBook, FaPhoneAlt } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
// import { createAppointment, getSingleDoctor } from '../../apis/Api';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './ViewDoctor.css';

// const ViewDoctor = () => {
//   const { id } = useParams();
//   const [doctor, setDoctor] = useState(null);
//   const [showCallModal, setShowCallModal] = useState(false);
//   const [showAppointmentModal, setShowAppointmentModal] = useState(false);
//   const [appointmentForm, setAppointmentForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: ''
//   });
//   const [minDate, setMinDate] = useState('');
//   const [minTime, setMinTime] = useState('');
//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const fetchDoctor = async () => {
//       try {
//         const res = await getSingleDoctor(id);
//         setDoctor(res.data.doctor);
//       } catch (error) {
//         console.log('Error fetching doctor:', error);
//       }
//     };

//     fetchDoctor();

//     const now = new Date();
//     setMinDate(now.toISOString().split('T')[0]);
//     setMinTime(now.toTimeString().slice(0, 5));
//   }, [id]);

//   const handleCallClick = () => setShowCallModal(true);
//   const handleBookClick = () => setShowAppointmentModal(true);
//   const handleCloseCallModal = () => setShowCallModal(false);
//   const handleCloseAppointmentModal = () => setShowAppointmentModal(false);

//   const handleAppointmentFormChange = (e) => {
//     const { name, value } = e.target;
//     setAppointmentForm(prevForm => ({
//       ...prevForm,
//       [name]: value
//     }));

//     if (name === 'date') {
//       const selectedDate = new Date(value);
//       const currentDate = new Date(minDate);

//       setMinTime(selectedDate.toDateString() === currentDate.toDateString()
//         ? currentDate.toTimeString().slice(0, 5)
//         : '00:00'
//       );

//       setAppointmentForm(prevForm => ({
//         ...prevForm,
//         time: ''
//       }));
//     }
//   };

//   const handleAppointmentSubmit = async (e) => {
//     e.preventDefault();
//     const appointmentData = {
//       userId: user._id,
//       doctorId: id,
//       date: appointmentForm.date,
//       time: appointmentForm.time
//     };

//     try {
//       const res = await createAppointment(appointmentData);
//       console.log('Appointment created:', res.data);
//       setAppointmentForm({ name: '', email: '', phone: '', date: '', time: '' });
//       setShowAppointmentModal(false);
//       toast.success('Appointment booked successfully!');
//     } catch (error) {
//       console.error('Appointment creation error:', error.response ? error.response.data : error.message);
//       toast.error('Appointment creation failed!');
//     }
//   };

//   if (!doctor) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="container mt-5 doctor-container">
//         <div className="row align-items-center">
//           <div className="col-md-5 image-container">
//             <img
//               src={`http://localhost:5000/doctors/${doctor.doctorImage}`}
//               alt={doctor.doctorName}
//               className="img-fluid doctor-image"
//             />
//           </div>
//           <div className="col-md-7 text-container">
//             <h1 className="doctor-name">{doctor.doctorName}</h1>
//             <h3 className="doctor-specialization">Specialization: {doctor.doctorSpecialization}</h3>
//             <p className="doctor-description">{doctor.doctorDescription}</p>
//             <h4 className="doctor-fees text-primary">Rs {doctor.doctorFees}</h4>
//             <button onClick={handleBookClick} className="btn btn-primary me-2"><FaBook /> Book Appointment</button>
//             <button onClick={handleCallClick} className="btn btn-info"><FaPhoneAlt /> Call</button>
//           </div>
//         </div>
//       </div>

//       {showCallModal && (
//         <div className="modal fade show" style={{ display: 'block' }}>
//           <div className="modal-dialog modal-dialog-centered modal-lg">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Contact Information</h5>
//                 <button type="button" className="btn-close" onClick={handleCloseCallModal}></button>
//               </div>
//               <div className="modal-body text-center">
//                 <h1>+977 9840720919</h1>
//                 <p>Call to book an appointment.</p>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-primary" onClick={handleCloseCallModal}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showAppointmentModal && (
//         <div className="modal fade show" style={{ display: 'block' }}>
//           <div className="modal-dialog modal-dialog-centered modal-lg">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Book Appointment</h5>
//                 <button type="button" className="btn-close" onClick={handleCloseAppointmentModal}></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleAppointmentSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Name</label>
//                     <input type="text" className="form-control" id="name" name="name" value={appointmentForm.name} onChange={handleAppointmentFormChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input type="email" className="form-control" id="email" name="email" value={appointmentForm.email} onChange={handleAppointmentFormChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="phone" className="form-label">Phone</label>
//                     <input type="tel" className="form-control" id="phone" name="phone" value={appointmentForm.phone} onChange={handleAppointmentFormChange} required />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="date" className="form-label">Preferred Date</label>
//                     <input type="date" className="form-control" id="date" name="date" value={appointmentForm.date} onChange={handleAppointmentFormChange} min={minDate} required />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="time" className="form-label">Preferred Time</label>
//                     <input type="time" className="form-control" id="time" name="time" value={appointmentForm.time} onChange={handleAppointmentFormChange} min={minTime} required />
//                   </div>
//                   <button type="submit" className="btn btn-primary">Submit Appointment</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <ToastContainer />
//     </>
//   );
// };

// export default ViewDoctor;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { createAppointment, getSingleDoctor } from '../../apis/Api';
import './ViewDoctor.css';
import 'react-toastify/dist/ReactToastify.css';

const ViewDoctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });
  const [minDate, setMinDate] = useState('');
  const [minTime, setMinTime] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await getSingleDoctor(id);
        setDoctor(res.data.doctor);
      } catch (error) {
        console.log('Error fetching doctor:', error);
      }
    };

    fetchDoctor();

    const now = new Date();
    setMinDate(now.toISOString().split('T')[0]);
    setMinTime(now.toTimeString().slice(0, 5));
  }, [id]);

  const handleBookClick = () => setShowAppointmentModal(true);
  const handleCloseAppointmentModal = () => setShowAppointmentModal(false);

  const handleAppointmentFormChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));

    if (name === 'date') {
      const selectedDate = new Date(value);
      const currentDate = new Date(minDate);

      setMinTime(
        selectedDate.toDateString() === currentDate.toDateString()
          ? currentDate.toTimeString().slice(0, 5)
          : '00:00'
      );

      setAppointmentForm((prevForm) => ({
        ...prevForm,
        time: ''
      }));
    }
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = {
      userId: user._id,
      doctorId: id,
      date: appointmentForm.date,
      time: appointmentForm.time
    };

    try {
      const res = await createAppointment(appointmentData);
      console.log('Appointment created:', res.data);
      setAppointmentForm({ name: '', email: '', phone: '', date: '', time: '' });
      setShowAppointmentModal(false);
      toast.success('Appointment booked successfully!');
    } catch (error) {
      console.error(
        'Appointment creation error:',
        error.response ? error.response.data : error.message
      );
      toast.error('Appointment creation failed!');
    }
  };

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="view-doctor-container">
        {/* Doctor Image */}
        <div className="doctor-image-container">
          <img
            src={`http://localhost:5000/doctors/${doctor.doctorImage}`}
            alt={doctor.doctorName}
          />
        </div>

        {/* Doctor Details */}
        <div className="doctor-details-container">
          <div className="doctor-details">
            <h2>{doctor.doctorName}</h2>
            <p>
              <strong>Genre:</strong> {doctor.doctorSpecialization}
            </p>
            <p className="doctor-description">{doctor.doctorDescription}</p>
            <button onClick={handleBookClick} className="btn-primary">
              Make an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book Appointment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseAppointmentModal}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAppointmentSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={appointmentForm.name}
                      onChange={handleAppointmentFormChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={appointmentForm.email}
                      onChange={handleAppointmentFormChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={appointmentForm.phone}
                      onChange={handleAppointmentFormChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={appointmentForm.date}
                      onChange={handleAppointmentFormChange}
                      min={minDate}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="time" className="form-label">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="time"
                      name="time"
                      value={appointmentForm.time}
                      onChange={handleAppointmentFormChange}
                      min={minTime}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default ViewDoctor;

