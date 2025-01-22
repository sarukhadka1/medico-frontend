// import React, { useEffect, useState } from 'react';
// import { getAllAppointments, updateAppointmentStatus } from '../../apis/Api';
// import { toast } from 'react-toastify';
// import './AppointmentList.css';

// const AppointmentList = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await getAllAppointments();
//         console.log(response.data);
//         setAppointments(response.data.data);
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//         toast.error('Error fetching appointments');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   const handleApprove = async (appointmentId) => {
//     try {
//       await updateAppointmentStatus({ appointmentId, status: 'approved' });
//       const updatedAppointments = appointments.map((appointment) =>
//         appointment._id === appointmentId
//           ? { ...appointment, status: 'approved' }
//           : appointment
//       );
//       setAppointments(updatedAppointments);
//     } catch (error) {
//       console.error('Error approving appointment:', error);
//       toast.error('Error updating appointment status');
//     }
//   };

//   return (
//     <div className="appointment-list-container mt-5">
//       <h1 className="appointment-list-header">Appointment List</h1>
//       <div className="appointment-table-container">
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <table className="appointment-styled-table">
//             <thead>
//               <tr>
//                 <th>User</th>
//                 <th>Doctor</th>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Status</th>
//                 <th>Payment Method</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.length > 0 ? (
//                 appointments.map((appointment, index) => (
//                   <tr
//                     key={appointment._id}
//                     className={index === 0 ? 'first-row' : ''}
//                   >
//                     <td>{appointment.user.firstName}</td>
//                     <td>{appointment.doctor.doctorName}</td>
//                     <td>{new Date(appointment.date).toLocaleDateString()}</td>
//                     <td>{appointment.time}</td>
//                     <td>{appointment.status}</td>
//                     <td>{appointment.paymentMethod}</td>
//                     <td>
//                       {appointment.status === 'pending' && (
//                         <button
//                           className="btn btn-success"
//                           onClick={() => handleApprove(appointment._id)}
//                           style={{
//                             backgroundColor: '#4A90E2',
//                             borderColor: '#4A90E2',
//                             color: '#fff',
//                             padding: '10px 20px',
//                             borderRadius: '25px',
//                             fontFamily: 'Arial, sans-serif',
//                             fontSize: '1em',
//                             cursor: 'pointer',
//                             transition: 'background-color 0.3s ease',
//                           }}
//                         >
//                           Approve
//                         </button>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="text-center">
//                     No appointments available
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AppointmentList;

import React, { useEffect, useState } from 'react'; 
import { getAllAppointments, updateAppointmentStatus } from '../../apis/Api';
import { toast } from 'react-toastify';
import './AppointmentList.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await getAllAppointments();
        console.log(response.data);
        setAppointments(response.data.data || []); // Ensure fallback to an empty array
      } catch (error) {
        console.error('Error fetching appointments:', error);
        toast.error('Error fetching appointments');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleApprove = async (appointmentId) => {
    try {
      await updateAppointmentStatus({ appointmentId, status: 'approved' });
      const updatedAppointments = appointments.map((appointment) =>
        appointment._id === appointmentId
          ? { ...appointment, status: 'approved' }
          : appointment
      );
      setAppointments(updatedAppointments);
      toast.success('Appointment approved successfully.');
    } catch (error) {
      console.error('Error approving appointment:', error);
      toast.error('Error updating appointment status');
    }
  };

  return (
    <div className="appointment-list-container mt-5">
      <h1 className="appointment-list-header">Appointment List</h1>
      <div className="appointment-table-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="appointment-styled-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <tr
                    key={appointment._id}
                    className={index === 0 ? 'first-row' : ''}
                  >
                    <td>{appointment?.user?.firstName || "Unknown User"}</td>
                    <td>{appointment?.doctor?.doctorName || "Unknown Doctor"}</td>
                    <td>{appointment?.date ? new Date(appointment.date).toLocaleDateString() : "Unknown Date"}</td>
                    <td>{appointment?.time || "Unknown Time"}</td>
                    <td>{appointment?.status || "Unknown Status"}</td>
                    <td>{appointment?.paymentMethod || "Unknown Payment Method"}</td>
                    <td>
                      {appointment.status === 'pending' && (
                        <button
                          className="btn btn-success"
                          onClick={() => handleApprove(appointment._id)}
                          style={{
                            backgroundColor: '#004AAD',
                            borderColor: '#004AAD',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '25px',
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '1em',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                          }}
                        >
                          Approve
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No appointments available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AppointmentList;

