import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FacultyAddMeeting() {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: "",
    purpose: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Meeting Scheduled Successfully");
    navigate(`/faculty/project-groups/${groupId}/meetings`);
  };

  return (
    <>
      <h3>Schedule Meeting</h3>

      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="mb-3">
          <label>Date & Time</label>
          <input
            type="datetime-local"
            name="date"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Purpose</label>
          <input
            type="text"
            name="purpose"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success">Save</button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </form>
    </>
  );
}

export default FacultyAddMeeting;
