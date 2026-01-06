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
      <button onClick={handleAddFaculty} >Add faculty</button>
      <div className="container mt-4">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
    </>
  );
}

export default Faculties;
