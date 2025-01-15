// import React, { useState, useEffect, useRef } from 'react';
// import './DoctorModel.css';
// import AppointmentForm from '../pages/appoint/AppointmentForm'; // Updated to AppointmentForm
// import { addReviewApi, getReviewsApi } from '../apis/Api';
// import { toast } from 'react-toastify';
// import Rating from 'react-rating-stars-component';

// const DoctorModal = ({ doctor, onClose }) => {
//     const [reviews, setReviews] = useState([]);
//     const [newReview, setNewReview] = useState('');
//     const [rating, setRating] = useState(1);
//     const [showAppointmentForm, setShowAppointmentForm] = useState(false);
//     const [averageRating, setAverageRating] = useState(0);
//     const modalRef = useRef(null);

//     useEffect(() => {
//         if (doctor) {
//             fetchReviews();
//         }
//     }, [doctor]);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (modalRef.current && !modalRef.current.contains(event.target)) {
//                 onClose();
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [modalRef, onClose]);

//     const fetchReviews = async () => {
//         try {
//             const res = await getReviewsApi(doctor._id);
//             setReviews(res.data.reviews);
//             calculateAverageRating(res.data.reviews);
//         } catch (err) {
//             toast.error("Failed to fetch reviews");
//         }
//     };

//     const calculateAverageRating = (reviews) => {
//         if (reviews.length === 0) {
//             setAverageRating(0);
//             return;
//         }
//         const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
//         setAverageRating(totalRating / reviews.length);
//     };

//     const handleBookNowClick = () => {
//         setShowAppointmentForm(true);
//     };

//     const submitReview = async () => {
//         if (!rating || !newReview) {
//             toast.error("Please provide both rating and comment");
//             return;
//         }

//         try {
//             const res = await addReviewApi({ doctorId: doctor._id, rating, comment: newReview });
//             toast.success(res.data.message);
//             fetchReviews(); // Refresh reviews after submitting a new one
//             setRating(1); // Reset rating
//             setNewReview(""); // Reset comment
//         } catch (err) {
//             if (err.response && err.response.data && err.response.data.message) {
//                 toast.error(err.response.data.message);
//             } else {
//                 toast.error("Failed to submit review");
//             }
//         }
//     };

//     if (!doctor) return null;

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content" ref={modalRef}>
//     <div className="modal-header">
//         <img
//             src={`http://localhost:5000/doctors/${doctor.doctorImage}`}
//             alt={doctor.doctorName}
//             className="modal-image"
//         />
//         <div className="modal-info">
//             <h2>{doctor.doctorName}</h2>
//             <p className="specialization">Specialization: {doctor.doctorSpecialization}</p>
//             {/* <p>Description: {doctor.doctorDescription}</p> */}
//             <p>Fees:  {doctor.doctorFees}</p>
//             <div className="average-rating">


//                 <Rating
//                     value={averageRating}
//                     edit={false}
//                     size={24}
//                     activeColor="#ffd700"
//                 />
//                 <p>{averageRating.toFixed(1)} out of 5</p>
//             </div>
//         </div>
//     </div>
//     <div className="review-section">
//         <h3>Write a Review</h3>
//         <textarea
//             value={newReview}
//             onChange={(e) => setNewReview(e.target.value)}
//             placeholder="Write your review here..."
//             rows="4"
//             className="review-textarea form-control"
//         />
//         <div className="rating-input mt-2 d-flex align-items-center">
//             <label className="me-2">Rating:</label>
//             <Rating
//                 value={rating}
//                 onChange={setRating}
//                 size={24}
//                 activeColor="#ffd700"
//             />
//         </div>
//         <button className="btn btn-blue mt-2" onClick={submitReview}>
//             Submit Review
//         </button>
//         <div className="reviews-list mt-4">
//             <h3>Reviews:</h3>
//             {reviews.length === 0 ? (
//                 <p>No reviews yet.</p>
//             ) : (
//                 reviews.map((rev, index) => (
//                     <div key={index} className="review-item border mb-3 p-2">
//                         <p><strong>{rev.userId.firstName} {rev.userId.lastName}</strong></p>
//                         <Rating
//                             value={rev.rating}
//                             edit={false}
//                             size={24}
//                             activeColor="#ffd700"
//                         />
//                         <p>{rev.comment}</p>
//                     </div>
//                 ))
//             )}
//         </div>
//     </div>

//             {/* <div className="modal-content" ref={modalRef}>
//                 <img
//                     src={`http://localhost:5000/doctors/${doctor.doctorImage}`}
//                     alt={doctor.doctorName}
//                     className="modal-image"
//                 />
//                 <div className="modal-info">
//                     <h2>{doctor.doctorName}</h2>
//                     <p className="specialization">{doctor.doctorSpecialization}</p>
//                     <p>{doctor.doctorDescription}</p>
//                     <p>Fees: NPR. {doctor.doctorFees}</p>
//                     <div className="average-rating">
//                         <Rating
//                             value={averageRating}
//                             edit={false}
//                             size={24}
//                             activeColor="#ffd700"
//                         />
//                         <p>{averageRating.toFixed(1)} out of 5</p>
//                     </div>
//                 </div>
//                 <div className="review-section">
//                     <h3>Write a Review</h3>
//                     <textarea
//                         value={newReview}
//                         onChange={(e) => setNewReview(e.target.value)}
//                         placeholder="Write your review here..."
//                         rows="4"
//                         className="review-textarea form-control"
//                     />
//                     <div className="rating-input mt-2 d-flex align-items-center">
//                         <label className='me-2'>Rating:</label>
//                         <Rating
//                             value={rating}
//                             onChange={setRating}
//                             size={24}
//                             activeColor="#ffd700"
//                         />
//                     </div>
//                     <button className="btn btn-blue" onClick={submitReview}>Submit Review</button>
//                     <div className="reviews-list">
//                         <h3>Reviews:</h3>
//                         {reviews.length === 0 ? (
//                             <p>No reviews yet.</p>
//                         ) : (
//                             reviews.map((rev, index) => (
//                                 <div key={index} className="review-item border">
//                                     <p><strong>{rev.userId.firstName} {rev.userId.lastName}</strong></p>
//                                     <Rating
//                                         value={rev.rating}
//                                         edit={false}
//                                         size={24}
//                                         activeColor="#ffd700"
//                                     />
//                                     <p>{rev.comment}</p>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div> */}
//                 {showAppointmentForm && (
//                     <div className="appointment-form-modal">
//                         <AppointmentForm />
//                         <button className="btn btn-secondary mt-2" onClick={() => setShowAppointmentForm(false)}>Close</button>
//                     </div>
//                 )}
//             </div>
//         </div>

