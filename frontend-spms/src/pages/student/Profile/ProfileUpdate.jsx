import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileUpdate() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    studentId: "STU2024",
    name: "Amit Patel",
    email: "amit.patel@college.edu",
    phone: "7777777777",
    department: "IT",
    cgpa: "8.2",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student profile updated");
    navigate("/student/profile");
  };

  return (
    <form onSubmit={handleSubmit} className="col-md-6">
      <div className="mb-3">
        <label>Student ID</label>
        <input className="form-control" value={form.studentId} disabled />
      </div>

      <div className="mb-3">
        <label>Name</label>
        <input
          name="name"
          className="form-control"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input className="form-control" value={form.email} disabled />
      </div>

      <div className="mb-3">
        <label>Phone</label>
        <input
          name="phone"
          className="form-control"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Department</label>
        <input
          name="department"
          className="form-control"
          value={form.department}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>CGPA</label>
        <input
          name="cgpa"
          className="form-control"
          value={form.cgpa}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-success">Update</button>
    </form>
  );
}

export default ProfileUpdate;
