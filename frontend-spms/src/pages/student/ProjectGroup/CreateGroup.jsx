import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateGroupForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    groupName: "",
    projectTitle: "",
    projectType: "",
    members: []
  });

  const handleCancel = () => {
    navigate("/student/project-group");
  };

  return (
    <div className="card mt-4 p-3">
      <h5>Create Project Group</h5>

      <input className="form-control mb-2" placeholder="Group Name" />
      <input className="form-control mb-2" placeholder="Project Title" />

      <select className="form-control mb-2">
        <option>Select Project Type</option>
        <option>Major</option>
        <option>Mini</option>
        <option>Research</option>
      </select>

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-success">
          Create
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateGroupForm;
