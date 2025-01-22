import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createDoctorApi, deleteDoctor, getAllDoctors } from '../../apis/Api';
import Navbar from '../../components/Navbar';
import AdminNavbar from '../../components/AdminNavbar';

const AdminDashboard = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    // Fetch all doctors on component mount
    useEffect(() => {
        getAllDoctors()
            .then((res) => {
                setDoctors(res.data.doctors || []); // Default to empty array if no doctors
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to fetch doctors.");
            });
    }, []);

    const [doctorName, setDoctorName] = useState('');
    const [doctorSpecialization, setDoctorSpecialization] = useState('');
    const [doctorFees, setDoctorFees] = useState('');
    const [doctorDescription, setDoctorDescription] = useState('');
    const [doctorImage, setDoctorImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    // Specialization options
    const specializationOptions = [
        "Cardiologist", "Dermatologist", "Neurologist", "Orthopedic", "Pediatrician", "Psychiatrist", "Radiologist"
    ];

    // Handle image input change
    const handleImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            setDoctorImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    // Handle form submission to create a doctor
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('doctorName', doctorName);
        formData.append('doctorSpecialization', doctorSpecialization);
        formData.append('doctorFees', doctorFees);
        formData.append('doctorDescription', doctorDescription);
        if (doctorImage) {
            formData.append('doctorImage', doctorImage);
        }

        // Debug: Log FormData content
        for (let [key, value] of formData.entries()) {
            console.log(key, value); // Logs all fields, including doctorImage
        }

        createDoctorApi(formData)
            .then((res) => {
                if (res.status === 201) {
                    toast.success(res.data.message);
                    setDoctorName('');
                    setDoctorSpecialization('');
                    setDoctorFees('');
                    setDoctorDescription('');
                    setDoctorImage(null);
                    setPreviewImage('');
                    document.getElementById('postDoctorModal').click();
                }
            })
            .catch((error) => {
                if (error.response) {
                    toast.error("Error: " + error.response.data.message);
                } else {
                    toast.error("Something went wrong!");
                }
            });
    };

    // Handle doctor deletion
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this doctor?")) {
            deleteDoctor(id)
                .then((res) => {
                    if (res.status === 201) {
                        toast.success(res.data.message);
                        setDoctors(doctors.filter((doctor) => doctor._id !== id));
                    }
                })
                .catch((error) => {
                    console.error(error);
                    toast.error(
                        error.response?.data?.message || "Server Error"
                    );
                });
        }
    };

    // Handle doctor description modal
    const handleDescriptionClick = (doctor) => {
        setSelectedDoctor(doctor);
    };

    const handleCloseModal = () => {
        setSelectedDoctor(null);
    };

    return (
        <div className="dashboard-container">
            <style>
                {`
                    .dashboard-container {
                        background-color: #f8f4f9;
                        padding: 20px;
                    }

                    .dashboard-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 20px;
                    }

                    .dashboard-title {
                        font-size: 24px;
                        font-weight: bold;
                        color: #004AAD;
                    }

                    .dashboard-stats {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 20px;
                        margin-bottom: 20px;
                    }

                    .stat-box {
                        background-color: white;
                        border: 1px solid #e0e0e0;
                        border-radius: 10px;
                        padding: 20px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }

                    .stat-title {
                        font-size: 14px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }

                    .stat-value {
                        font-size: 24px;
                        color: #6a0dad;
                    }

                    .table-container {
                        background-color: white;
                        border: 1px solid #e0e0e0;
                        border-radius: 10px;
                        padding: 20px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }

                    .description-container {
                        max-height: 60px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        cursor: pointer;
                    }

                    .description-container .view-more {
                        color: blue;
                        cursor: pointer;
                        font-weight: bold;
                    }

                    .description-container:hover .view-more {
                        text-decoration: underline;
                    }

                    .modal.show {
                        display: block;
                    }

                    .modal-backdrop {
                        z-index: -1;
                    }

                    .form-container {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }

                    .form-control {
                        width: 100%;
                    }
                `}
            </style>
            <div className="dashboard-header">
                <h5 className="dashboard-title">Admin Dashboard</h5>
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#postDoctorModal"
                    style={{ backgroundColor: '#004AAD', borderColor: '#004AAD' }}
                >
                    Add Doctor
                </button>
            </div>

            <div className="dashboard-stats">
                <div className="stat-box">
                    <div className="stat-title">Total Doctors</div>
                    <div className="stat-value">175</div>
                </div>
                <div className="stat-box">
                    <div className="stat-title">Affiliate Revenue</div>
                    <div className="stat-value">Rs.12099</div>
                </div>
                <div className="stat-box">
                    <div className="stat-title">Refunds</div>
                    <div className="stat-value">0.00</div>
                </div>
                <div className="stat-box">
                    <div className="stat-title">Avg. Revenue Per User</div>
                    <div className="stat-value">Rs.28000</div>
                </div>
            </div>

            <div className="table-container">
                <h5>
                    Doctors at <span style={{ color: '#004AAD' }}>Medico</span>
                </h5>
                <table className="table mt-2">
                    <thead className="table-dark" style={{ backgroundColor: '#004AAD' }}>
                        <tr>
                            <th>Doctor Image</th>
                            <th>Doctor Name</th>
                            <th>Specialization</th>
                            <th>Fees</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((singleDoctor) => (
                            <tr key={singleDoctor._id}>
                                <td>
                                    {singleDoctor.doctorImage ? (
                                        <img
                                            width="30px"
                                            height="30px"
                                            src={`http://localhost:5000/doctors/${singleDoctor.doctorImage}`}
                                            alt="Doctor"
                                        />
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </td>
                                <td>{singleDoctor.doctorName}</td>
                                <td>{singleDoctor.doctorSpecialization}</td>
                                <td>{singleDoctor.doctorFees}</td>
                                <td>
                                    <div
                                        className="description-container"
                                        onClick={() =>
                                            handleDescriptionClick(singleDoctor)
                                        }
                                    >
                                        {singleDoctor.doctorDescription.slice(0, 100)}...
                                    </div>
                                </td>
                                <td>
                                    <Link
                                        to={`/admin/update/${singleDoctor._id}`}
                                        className="btn btn-primary"
                                        style={{
                                            backgroundColor: '#004AAD',
                                            borderColor: '#004AAD',
                                        }}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(singleDoctor._id)}
                                        className="btn btn-danger ms-2"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedDoctor && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {selectedDoctor.doctorName}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>{selectedDoctor.doctorDescription}</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleCloseModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div
                className="modal fade"
                id="postDoctorModal"
                tabIndex="-1"
                aria-labelledby="postDoctorModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="postDoctorModalLabel">
                                Add Doctor
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className="form-container">
                                <div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Doctor Name"
                                        value={doctorName}
                                        onChange={(e) =>
                                            setDoctorName(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <select
                                        className="form-control"
                                        value={doctorSpecialization}
                                        onChange={(e) =>
                                            setDoctorSpecialization(e.target.value)
                                        }
                                    >
                                        <option value="">Select Specialization</option>
                                        {specializationOptions.map((specialization) => (
                                            <option key={specialization} value={specialization}>
                                                {specialization}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Fees"
                                        value={doctorFees}
                                        onChange={(e) =>
                                            setDoctorFees(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Enter Doctor Description"
                                        value={doctorDescription}
                                        onChange={(e) =>
                                            setDoctorDescription(e.target.value)
                                        }
                                    ></textarea>
                                </div>
                                <div>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleImage}
                                    />
                                    {previewImage && (
                                        <img
                                            src={previewImage}
                                            alt="Preview"
                                            style={{
                                                marginTop: '10px',
                                                maxWidth: '100%',
                                                height: 'auto',
                                            }}
                                        />
                                    )}
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-secondary"
                                        style={{
                                            backgroundColor: '#004AAD',
                                            borderColor: '#004AAD',
                                            marginTop: '20px',
                                            width: '100%',
                                        }}
                                    >
                                        Add Doctor
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { createDoctorApi, deleteDoctor, getAllDoctors } from "../../apis/Api";
// import Navbar from "../../components/Navbar";
// import AdminNavbar from "../../components/AdminNavbar";

// const SPECIALIZATIONS = [
//     { value: "cardiologist", label: "Cardiologist" },
//     { value: "neurologist", label: "Neurologist" },
//     { value: "dentist", label: "Dentist" },
//     { value: "dermatologist", label: "Dermatologist" },
//     { value: "surgeon", label: "Surgeon" },
// ];

// const AdminDashboard = () => {
//     const [doctors, setDoctors] = useState([]);
//     const [doctorName, setDoctorName] = useState("");
//     const [doctorSpecialization, setDoctorSpecialization] = useState("");
//     const [doctorFees, setDoctorFees] = useState("");
//     const [doctorDescription, setDoctorDescription] = useState("");
//     const [doctorImage, setDoctorImage] = useState(null);
//     const [previewImage, setPreviewImage] = useState("");

//     // Fetch all doctors on component mount
//     useEffect(() => {
//         fetchDoctors();
//     }, []);

//     const fetchDoctors = async () => {
//         try {
//             const res = await getAllDoctors();
//             setDoctors(res.data.doctors || []);
//         } catch (error) {
//             console.error(error);
//             toast.error("Failed to fetch doctors.");
//         }
//     };

//     // Handle image input change
//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setDoctorImage(file);
//             setPreviewImage(URL.createObjectURL(file));
//         }
//     };

//     // Handle form submission to create a doctor
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!doctorSpecialization) {
//             toast.error("Please select a specialization.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("doctorName", doctorName);
//         formData.append("doctorSpecialization", doctorSpecialization);
//         formData.append("doctorFees", doctorFees);
//         formData.append("doctorDescription", doctorDescription);
//         if (doctorImage) {
//             formData.append("doctorImage", doctorImage);
//         }

//         try {
//             const res = await createDoctorApi(formData);
//             if (res.status === 201) {
//                 toast.success("Doctor created successfully!");
//                 fetchDoctors(); // Refresh doctors list
//                 setDoctorName("");
//                 setDoctorSpecialization("");
//                 setDoctorFees("");
//                 setDoctorDescription("");
//                 setDoctorImage(null);
//                 setPreviewImage("");
//                 document.getElementById("postDoctorModal").click(); // Close modal
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Failed to create doctor.");
//         }
//     };

//     // Handle doctor deletion
//     const handleDelete = async (id) => {
//         if (window.confirm("Are you sure you want to delete this doctor?")) {
//             try {
//                 const res = await deleteDoctor(id);
//                 if (res.status === 201) {
//                     toast.success("Doctor deleted successfully!");
//                     setDoctors(doctors.filter((doctor) => doctor._id !== id));
//                 }
//             } catch (error) {
//                 console.error(error);
//                 toast.error("Failed to delete doctor.");
//             }
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <div className="dashboard-header">
//                 <h5>Admin Dashboard</h5>
//                 <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-toggle="modal"
//                     data-bs-target="#postDoctorModal"
//                 >
//                     Add Doctor
//                 </button>
//             </div>

//             {/* Doctors Table */}
//             <table className="table mt-2">
//                 <thead className="table-dark">
//                     <tr>
//                         <th>Doctor Image</th>
//                         <th>Doctor Name</th>
//                         <th>Specialization</th>
//                         <th>Fees</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {doctors.map((doctor) => (
//                         <tr key={doctor._id}>
//                             <td>
//                                 <img
//                                     src={
//                                         doctor.doctorImage
//                                             ? `http://localhost:5000/doctors/${doctor.doctorImage}`
//                                             : "https://via.placeholder.com/50"
//                                     }
//                                     alt="Doctor"
//                                     width="50"
//                                     height="50"
//                                 />
//                             </td>
//                             <td>{doctor.doctorName || "N/A"}</td>
//                             <td>{doctor.doctorSpecialization || "N/A"}</td>
//                             <td>{doctor.doctorFees || "N/A"}</td>
//                             <td>
//                                 <Link
//                                     to={`/admin/update/${doctor._id}`}
//                                     className="btn btn-primary"
//                                 >
//                                     Edit
//                                 </Link>
//                                 <button
//                                     className="btn btn-danger ms-2"
//                                     onClick={() => handleDelete(doctor._id)}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Add Doctor Modal */}
//             <div
//                 className="modal fade"
//                 id="postDoctorModal"
//                 tabIndex="-1"
//                 aria-labelledby="postDoctorModalLabel"
//                 aria-hidden="true"
//             >
//                 <div className="modal-dialog modal-dialog-centered modal-lg">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="postDoctorModalLabel">
//                                 Add Doctor
//                             </h5>
//                             <button
//                                 type="button"
//                                 className="btn-close"
//                                 data-bs-dismiss="modal"
//                             ></button>
//                         </div>
//                         <div className="modal-body">
//                             <form onSubmit={handleSubmit}>
//                                 <div>
//                                     <label>Name</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         value={doctorName}
//                                         onChange={(e) => setDoctorName(e.target.value)}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label>Specialization</label>
//                                     <select
//                                         value={doctorSpecialization}
//                                         onChange={(e) =>
//                                             setDoctorSpecialization(e.target.value)
//                                         }
//                                         className="form-control"
//                                     >
//                                         <option value="">Select Specialization</option>
//                                         {SPECIALIZATIONS.map((spec) => (
//                                             <option key={spec.value} value={spec.value}>
//                                                 {spec.label}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div>
//                                     <label>Fees</label>
//                                     <input
//                                         type="number"
//                                         className="form-control"
//                                         value={doctorFees}
//                                         onChange={(e) => setDoctorFees(e.target.value)}
//                                     />
//                                 </div>
//                                 <div>
//                                     <label>Description</label>
//                                     <textarea
//                                         className="form-control"
//                                         value={doctorDescription}
//                                         onChange={(e) =>
//                                             setDoctorDescription(e.target.value)
//                                         }
//                                     ></textarea>
//                                 </div>
//                                 <div>
//                                     <label>Image</label>
//                                     <input
//                                         type="file"
//                                         className="form-control"
//                                         onChange={handleImageChange}
//                                     />
//                                     {previewImage && (
//                                         <img
//                                             src={previewImage}
//                                             alt="Preview"
//                                             className="mt-2"
//                                             style={{ maxWidth: "100px" }}
//                                         />
//                                     )}
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary mt-3"
//                                 >
//                                     Submit
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;
