import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import projectTypeData from "../../data/projecttpes.json";

function ProjectTypeList() {
  const [projectTypes, setProjectTypes] = useState(projectTypeData);
  const navigate = useNavigate();

  // Navigate to form for adding
  const handleAdd = () => navigate("/admin/project-type-form");

  // Navigate to form for editing, passing data
  const handleEdit = (pt) => navigate("/admin/project-type-form", { state: pt });

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project type?")) {
      setProjectTypes(projectTypes.filter((pt) => pt.ProjectTypeID !== id));
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Project Types</h4>
        <button className="btn btn-primary" onClick={handleAdd}>
          + Add Project Type
        </button>
      </div>

      <div className="row">
        {projectTypes.map((pt) => (
          <div key={pt.ProjectTypeID} className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{pt.ProjectTypeName}</h5>
                <p className="card-text">{pt.Description}</p>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-warning btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1"
                    onClick={() => handleEdit(pt)}
                  >
                    Edit <FaEdit />
                  </button>
                  <button
                    className="btn btn-danger btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1"
                    onClick={() => handleDelete(pt.ProjectTypeID)}
                  >
                    Delete <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTypeList;
