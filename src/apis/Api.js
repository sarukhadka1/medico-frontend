// import axios from 'axios';

// const Api = axios.create({
//     baseURL: 'http://localhost:5000',
//     withCredentials: true,
//     headers: {
//         'Content-Type': 'multipart/form-data'
//     }
// });

// Api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );


// const getToken = () => localStorage.getItem('token');
// const getConfig = () => ({
//     headers: {
//         'Authorization': `Bearer ${getToken()}`
//     }
// });

// const config = {
//     headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
// }

// // Register API
// export const registerUserApi = (data) => Api.post('/api/user/create', data);

// // Login API
// export const loginUserApi = (data) => Api.post('/api/user/login', data);

// // Create doctor API
// export const createDoctorApi = (formData) => Api.post('/api/doctor/create', formData, {
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//     }
// });

// // Get all doctors API
// export const getAllDoctors = () => Api.get('/api/doctor/get_all_doctors', getConfig());

// // Get single doctor API
// export const getSingleDoctor = (id) => Api.get(`/api/doctor/get_single_doctor/${id}`, getConfig());

// // Delete doctor API
// export const deleteDoctor = (id) => Api.delete(`/api/doctor/delete_doctor/${id}`, {
//     headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//     }
// });

// // Update doctor API
// export const updateDoctor = (id, data) => Api.put(`/api/doctor/update_doctor/${id}`, data, getConfig());

// export const doctorPagination = (page, limit, searchQuery = "", sortOrder = "asc") => {
//     const query = `?page=${page}&limit=${limit}&q=${searchQuery}&sort=${sortOrder}`;
//     return Api.get(`/api/doctor/pagination${query}`);
// };

// export const getDoctorCount = () => Api.get("/api/doctor/get_doctors_count");

// // Get user profile API
// export const getUserProfileApi = () => Api.get('/api/user/profile', getConfig());

// // Update user profile API
// export const updateUserProfileApi = (data) => Api.put('/api/user/profile', data, getConfig());

// export const forgotPasswordApi = (data) => Api.post('/api/user/forgot_password', data);
// export const verifyOtpApi = (data) => Api.post('/api/user/verify_otp', data);

// // Review APIs

// export const addReviewApi = (data) => Api.post('/api/rating/add', data);
// export const getReviewsApi = (doctorId) => Api.get(`/api/rating/doctor/${doctorId}`);

// // My Plan APIs

// export const getUserMyPlanApi = () => Api.get('api/myplan/all', config);

// export const addToMyPlanApi = (doctorId) => {
//     return Api.post(`api/myplan/add`, { doctorId }, config);
// };

// export const removeFromMyPlanApi = (doctorId) => Api.delete(`api/myplan/remove/${doctorId}`, config);

// // Appointments APIs

// export const getAllAppointments = () => Api.get('/api/appointment/all_appointments', config);

// export const createAppointment = (appointmentData) => Api.post('/api/appointment/appointments', appointmentData, config);

// export const updateAppointmentStatus = (updateData) => Api.put('/api/appointment/appointments/status', updateData, config);

// export const getUserAppointments = () => Api.get('/api/appointment/myappointments', config);

// export const updatePaymentMethod = (paymentData) => Api.put('/api/appointment/appointments/payment', paymentData, config);

// // Contact APIs

// export const getAllContacts = () => Api.get('/api/contact/all', config);

import axios from 'axios';

// Create Axios Instance
const Api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true, // Include cookies in requests
    headers: {
        'Content-Type': 'multipart/form-data' // Default to JSON content type
    }
});

// Axios Request Interceptor for Adding Authorization Header
Api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Set Authorization header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Helper Functions
const getToken = () => localStorage.getItem('token'); // Retrieve token
const getConfig = () => ({
    headers: {
        'Authorization': `Bearer ${getToken()}`, // Add Authorization header dynamically
    }
});

const config = {
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
    }, 
}

// API Functions

// User APIs
export const registerUserApi = (data) => Api.post('/api/user/create', data);
export const loginUserApi = (data) => Api.post('/api/user/login', data);
export const getUserProfileApi = () => Api.get('/api/user/profile', getConfig());
export const updateUserProfileApi = (data) => Api.put('/api/user/profile', data, getConfig());
export const forgotPasswordApi = (data) => Api.post('/api/user/forgot_password', data);
export const verifyOtpApi = (data) => Api.post('/api/user/verify_otp', data);

// Doctor APIs
export const createDoctorApi = (formData) => Api.post('/api/doctor/create', formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});
export const getAllDoctors = () => Api.get('/api/doctor/get_all_doctors', getConfig());
export const getSingleDoctor = (id) => Api.get(`/api/doctor/get_single_doctor/${id}`, getConfig());
export const deleteDoctor = (id) => Api.delete(`/api/doctor/delete_doctor/${id}`, {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});
export const updateDoctor = (id, data) => Api.put(`/api/doctor/update_doctor/${id}`, data, getConfig());


export const doctorPagination = (page, limit, searchQuery = "", sortOrder = "asc") => {
    const query = `?page=${page}&limit=${limit}&q=${searchQuery}&sort=${sortOrder}`;
    return Api.get(`/api/doctor/pagination${query}`, getConfig());
};
export const getDoctorCount = () => Api.get("/api/doctor/get_doctors_count", getConfig());

// Review APIs
export const addReviewApi = (data) => Api.post('/api/rating/add', data, getConfig());
export const getReviewsApi = (doctorId) => Api.get(`/api/rating/doctor/${doctorId}`, getConfig());

// My Plan APIs
export const getUserMyPlanApi = () => Api.get('/api/myplan/all', getConfig());
export const addToMyPlanApi = (doctorId) => {
    return Api.post('/api/myplan/add', { doctorId }, getConfig());
};
export const removeFromMyPlanApi = (doctorId) => Api.delete(`/api/myplan/remove/${doctorId}`, getConfig());

// Appointments APIs
export const getAllAppointments = () => Api.get('/api/appointment/all_appointments', getConfig());
export const createAppointment = (appointmentData) => Api.post('/api/appointment/appointments', appointmentData, getConfig());
export const updateAppointmentStatus = (updateData) => Api.put('/api/appointment/appointments/status', updateData, getConfig());
export const getUserAppointments = () => Api.get('/api/appointment/myappointments', getConfig());
export const updatePaymentMethod = (paymentData) => Api.put('/api/appointment/appointments/payment', paymentData, getConfig());

// Contact APIs
export const getAllContacts = () => Api.get('/api/contact/all', getConfig());