//     );
// };

// export default DoctorModal;

import React, { useState, useEffect, useRef } from 'react';
import AppointmentForm from '../pages/appoint/AppointmentForm';
import { addReviewApi, getReviewsApi } from '../apis/Api';
import { toast } from 'react-toastify';
import Rating from 'react-rating-stars-component';

const DoctorModal = ({ doctor, onClose }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(1);
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const [averageRating, setAverageRating] = useState(0);
    const modalRef = useRef(null);

    useEffect(() => {
        if (doctor) {
            fetchReviews();
        }
    }, [doctor]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef, onClose]);

    const fetchReviews = async () => {
        try {
            const res = await getReviewsApi(doctor._id);
            setReviews(res.data.reviews);
            calculateAverageRating(res.data.reviews);
        } catch (err) {
            toast.error("Failed to fetch reviews");
        }
    };

    const calculateAverageRating = (reviews) => {
        if (reviews.length === 0) {
            setAverageRating(0);
            return;
        }
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        setAverageRating(totalRating / reviews.length);
    };

    const handleBookNowClick = () => {
        setShowAppointmentForm(true);
    };

    const submitReview = async () => {
        if (!rating || !newReview) {
            toast.error("Please provide both rating and comment");
            return;
        }

        try {
            const res = await addReviewApi({ doctorId: doctor._id, rating, comment: newReview });
            toast.success(res.data.message);
            fetchReviews();
            setRating(1);
            setNewReview('');
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                toast.error(err.response.data.message);
            } else {
                toast.error("Failed to submit review");
            }
        }
    };

    if (!doctor) return null;

    const styles = {
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
        },
        modalContent: {
            background: '#f0f8ff',
            padding: '20px',
            borderRadius: '10px',
            width: '60%',
            maxWidth: '70%',
            maxHeight: '80vh',
            overflowY: 'auto',
            position: 'relative',
            border: '2px solid #4A90E2',
            margin: '0 auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        modalHeader: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
        },
        modalImage: {
            width: '300px',
            height: '300px',
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: '10px',
            border: '2px solid #4A90E2',
        },
        modalInfo: {
            flex: 1,
        },
        modalInfoH2: {
            marginTop: '15px',
            marginBottom: '10px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#4A90E2',
        },
        modalInfoP: {
            margin: '5px 0',
            fontSize: '16px',
            color: '#555',
        },
        averageRating: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '10px',
        },
        reviewSection: {
            marginTop: '20px',
        },
        reviewTextarea: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            resize: 'none',
        },
        ratingInput: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '10px',
        },
        btnBlue: {
            backgroundColor: '#4A90E2',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        reviewItem: {
            background: '#ffffff',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
        },
    };

    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent} ref={modalRef}>
                <div style={styles.modalHeader}>
                    <img
                        src={`http://localhost:5000/doctors/${doctor.doctorImage}`}
                        alt={doctor.doctorName}
                        style={styles.modalImage}
                    />
                    <div style={styles.modalInfo}>
                        <h2 style={styles.modalInfoH2}>{doctor.doctorName}</h2>
                        <p style={styles.modalInfoP}>Specialization: {doctor.doctorSpecialization}</p>
                        <p style={styles.modalInfoP}>Fees: {doctor.doctorFees}</p>
                        <div style={styles.averageRating}>
                            <Rating value={averageRating} edit={false} size={24} activeColor="#ffd700" />
                            <p>{averageRating.toFixed(1)} out of 5</p>
                        </div>
                    </div>
                </div>
                <div style={styles.reviewSection}>
                    <h3>Write a Review</h3>
                    <textarea
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        placeholder="Write your review here..."
                        rows="4"
                        style={styles.reviewTextarea}
                    />
                    <div style={styles.ratingInput}>
                        <label>Rating:</label>
                        <Rating value={rating} onChange={setRating} size={24} activeColor="#ffd700" />
                    </div>
                    <button style={styles.btnBlue} onClick={submitReview}>
                        Submit Review
                    </button>
                    <div>
                        <h3>Reviews:</h3>
                        {reviews.length === 0 ? (
                            <p>No reviews yet.</p>
                        ) : (
                            reviews.map((rev, index) => (
                                <div key={index} style={styles.reviewItem}>
                                    <p>
                                        <strong>
                                            {rev.userId.firstName} {rev.userId.lastName}
                                        </strong>
                                    </p>
                                    <Rating value={rev.rating} edit={false} size={24} activeColor="#ffd700" />
                                    <p>{rev.comment}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorModal;

