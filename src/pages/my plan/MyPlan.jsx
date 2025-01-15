import React, { useEffect, useState } from "react";
import { getUserMyPlanApi, removeFromMyPlanApi } from "../../apis/Api";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import "./MyPlan.css";

const MyPlan = () => {
  const [plan, setPlan] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPlan();
  }, []);

  const fetchPlan = async () => {
    try {
      const res = await getUserMyPlanApi();
      if (Array.isArray(res.data.data)) {
        setPlan(res.data.data);
      } else {
        throw new Error("Plan data is not an array");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching My Plan");
    }
  };

  const handleRemove = async (doctorId) => {
    const confirmDialog = window.confirm(
      "Are you sure you want to remove this doctor from your plan?"
    );
    if (!confirmDialog) return;

    try {
      await removeFromMyPlanApi(doctorId);
      toast.success("Doctor removed from My Plan");
      fetchPlan();
    } catch (err) {
      setError(err.response?.data?.message || "Error removing doctor from My Plan");
      toast.error("Error removing doctor from My Plan");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2>My Plan</h2>
        {error && <p className="text-danger">{error}</p>}
        {plan.length === 0 ? (
          <p>Your plan is empty.</p>
        ) : (
          <div className="plan-container">
            {plan.map((doctor) => (
              <div key={doctor._id} className="plan-item">
                <img
                  src={`http://localhost:5000/doctors/${doctor.doctorImage}`}
                  alt={doctor.doctorName}
                  className="plan-image"
                />
                <div className="plan-details">
                  <h4 className="plan-doctor-name">{doctor.doctorName}</h4>
                  <p className="plan-doctor-specialization">{doctor.doctorSpecialization}</p>
                  <p className="plan-doctor-fees">Rs {doctor.doctorFees}</p>
                </div>
                <button className="plan-remove" onClick={() => handleRemove(doctor._id)}>
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyPlan;
