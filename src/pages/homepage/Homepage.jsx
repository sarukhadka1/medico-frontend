// import React, { useEffect, useState } from "react";
// import { getAllDoctors, doctorPagination, getDoctorCount } from "../../apis/Api";
// import "./Homepage.css";

// import DoctorCard from "../../components/DoctorCard";

// const Homepage = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState('asc');
//   const [sortBy, setSortBy] = useState('name');
//   const limit = 8;

//   useEffect(() => {
//     fetchDoctorCount();
//     fetchDoctors(page, searchQuery, sortOrder, sortBy);
//   }, [page, searchQuery, sortOrder, sortBy]);

//   const fetchDoctorCount = async () => {
//     try {
//       const res = await getDoctorCount();
//       const count = res.data.doctorCount;
//       setTotalPages(Math.ceil(count / limit));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchDoctors = async (pageNum, searchQuery, sortOrder, sortBy) => {
//     try {
//       const res = await doctorPagination(pageNum, limit, searchQuery, sortOrder, sortBy);
//       setDoctors(res.data.doctors);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setPage(1);
//     fetchDoctors(1, searchQuery, sortOrder, sortBy);
//   };

//   const handlePagination = (pageNum) => {
//     setPage(pageNum);
//   };

//   const handleSortOrderChange = (e) => {
//     setSortOrder(e.target.value);
//     setPage(1);
//     fetchDoctors(1, searchQuery, e.target.value, sortBy);
//   };

//   const handleSortByChange = (e) => {
//     setSortBy(e.target.value);
//     setPage(1);
//     fetchDoctors(1, searchQuery, sortOrder, e.target.value);
//   };

//   return (
//     <>
//       <div className="container">
//         <div id="carouselExampleCaptions" className="carousel slide">
//           <div className="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//           </div>
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img src="https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg" className="d-block w-100" alt="..." />
//               <div className="carousel-caption d-none d-md-block">
//                 <h5>Top Doctors</h5>
//                 <p>Quality healthcare at your service.</p>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <img src="https://images.pexels.com/photos/7579819/pexels-photo-7579819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
//               <div className="carousel-caption d-none d-md-block">
//                 <h5>Excellence in Care</h5>
//                 <p>Because your health matters to us.</p>
//               </div>
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>

//         <h2 className="mt-2">Available Doctors</h2>

//         <form onSubmit={handleSearch} className="d-flex mb-4">
//           <input
//             type="text"
//             className="form-control me-2"
//             placeholder="Search doctors..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button type="submit" className="btn btn-outline-primary" style={{ backgroundColor: '#004AAD', color: 'white', border: 'none' }}>Search</button>
//         </form>

//         <div className="mb-4">
//           <label htmlFor="sortOrder" className="me-2">Sort by:</label>
//           <select
//             id="sortOrder"
//             className="form-select me-2"
//             value={sortOrder}
//             onChange={handleSortOrderChange}
//           >
//             <option value="asc">Fees: Low to High</option>
//             <option value="desc">Fees: High to Low</option>
//           </select>
//         </div>

//         <div className="row row-cols-1 row-cols-md-4 g-4">
//           {doctors.map((singleDoctor) => (
//             <div className="col" key={singleDoctor._id}>
//               <DoctorCard doctorInformation={singleDoctor} color={'blue'} />
//             </div>
//           ))}
//         </div>

//         {/* Pagination*/}

//         <nav aria-label="Page navigation" className="mt-4">
//           <ul className="pagination justify-content-center">
//             <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
//               <button className="page-link" onClick={() => handlePagination(1)} disabled={page === 1}>
//                 First
//               </button>
//             </li>
//             <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
//               <button className="page-link" onClick={() => handlePagination(page - 1)} disabled={page === 1}>
//                 Previous
//               </button>
//             </li>
//             {Array.from({ length: totalPages }, (_, i) => (
//               <li key={i} className={`page-item ${page === i + 1 ? "active" : ""}`}>
//                 <button className="page-link" onClick={() => handlePagination(i + 1)}>
//                   {i + 1}
//                 </button>
//               </li>
//             ))}
//             <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
//               <button className="page-link" onClick={() => handlePagination(page + 1)} disabled={page === totalPages}>
//                 Next
//               </button>
//             </li>
//             <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
//               <button className="page-link" onClick={() => handlePagination(totalPages)} disabled={page === totalPages}>
//                 Last
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Homepage;


import React, { useEffect, useState } from "react";
import { doctorPagination, getDoctorCount } from "../../apis/Api";
import "./Homepage.css";
import DoctorCard from "../../components/DoctorCard";

const Homepage = () => {
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("doctorName");
  const limit = 8;

  // Fetch doctor count and doctor list on component mount and updates
  useEffect(() => {
    fetchDoctorCount();
    fetchDoctors(page, searchQuery, sortOrder, sortBy);
  }, [page, searchQuery, sortOrder, sortBy]);

  // Fetch total doctor count for pagination
  const fetchDoctorCount = async () => {
    try {
      const res = await getDoctorCount();
      const count = res.data.doctorCount;
      setTotalPages(Math.ceil(count / limit));
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch doctors with query parameters
  const fetchDoctors = async (pageNum, searchQuery, sortOrder, sortBy) => {
    try {
      const res = await doctorPagination(pageNum, limit, searchQuery, sortOrder, sortBy);
      setDoctors(res.data.doctors);
      setTotalPages(Math.ceil(res.data.totalDoctors / limit));
    } catch (err) {
      console.error(err);
    }
  };

  // Handle search input and submit
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1); // Reset to first page on new search
    fetchDoctors(1, searchQuery, sortOrder, sortBy);
  };

  // Handle pagination click
  const handlePagination = (pageNum) => {
    setPage(pageNum);
    fetchDoctors(pageNum, searchQuery, sortOrder, sortBy);
  };

  // Handle sort order change
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
    setPage(1);
    fetchDoctors(1, searchQuery, e.target.value, sortBy);
  };

  // Handle sort field change
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    setPage(1);
    fetchDoctors(1, searchQuery, sortOrder, e.target.value);
  };

  return (
    <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Top Doctors</h5>
              <p>Quality healthcare at your service.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/7579819/pexels-photo-7579819.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Excellence in Care</h5>
              <p>Because your health matters to us.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="mt-4">Available Doctors</h2>

      {/* Search and Sort */}
      <form onSubmit={handleSearch} className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search doctors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-primary" style={{ backgroundColor: '#004AAD', color: 'white', border: 'none' }}>
          Search
        </button>
      </form>

      <div className="mb-4 d-flex">
        <label htmlFor="sortOrder" className="me-2">Sort by:</label>
        <select id="sortOrder" className="form-select me-2" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Fees: Low to High</option>
          <option value="desc">Fees: High to Low</option>
        </select>
      </div>

      {/* Doctor Cards */}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {doctors.map((singleDoctor) => (
          <div className="col" key={singleDoctor._id}>
            <DoctorCard doctorInformation={singleDoctor} color="blue" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation" className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePagination(1)}>First</button>
          </li>
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePagination(page - 1)}>Previous</button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`page-item ${page === i + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => handlePagination(i + 1)}>{i + 1}</button>
            </li>
          ))}
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePagination(page + 1)}>Next</button>
          </li>
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePagination(totalPages)}>Last</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Homepage;
