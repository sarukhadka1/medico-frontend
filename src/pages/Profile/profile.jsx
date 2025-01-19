// import React, { useState, useEffect } from 'react';
// import { getUserProfileApi, updateUserProfileApi } from '../../apis/Api';
// import { toast } from 'react-toastify';
// import './Profile.css';

// const Profile = () => {
//   const [user, setUser] = useState({});
//   const [editMode, setEditMode] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [middleName, setMiddleName] = useState(''); // Added middle name
//   const [lastName, setLastName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     getUserProfileApi()
//       .then((res) => {
//         setUser(res.data);
//         setFirstName(res.data.firstName);
//         setMiddleName(res.data.middleName || ''); // Handle middle name
//         setLastName(res.data.lastName);
//         setPhone(res.data.phone);
//       })
//       .catch(() => {
//         toast.error('Error fetching user data');
//       });
//   }, []);

//   const handleUpdateProfile = (e) => {
//     e.preventDefault();
//     updateUserProfileApi({ firstName, middleName, lastName, phone, password }) // Include middle name
//       .then((res) => {
//         toast.success('Profile updated successfully');
//         setUser(res.data);
//         setEditMode(false);
//       })
//       .catch(() => {
//         toast.error('Error updating profile');
//       });
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <div className="profile-header">
//           {/* <img src="../../assets/images/logo.png" alt="Medico Logo" /> */}
//           <h1>User Profile</h1>
//         </div>
//         {!editMode ? (
//           <div className="profile-info">
//             <div className="profile-row">
//               <label>First Name:</label>
//               <p>{user.firstName}</p>
//             </div>
//             <div className="profile-row">
//               <label>Middle Name:</label>
//               <p>{user.middleName || 'N/A'}</p>
//             </div>
//             <div className="profile-row">
//               <label>Last Name:</label>
//               <p>{user.lastName}</p>
//             </div>
//             <div className="profile-row">
//               <label>Email:</label>
//               <p>{user.email}</p>
//             </div>
//             <div className="profile-row">
//               <label>Phone:</label>
//               <p>{user.phone}</p>
//             </div>
//             <button
//               onClick={() => setEditMode(true)}
//               className="bg-blue-500 text-white py-2 px-4 rounded"
//             >
//               Edit Profile
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={handleUpdateProfile} className="edit-profile-form">
//             <div className="form-group mb-4">
//               <label>First Name</label>
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </div>
//             <div className="form-group mb-4">
//               <label>Middle Name</label>
//               <input
//                 type="text"
//                 value={middleName}
//                 onChange={(e) => setMiddleName(e.target.value)}
//               />
//             </div>
//             <div className="form-group mb-4">
//               <label>Last Name</label>
//               <input
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </div>
//             <div className="form-group mb-4">
//               <label>Phone</label>
//               <input
//                 type="text"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//             <div className="form-group mb-4">
//               <label>Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="flex justify-between mt-6">
//               <button
//                 type="button"
//                 onClick={() => setEditMode(false)}
//                 className="bg-gray-500 text-white py-2 px-4 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from 'react'; 
import { getUserProfileApi, updateUserProfileApi } from '../../apis/Api';
import { toast } from 'react-toastify';

const Profile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getUserProfileApi()
      .then((res) => {
        setUser(res.data);
        setFirstName(res.data.firstName);
        setMiddleName(res.data.middleName || '');
        setLastName(res.data.lastName);
        setPhone(res.data.phone);
      })
      .catch(() => {
        toast.error('Error fetching user data');
      });
  }, []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateUserProfileApi({ firstName, middleName, lastName, phone, password })
      .then((res) => {
        toast.success('Profile updated successfully');
        setUser(res.data);
        setEditMode(false);
      })
      .catch(() => {
        toast.error('Error updating profile');
      });
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url("https://images.pexels.com/photos/7904481/pexels-photo-7904481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Add the path to your background image here
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    card: {
      width: '600px',
      backgroundColor: 'rgba(230, 245, 255, 0.9)', // Very light blue with transparency
      borderRadius: '10px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    headerText: {
      fontSize: '26px',
      color: '#0d47a1', // Darker blue for the header
      fontWeight: 'bold',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '15px',
    },
    label: {
      fontWeight: 'bold',
      color: '#0d47a1',
    },
    value: {
      color: '#1a237e',
    },
    formGroup: {
      marginBottom: '20px',
    },
    formLabel: {
      display: 'block',
      fontWeight: 'bold',
      color: '#0d47a1',
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #90caf9', // Blue border
      borderRadius: '5px',
      backgroundColor: '#f8fbff', // Very light blue input background
    },
    button: {
      cursor: 'pointer',
      backgroundColor: '#0d47a1',
      border: 'none',
      color: 'white',
      padding: '12px 25px',
      borderRadius: '5px',
      textAlign: 'center',
    },
    cancelButton: {
      backgroundColor: '#6c757d',
    },
    flex: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.headerText}>User Profile</h1>
        </div>
        {!editMode ? (
          <div>
            <div style={styles.row}>
              <label style={styles.label}>First Name:</label>
              <p style={styles.value}>{user.firstName}</p>
            </div>
            <div style={styles.row}>
              <label style={styles.label}>Middle Name:</label>
              <p style={styles.value}>{user.middleName || 'N/A'}</p>
            </div>
            <div style={styles.row}>
              <label style={styles.label}>Last Name:</label>
              <p style={styles.value}>{user.lastName}</p>
            </div>
            <div style={styles.row}>
              <label style={styles.label}>Email:</label>
              <p style={styles.value}>{user.email}</p>
            </div>
            <div style={styles.row}>
              <label style={styles.label}>Phone:</label>
              <p style={styles.value}>{user.phone}</p>
            </div>
            <button
              onClick={() => setEditMode(true)}
              style={styles.button}
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <form onSubmit={handleUpdateProfile}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Middle Name</label>
              <input
                type="text"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={styles.input}
              />
            </div>
            {/* <div style={styles.formGroup}>
              <label style={styles.formLabel}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </div> */}
            <div style={styles.flex}>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                style={{ ...styles.button, ...styles.cancelButton }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={styles.button}
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
