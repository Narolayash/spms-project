import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProposalForm = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const isLeader = true; // 🔐 backend se aayega

  const [form, setForm] = useState({
    title: "",
    area: "",
    description: "",
    objectives: ""
  });

  if (!isLeader) {
    return (
      <div className="alert alert-danger mt-4">
        Only group leader can submit proposal.
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("GroupID:", groupId);
    console.log("Proposal Data:", form);

    alert("Proposal submitted successfully!");
    navigate(`/student/project-group/${groupId}/proposal`);
  };

  return (
    <div className="card mt-3 p-4">
      <h5>Submit Project Proposal</h5>

      <input
        className="form-control mb-3"
        placeholder="Project Title"
        name="title"
        value={form.title}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="Project Area (AI, Web, IoT)"
        name="area"
        value={form.area}
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-3"
        rows="4"
        placeholder="Project Description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-3"
        rows="3"
        placeholder="Objectives"
        name="objectives"
        value={form.objectives}
        onChange={handleChange}
      />

      <div className="d-flex gap-2">
        <button className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProposalForm;
