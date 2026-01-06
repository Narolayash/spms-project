import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import projectTypeData from "../../data/projecttpes.json";

function ProjectTypeForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state || {};

  const [projectTypes, setProjectTypes] = useState(projectTypeData);

  const [form, setForm] = useState({
    ProjectTypeID: editData.ProjectTypeID || null,
    ProjectTypeName: editData.ProjectTypeName || "",
    Description: editData.Description || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.ProjectTypeID) {
      setProjectTypes(
        projectTypes.map((pt) =>
          pt.ProjectTypeID === form.ProjectTypeID ? form : pt
        )
      );
    } else {
      setProjectTypes([...projectTypes, { ...form, ProjectTypeID: Date.now() }]);
    }

    navigate("/admin/project-types");
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
              {form.ProjectTypeID ? "Edit Project Type" : "Add Project Type"}
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="ProjectTypeName"
                  placeholder="Project Type Name"
                  value={form.ProjectTypeName}
                  onChange={handleChange}
                  className="form-control mb-3"
                  required
                />
                <input
                  type="text"
                  name="Description"
                  placeholder="Description"
                  value={form.Description}
                  onChange={handleChange}
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-success">
                    {form.ProjectTypeID ? "Update" : "Add"} Project Type
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/admin/project-types")}
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

export default ProjectTypeForm;
