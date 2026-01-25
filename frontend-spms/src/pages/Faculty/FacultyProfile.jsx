import React, { useState } from "react";

function FacultyProfile() {
  const [form, setForm] = useState({
    staffId: "FAC101",
    name: "Dr. Raj Sharma",
    email: "raj.sharma@college.edu",
    phone: "8888888888",
    department: "Computer Science",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Faculty profile updated");
  };

  return (
    <>
      <h3>Faculty Profile</h3>

      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="mb-3">
          <label>Staff ID</label>
          <input className="form-control" value={form.staffId} disabled />
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

        <button className="btn btn-success">Update Profile</button>
      </form>
    </>
  );
}

export default FacultyProfile;
