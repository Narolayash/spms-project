
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// student mock data
import studentData from "../../data/students.json";

function Students() {
  const [students, setStudents] = useState(studentData);
  const navigate = useNavigate();

  const handleAddStudent = () => navigate("/admin/student-form");

  const handleEdit = (student) => {
    navigate("/admin/student-form", { state: student });
  };

  const handleDelete = (id) => {
    setStudents(students.filter(s => s.StudentID !== id));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Student List</h4>
        <button className="btn btn-primary" onClick={handleAddStudent}>
          + Add Student
        </button>
      </div>

      <div className="card shadow-sm">
        <table className="table table-hover table-bordered mb-0">
          <thead className="table-dark text-center">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th style={{ width: "160px" }}>Action</th>
            </tr>
          </thead>
          <tbody className="text-center align-middle">
            {students.map(s => (
              <tr key={s.StudentID}>
                <td>{s.StudentName}</td>
                <td>{s.Phone}</td>
                <td>{s.Email}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(s)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(s.StudentID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
