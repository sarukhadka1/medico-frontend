import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleDoctor, updateDoctor } from "../../apis/Api";
import { toast } from "react-toastify";

const UpdateDoctor = () => {
    const { id } = useParams();

    useEffect(() => {
        getSingleDoctor(id)
            .then((res) => {
                const doctor = res.data.doctor;
                setDoctorName(doctor.doctorName);
                setDoctorSpecialization(doctor.doctorSpecialization);
                setDoctorFees(doctor.doctorFees);
                setDoctorDescription(doctor.doctorDescription);
                setOldImage(doctor.doctorImage);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to fetch doctor details.");
            });
    }, [id]);

    const [doctorName, setDoctorName] = useState("");
    const [doctorSpecialization, setDoctorSpecialization] = useState("");
    const [doctorFees, setDoctorFees] = useState("");
    const [doctorDescription, setDoctorDescription] = useState("");
    const [doctorNewImage, setDoctorNewImage] = useState(null);
    const [previewNewImage, setPreviewNewImage] = useState(null);
    const [oldImage, setOldImage] = useState("");

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setDoctorNewImage(file);
            setPreviewNewImage(URL.createObjectURL(file));
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("doctorName", doctorName);
        formData.append("doctorSpecialization", doctorSpecialization);
        formData.append("doctorFees", doctorFees);
        formData.append("doctorDescription", doctorDescription);

        if (doctorNewImage) {
            formData.append("doctorImage", doctorNewImage);
        }

        updateDoctor(id, formData)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Doctor updated successfully!");
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.response?.data?.message || "Failed to update doctor.");
            });
    };

    return (
        <div className="container mt-3">
            <h2>
                Update Doctor Details for <span className="text-primary">{doctorName}</span>
            </h2>
            <div className="d-flex gap-3">
                <form>
                    <label>Doctor Name</label>
                    <input
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Enter doctor name"
                    />

                    <label className="mt-2">Specialization</label>
                    <select
                        value={doctorSpecialization}
                        onChange={(e) => setDoctorSpecialization(e.target.value)}
                        className="form-control"
                    >
                        <option value="cardiologist">Cardiologist</option>
                        <option value="neurologist">Neurologist</option>
                        <option value="dentist">Dentist</option>
                        <option value="dermatologist">Dermatologist</option>
                        <option value="surgeon">Surgeon</option>
                    </select>

                    <label className="mt-2">Fees</label>
                    <input
                        value={doctorFees}
                        onChange={(e) => setDoctorFees(e.target.value)}
                        className="form-control"
                        type="number"
                        placeholder="Enter doctor fees"
                    />

                    <label className="mt-2">Description</label>
                    <textarea
                        value={doctorDescription}
                        onChange={(e) => setDoctorDescription(e.target.value)}
                        className="form-control"
                        placeholder="Enter doctor description"
                    ></textarea>

                    <label className="mt-2">Choose Doctor Image</label>
                    <input type="file" className="form-control" onChange={handleImage} />

                    <button
                        onClick={handleUpdate}
                        className="btn btn-primary w-100 mt-3"
                    >
                        Update Doctor
                    </button>
                </form>
                <div>
                    <h6>Old Image</h6>
                    <img
                        src={`http://localhost:5000/doctors/${oldImage}`}
                        alt="Old Doctor"
                        height="150"
                        width="300"
                        className="img-fluid rounded"
                    />

                    {previewNewImage && (
                        <>
                            <h6 className="mt-3">New Image</h6>
                            <img
                                src={previewNewImage}
                                alt="New Doctor"
                                height="150"
                                width="300"
                                className="img-fluid rounded"
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UpdateDoctor;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getSingleDoctor, updateDoctor } from '../../apis/Api';
// import { toast } from 'react-toastify';

// const UpdateDoctor = () => {
//     const { id } = useParams();

//     useEffect(() => {
//         getSingleDoctor(id).then((res) => {
//             console.log(res.data);

//             setDoctorName(res.data.doctor.doctorName);
//             setDoctorSpecialization(res.data.doctor.doctorSpecialization);
//             setDoctorFees(res.data.doctor.doctorFees);
//             setDoctorDescription(res.data.doctor.doctorDescription);
//             setOldImage(res.data.doctor.doctorImage);
//         }).catch((error) => {
//             console.log(error);
//         });
//     }, [id]);

//     const [doctorName, setDoctorName] = useState('');
//     const [doctorSpecialization, setDoctorSpecialization] = useState('');
//     const [doctorFees, setDoctorFees] = useState('');
//     const [doctorDescription, setDoctorDescription] = useState('');

//     const [doctorNewImage, setDoctorNewImage] = useState(null);
//     const [previewNewImage, setPreviewNewImage] = useState(null);
//     const [oldImage, setOldImage] = useState('');

//     const handleImage = (event) => {
//         const file = event.target.files[0];
//         setDoctorNewImage(file);
//         setPreviewNewImage(URL.createObjectURL(file));
//     };

//     const handleUpdate = (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('doctorName', doctorName);
//         formData.append('doctorSpecialization', doctorSpecialization);
//         formData.append('doctorFees', doctorFees);
//         formData.append('doctorDescription', doctorDescription);

//         if (doctorNewImage) {
//             formData.append('doctorImage', doctorNewImage);
//         }

//         updateDoctor(id, formData).then((res) => {
//             if (res.status === 201) {
//                 toast.success(res.data.message);
//             }
//         }).catch((error) => {
//             if (error.response.status === 500) {
//                 toast.error(error.response.data.message);
//             } else if (error.response.status === 400) {
//                 toast.error(error.response.data.message);
//             }
//         });
//     };

//     return (
//         <>
//             <div className='container mt-3'>
//                 <h2>
//                     Update Doctor Details for{' '}
//                     <span className='text-primary'>{doctorName}</span>
//                 </h2>
//                 <div className='d-flex gap-3'>
//                     <form>
//                         <label htmlFor="">Doctor Name</label>
//                         <input
//                             value={doctorName}
//                             onChange={(e) => setDoctorName(e.target.value)}
//                             className='form-control'
//                             type="text"
//                             placeholder='Enter doctor name'
//                         />

//                         <label className='mt-2'>Specialization</label>
//                         <select
//                             value={doctorSpecialization}
//                             onChange={(e) => setDoctorSpecialization(e.target.value)}
//                             className='form-control'
//                         >
//                             <option value="cardiologist">Cardiologist</option>
//                             <option value="neurologist">Neurologist</option>
//                             <option value="dentist">Dentist</option>
//                             <option value="dermatologist">Dermatologist</option>
//                             <option value="surgeon">Surgeon</option>
//                         </select>

//                         <label className='mt-2'>Fees</label>
//                         <input
//                             value={doctorFees}
//                             onChange={(e) => setDoctorFees(e.target.value)}
//                             className='form-control'
//                             type="number"
//                             placeholder='Enter doctor fees'
//                         />

//                         <label className='mt-2'>Description</label>
//                         <textarea
//                             value={doctorDescription}
//                             onChange={(e) => setDoctorDescription(e.target.value)}
//                             className='form-control'
//                         ></textarea>

//                         <label className='mt-2'>Choose Doctor Image</label>
//                         <input onChange={handleImage} type="file" className='form-control' />

//                         <button
//                             onClick={handleUpdate}
//                             className='btn btn-primary w-100 mt-2'
//                             style={{
//                                 backgroundColor: '#4A90E2',
//                                 borderColor: '#4A90E2',
//                                 color: 'white',
//                             }}
//                         >
//                             Update Doctor
//                         </button>
//                     </form>
//                     <div className='image section'>
//                         <h6>Previewing Old Image</h6>
//                         <img
//                             height={'150px'}
//                             width={'300px'}
//                             className='image-fluid-rounded-4 object-fit-cover'
//                             src={`http://localhost:5000/doctors/${oldImage}`}
//                             alt=""
//                         />

//                         {previewNewImage && (
//                             <>
//                                 <h6 className='mt-3'>New Image</h6>
//                                 <img
//                                     height={'150px'}
//                                     width={'300px'}
//                                     className='image-fluid-rounded-4 object-fit-cover'
//                                     src={previewNewImage}
//                                     alt=""
//                                 />
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default UpdateDoctor;



