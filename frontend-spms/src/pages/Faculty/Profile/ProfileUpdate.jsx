import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileUpdate() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    facultyId: "FAC2024",
    name: "Dr. Rajesh Mehta",
    email: "rajesh.mehta@college.edu",
    phone: "8888888888",
    department: "Computer Engineering",
    designation: "Associate Professor",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Faculty profile updated");
    navigate("/faculty/profile");
  };

  const handleCancel = () => {
    navigate("/faculty/profile");
  };

  return (
    <form onSubmit={handleSubmit} className="col-md-6">
      <div className="mb-3">
        <label>Faculty ID</label>
        <input className="form-control" value={form.facultyId} disabled />
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
        <label>Designation</label>
        <input
          name="designation"
          className="form-control"
          value={form.designation}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-success">Update</button>
      <button
        type="button"
        className="btn btn-secondary ms-2"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </form>
  );
}

export default ProfileUpdate;
