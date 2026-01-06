import React, { useState } from "react";

function AdminProfile() {
  const [form, setForm] = useState({
    name: "System Admin",
    email: "admin@college.edu",
    phone: "9999999999",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admin profile updated");
  };

  return (
    <>
      <h3>Admin Profile</h3>

      <form onSubmit={handleSubmit} className="col-md-6">
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
          <input
            name="email"
            className="form-control"
            value={form.email}
            disabled
          />
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

        <button className="btn btn-primary">Update Profile</button>
      </form>
    </>
  );
}

export default AdminProfile;
