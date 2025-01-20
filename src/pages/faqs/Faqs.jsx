import React from 'react';

const FAQs = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: 'url("https://images.pexels.com/photos/7904481/pexels-photo-7904481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Background image
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    card: {
      width: '90%',
      maxWidth: '800px',
      backgroundColor: 'rgba(230, 245, 255, 0.9)', // Light blue with transparency
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      margin: '20px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#0d47a1',
      fontWeight: 'bold',
      fontSize: '24px',
    },
    section: {
      marginBottom: '20px',
    },
    subHeader: {
      color: '#0d47a1',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    list: {
      paddingLeft: '20px',
      lineHeight: '1.6',
    },
    question: {
      fontWeight: 'bold',
    },
    answer: {
      marginTop: '5px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.header}>FAQs</h1>

        {/* General Questions */}
        <div style={styles.section}>
          <h2 style={styles.subHeader}>General Questions</h2>
          <ol style={styles.list}>
            <li>
              <span style={styles.question}>What is Medico?</span>
              <p style={styles.answer}>Medico is an online healthcare platform that allows users to find doctors, view their profiles, book appointments, and manage their healthcare needs conveniently.</p>
            </li>
            <li>
              <span style={styles.question}>How does Medico work?</span>
              <p style={styles.answer}>Medico connects patients with healthcare providers. Users can search for doctors based on specialties, read reviews, book appointments, and track their bookings all in one place.</p>
            </li>
          </ol>
        </div>

        {/* Appointments */}
        <div style={styles.section}>
          <h2 style={styles.subHeader}>Appointments</h2>
          <ol style={styles.list}>
            <li>
              <span style={styles.question}>How do I book an appointment?</span>
              <p style={styles.answer}>To book an appointment, simply search for your preferred doctor, select a time and date, and confirm your booking.</p>
            </li>
            <li>
              <span style={styles.question}>Can I cancel or reschedule my appointment?</span>
              <p style={styles.answer}>Yes, you can cancel or reschedule your appointment through the "My Appointments" section, subject to the doctor’s cancellation policy.</p>
            </li>
            <li>
              <span style={styles.question}>Do I need an account to book an appointment?</span>
              <p style={styles.answer}>Yes, creating an account ensures that your bookings are saved, and you can manage them easily.</p>
            </li>
            <li>
              <span style={styles.question}>How will I know if my appointment is confirmed?</span>
              <p style={styles.answer}>You will receive a confirmation notification directly on your Medico profile after booking.</p>
            </li>
          </ol>
        </div>

        {/* Doctor Profiles and Reviews */}
        <div style={styles.section}>
          <h2 style={styles.subHeader}>Doctor Profiles and Reviews</h2>
          <ol style={styles.list}>
            <li>
              <span style={styles.question}>How do I find a doctor on Medico?</span>
              <p style={styles.answer}>Use the search bar to filter doctors by name.</p>
            </li>
            <li>
              <span style={styles.question}>Can I read reviews about doctors before booking?</span>
              <p style={styles.answer}>Yes, you can read patient reviews and ratings on each doctor’s profile to help make informed decisions.</p>
            </li>
            <li>
              <span style={styles.question}>How do I leave a review for a doctor?</span>
              <p style={styles.answer}>After your appointment, you will have the option to leave a review and rate your experience.</p>
            </li>
          </ol>
        </div>

        {/* Features */}
        <div style={styles.section}>
          <h2 style={styles.subHeader}>Features</h2>
          <ol style={styles.list}>
            <li>
              <span style={styles.question}>What is the "My Plan" feature?</span>
              <p style={styles.answer}>The "My Plan" feature allows you to save your preferred doctors and book an appointment with them at a later time.</p>
            </li>
            <li>
              <span style={styles.question}>Can I edit my profile information?</span>
              <p style={styles.answer}>Yes, you can update your personal information and contact details through the "Profile" section.</p>
            </li>
          </ol>
        </div>

        {/* Payments */}
        <div style={styles.section}>
          <h2 style={styles.subHeader}>Payments</h2>
          <ol style={styles.list}>
            <li>
              <span style={styles.question}>Do I need to pay for appointments through Medico?</span>
              <p style={styles.answer}>Payment options depend on the user. Users can make online payments or do in-person payments.</p>
            </li>
            <li>
              <span style={styles.question}>Is my payment information secure?</span>
              <p style={styles.answer}>Yes, Medico uses industry-standard encryption to protect your payment and personal information.</p>
            </li>
          </ol>
        </div>

        {/* Technical Issues */}
        <div style={styles.section}>
          <h2 style={styles.subHeader}>Technical Issues</h2>
          <ol style={styles.list}>
            <li>
              <span style={styles.question}>I forgot my password. What should I do?</span>
              <p style={styles.answer}>Click on the "Forgot Password" option on the login page to reset your password via OTP.</p>
            </li>
            <li>
              <span style={styles.question}>What should I do if I encounter a problem with the website?</span>
              <p style={styles.answer}>Please contact our support team through the "Contact Us" section for assistance.</p>
            </li>
          </ol>
        </div>

        {/* Privacy and Security */}
        <div style={styles.section}>
          <h2 style={styles.subHeader}>Privacy and Security</h2>
          <ol style={styles.list}>
            <li>
              <span style={styles.question}>Is my personal information safe with Medico?</span>
              <p style={styles.answer}>Yes, we prioritize user privacy and adhere to strict data protection policies to keep your information secure.</p>
            </li>
            <li>
              <span style={styles.question}>Can I delete my account?</span>
              <p style={styles.answer}>Yes, you can request account deletion by contacting our support team through the "Contact Us" page.</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
