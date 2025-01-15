// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import { getUserAppointments, updatePaymentMethod } from '../../apis/Api';
// import KhaltiCheckout from "khalti-checkout-web";
// import config from '../../components/KhaltiConfig';

// const UserAppointment = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [showPaymentModal, setShowPaymentModal] = useState(false);
//     const [selectedAppointment, setSelectedAppointment] = useState(null);

//     useEffect(() => {
//         const fetchAppointments = async () => {
//             try {
//                 const response = await getUserAppointments();
//                 console.log(response.data);
//                 setAppointments(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching appointments:', error);
//                 toast.error('Error fetching appointments');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAppointments();
//     }, []);

//     const handleProceedToPayment = (appointment) => {
//         setSelectedAppointment(appointment);
//         setShowPaymentModal(true);
//     };

//     const handleClosePaymentModal = () => {
//         setShowPaymentModal(false);
//         setSelectedAppointment(null);
//     };

//     const handlePaymentMethod = async (method) => {
//         try {
//             await updatePaymentMethod({ appointmentId: selectedAppointment._id, paymentMethod: method });
//             setShowPaymentModal(false);

//             if (method === 'Cash on arrival') {
//                 toast.success('You have selected to pay upon arrival. Please wait for your appointment approval.');
//             }

//             const updatedAppointments = appointments.map((appointment) =>
//                 appointment._id === selectedAppointment._id ? { ...appointment, paymentMethod: method } : appointment
//             );
//             setAppointments(updatedAppointments);
//         } catch (error) {
//             console.error('Error updating payment method:', error);
//         }
//     };

//     const handleKhaltiPayment = () => {
//         let checkout = new KhaltiCheckout(config);
//         checkout.show({ amount: 200 });
//         handlePaymentMethod('Khalti');
//     };

//     return (
//         <div className="container mt-5">
//             <h1>My Appointments</h1>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Doctor </th>
//                             <th>Date</th>
//                             <th>Time</th>
//                             <th>Status</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {appointments.length > 0 ? (
//                             appointments.map((appointment) => (
//                                 <tr key={appointment._id}>
//                                     <td>{appointment.doctor.doctorName}</td>
//                                     <td>{new Date(appointment.date).toLocaleDateString()}</td>
//                                     <td>{appointment.time}</td>
//                                     <td>{appointment.status}</td>
//                                     <td>
//                                         <button
//                                             className="btn btn-secondary"
//                                             style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
//                                             onClick={() => handleProceedToPayment(appointment)}
//                                         >
//                                             Proceed to Payment
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="5" className="text-center">
//                                     No appointments available
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             )}
//             {showPaymentModal && (
//                 <div className="modal fade show" style={{ display: 'block' }}>
//                     <div className="modal-dialog modal-dialog-centered modal-lg">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title">Select a payment method:</h5>
//                             </div>
//                             <div className="modal-body text-center">
//                                 <div className="d-flex justify-content-center">
//                                     <button
//                                         className="btn btn-secondary me-2"
//                                         style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
//                                         onClick={() => handlePaymentMethod('Cash on arrival')}
//                                     >
//                                         Pay upon Arrival
//                                     </button>
//                                     <button
//                                         className="btn btn-secondary"
//                                         style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
//                                         onClick={handleKhaltiPayment}
//                                     >
//                                         Khalti Payment
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="modal-footer">
//                                 <button
//                                     type="button"
//                                     className="btn btn-secondary"
//                                     style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
//                                     onClick={handleClosePaymentModal}
//                                 >
//                                     Close
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UserAppointment;

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getUserAppointments, updatePaymentMethod } from '../../apis/Api';
import KhaltiCheckout from "khalti-checkout-web";
import config from '../../components/KhaltiConfig';

const UserAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await getUserAppointments();
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

    const handleProceedToPayment = (appointment) => {
        setSelectedAppointment(appointment);
        setShowPaymentModal(true);
    };

    const handleClosePaymentModal = () => {
        setShowPaymentModal(false);
        setSelectedAppointment(null);
    };

    const handlePaymentMethod = async (method) => {
        if (!selectedAppointment) {
            toast.error("No appointment selected for payment.");
            return;
        }
        try {
            await updatePaymentMethod({ appointmentId: selectedAppointment._id, paymentMethod: method });
            setShowPaymentModal(false);

            if (method === 'Cash on arrival') {
                toast.success('You have selected to pay upon arrival. Please wait for your appointment approval.');
            }

            const updatedAppointments = appointments.map((appointment) =>
                appointment._id === selectedAppointment._id ? { ...appointment, paymentMethod: method } : appointment
            );
            setAppointments(updatedAppointments);
        } catch (error) {
            console.error('Error updating payment method:', error);
            toast.error('Error updating payment method.');
        }
    };

    const handleKhaltiPayment = () => {
        let checkout = new KhaltiCheckout(config);
        checkout.show({ amount: 200 });
        handlePaymentMethod('Khalti');
    };

    return (
        <div className="container mt-5">
            <h1>My Appointments</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.length > 0 ? (
                            appointments.map((appointment) => (
                                <tr key={appointment._id}>
                                    <td>{appointment?.doctor?.doctorName || "Unknown Doctor"}</td>
                                    <td>{appointment?.date ? new Date(appointment.date).toLocaleDateString() : "Unknown Date"}</td>
                                    <td>{appointment?.time || "Unknown Time"}</td>
                                    <td>{appointment?.status || "Unknown Status"}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary"
                                            style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
                                            onClick={() => handleProceedToPayment(appointment)}
                                        >
                                            Proceed to Payment
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No appointments available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
            {showPaymentModal && (
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Select a payment method:</h5>
                            </div>
                            <div className="modal-body text-center">
                                <div className="d-flex justify-content-center">
                                    <button
                                        className="btn btn-secondary me-2"
                                        style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
                                        onClick={() => handlePaymentMethod('Cash on arrival')}
                                    >
                                        Pay upon Arrival
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                        style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
                                        onClick={handleKhaltiPayment}
                                    >
                                        Khalti Payment
                                    </button>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
                                    onClick={handleClosePaymentModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserAppointment;
