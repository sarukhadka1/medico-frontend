// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ArtistDescription.css';
// import Navbar from '../../components/Navbar';
//  // Ensure you create this CSS file for styling

// const ArtistDescription = ({ artist }) => {
//     const navigate = useNavigate();

//     const handleServicesClick = () => {
//         navigate('/services'); // Navigate to services page
//     };

//     return (
//         <div>
        
        
//         <div className="artist-description-container">
//             <div className="artist-profile">
//                 <img src={artist.image} alt={artist.name} className="artist-profile-image" />
//                 <div className="artist-info">
//                     <h2>{artist.name}</h2>
//                     <p className="rating">Makeup Artist {artist.rating} ★</p>
//                     <p className="bio">{artist.bio}</p>
//                 </div>
//             </div>
//             <div className="pricing-plan">
//                 <h3>PRICING PLAN</h3>
//                 <div className="pricing-sections">
//                     <div className="pricing-section">
//                         <h4>General Prices:</h4>
//                         <ul>
//                             {artist.generalPrices.map((item, index) => (
//                                 <li key={index}>{item}</li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="pricing-section">
//                         <h4>Home Service:</h4>
//                         <ul>
//                             {artist.homeServicePrices.map((item, index) => (
//                                 <li key={index}>{item}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <button className="services-button" onClick={handleServicesClick}>Services</button>
//         </div>
//         </div>
//     );
// };

// const artist = {
//     name: "Binita",
//     rating: "4.9",
//     image: "/assets/images/saru.png", // Replace with the correct path
//     bio: `
//         Hey there, I'm Binita, a professional makeup artist breaking the norms. While makeup might seem like a female-dominated field, I've carved my path with creativity and passion. My favorite color, a gentle and soothing light salmon pink, defines not only my style but also my perspective - a fusion of warmth and sophistication.

//         Beyond the glitz and glamour, I find my joy in the simplest of activities. You'll often catch me at home, wrapped up in captivating docuseries. There's something about unraveling real-life stories that keeps me hooked and inspires my artistry.

//         My brushes and palette are extensions of my imagination and skill. I turn faces into living, breathing works of art, each stroke telling a unique story. As a guy in the makeup world, I bring a fresh take, pushing boundaries and embracing the unexpected.

//         So here's to embracing pink, creating beauty, and finding inspiration in the comfort of my home, one docuseries at a time. I'm Saru- makeup artist, storyteller, and advocate for breaking stereotypes.
//     `,
//     generalPrices: [
//         "Bridal Makeup - 18000",
//         "Engagement Makeup - 8000",
//         "Reception Makeup - 20000",
//         "Mehendi Makeup - 7000",
//         "Party Makeup - 4000"
//     ],
//     homeServicePrices: [
//         "Bridal Makeup - 20000",
//         "Engagement Makeup - 10000",
//         "Reception Makeup - 22000",
//         "Mehendi Makeup - 9000",
//         "Party Makeup - 6000"
//     ]
// };

// const App = () => (
//     <ArtistDescription artist={artist} />
// );

// export default App;
