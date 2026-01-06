import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// faculty mock data
import facultyData from "../../data/faculty.json";

 function Faculties() {
  const [faculty, setFaculty] = useState(facultyData);
  const navigate = useNavigate();

  const handleAddFaculty = () => navigate("/admin/faculty-form");

  const handleEdit = (facultyData) => {
    navigate("/admin/faculty-form", { state: facultyData });
  };

  const handleDelete = (id) => {
    setFaculty(faculty.filter(f => f.StaffID !== id));
  };

  return (
    <>
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Faculty List</h4>
        <button
          className="btn btn-primary"
          onClick={handleAddFaculty}
        >
          + Add Faculty
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
            {faculty.map(f => (
              <tr key={f.StaffID}>
                <td>{f.StaffName}</td>
                <td>{f.Phone}</td>
                <td>{f.Email}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(f)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(f.StaffID)}
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
  </>

  );
}

export default Faculties;
