import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import studentData from "../../data/students.json";

function StudentForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state || {};

  const [students, setStudents] = useState(studentData);

  const [form, setForm] = useState({
    StudentID: editData.StudentID || null,
    StudentName: editData.StudentName || "",
    Phone: editData.Phone || "",
    Email: editData.Email || "",
    Description: editData.Description || ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.StudentID) {
      setStudents(students.map(s =>
        s.StudentID === form.StudentID ? form : s
      ));
    } else {
      setStudents([...students, { ...form, StudentID: Date.now() }]);
    }

    navigate("/admin/students");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">

            <div className="card-header bg-primary text-white fw-bold">
              {form.StudentID ? "Edit Student" : "Add Student"}
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>

                <input
                  className="form-control mb-3"
                  name="StudentName"
                  placeholder="Student Name"
                  value={form.StudentName}
                  onChange={handleChange}
                />

                <input
                  className="form-control mb-3"
                  name="Phone"
                  placeholder="Phone"
                  value={form.Phone}
                  onChange={handleChange}
                />

                <input
                  className="form-control mb-3"
                  name="Email"
                  placeholder="Email"
                  value={form.Email}
                  onChange={handleChange}
                />

                <textarea
                  className="form-control mb-3"
                  name="Description"
                  placeholder="Description"
                  value={form.Description}
                  onChange={handleChange}
                  rows="3"
                />

                <div className="d-flex justify-content-between">
                  <button className="btn btn-success">
                    {form.StudentID ? "Update Student" : "Add Student"}
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/admin/students")}
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
