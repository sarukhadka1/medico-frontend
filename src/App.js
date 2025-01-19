import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Loginpage';
import Register from './pages/register/Registerpage';
import Navbar from './components/Navbar';
import DoctorPanel from './pages/doctor/DoctorPanel';
import DoctorDescription from './pages/artistdescription/ArtistDescription';
import Services from './pages/services/Services';
// Toast Config
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/landing/LandingPage';
import AppointmentForm from './pages/appoint/AppointmentForm';
import AdminDashboard from './admin/admin_dashboard/AdminDashboard';
import UpdateDoctor from './admin/update_doctor/UpdateDoctor';
import AdminRoutes from './pages/protected_routes/AdminRoutes';
import DoctorCard from './components/DoctorCard';
import Profile from './pages/Profile/profile';
import ForgotPassword from './pages/forgot_password/Forgot_password';
import Footer from './components/Footer';
import MyPlan from './pages/my plan/MyPlan';
import SwitchNavbar from './components/SwitchNavbar';
import ViewContact from './admin/view_contact/ViewContact';
import Contact from './pages/contactus/ContactUs';
import ViewDoctor from './pages/viewdoctor/ViewDoctor';
import UserAppointments from './pages/appoint/UserAppointment';
import AppointmentList from './admin/appointment list/AppointmentList';

function App() {
  return (
    <Router>
      <SwitchNavbar />
      <ToastContainer />
      <Routes>
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/doctor' element={<DoctorPanel />} />
        <Route path='/doctor/:id' element={<DoctorDescription />} />
        <Route path='/services' element={<Services />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/appoint' element={<AppointmentForm />} />
        <Route path='/doctors/:id' element={<DoctorCard />} />
        <Route path='/view_doctor/:id' element={<DoctorDescription />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/myplan' element={<MyPlan />} />
        <Route path='/contactus' element={<ViewContact />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/view/:id' element={<ViewDoctor />} />
        <Route path='/my_appointments' element={<UserAppointments />} />
        

        {/* Admin Routes */}
        <Route element={<AdminRoutes />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/update/:id' element={<UpdateDoctor />} />
          <Route path='/admin/appointmentList' element={<AppointmentList />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
