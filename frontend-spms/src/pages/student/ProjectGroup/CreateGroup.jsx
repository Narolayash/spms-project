import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateGroupForm = () => {
  const navigate = useNavigate();

  const students = [
    { id: 1, name: "Amit Patel" },
    { id: 2, name: "Rahul Sharma" },
    { id: 3, name: "Neha Verma" },
    { id: 4, name: "Priya Singh" }
  ];

  const [form, setForm] = useState({
    groupName: "",
    projectTitle: "",
    projectType: "",
    members: []
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 👇 Checkbox handle
  const handleMemberCheck = (studentId) => {
    setForm((prev) => ({
      ...prev,
      members: prev.members.includes(studentId)
        ? prev.members.filter((id) => id !== studentId)
        : [...prev.members, studentId]
    }));
  };

  const handleCancel = () => {
    navigate("/student/project-group");
  };

  const handleSubmit = () => {
    console.log("Final Group Data:", form);
  };

  return (
    <div className="card mt-4 p-3">
      <h5>Create Project Group</h5>

      <input
        className="form-control mb-2"
        placeholder="Group Name"
        name="groupName"
        value={form.groupName}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        placeholder="Project Title"
        name="projectTitle"
        value={form.projectTitle}
        onChange={handleChange}
      />

      <select
        className="form-control mb-2"
        name="projectType"
        value={form.projectType}
        onChange={handleChange}
      >
        <option value="">Select Project Type</option>
        <option value="Major">Major</option>
        <option value="Mini">Mini</option>
        <option value="Research">Research</option>
      </select>

      {/* 👇 Checkbox Members */}
      <label className="fw-bold mt-3">Select Group Members</label>

      <div
        className="border rounded p-2"
        style={{
          maxHeight: "200px",
          overflowY: "auto"
        }}
      >
        {students.map((stu) => (
          <div key={stu.id} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={`stu-${stu.id}`}
              checked={form.members.includes(stu.id)}
              onChange={() => handleMemberCheck(stu.id)}
            />
            <label
              className="form-check-label"
              htmlFor={`stu-${stu.id}`}
            >
              {stu.name}
            </label>
          </div>
        ))}
      </div>

      {/* Selected Members Preview */}
      {form.members.length > 0 && (
        <div className="mt-2">
          <strong>Selected Members:</strong>
          <ul>
            {form.members.map((id) => {
              const student = students.find((s) => s.id === id);
              return <li key={id}>{student?.name}</li>;
            })}
          </ul>
        </div>
      )}

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-success" onClick={handleSubmit}>
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
