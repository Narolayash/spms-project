import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FacultyEvaluation() {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const [marks, setMarks] = useState({
    proposal: 15,
    progress: 25,
    documentation: 18,
    presentation: 28,
  });

  const total =
    Number(marks.proposal) +
    Number(marks.progress) +
    Number(marks.documentation) +
    Number(marks.presentation);

  const handleChange = (e) => {
    setMarks({ ...marks, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Evaluation submitted successfully");
    navigate(-1);
  };

  return (
    <>
      <h3>Project Evaluation</h3>

      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="mb-3">
          <label>Proposal (20)</label>
          <input
            type="number"
            max="20"
            name="proposal"
            className="form-control"
            value={marks.proposal}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Progress (30)</label>
          <input
            type="number"
            max="30"
            name="progress"
            className="form-control"
            value={marks.progress}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Documentation (20)</label>
          <input
            type="number"
            max="20"
            name="documentation"
            className="form-control"
            value={marks.documentation}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Presentation (30)</label>
          <input
            type="number"
            max="30"
            name="presentation"
            className="form-control"
            value={marks.presentation}
            onChange={handleChange}
          />
        </div>

        <h5>Total Marks: {total} / 100</h5>

        <div className="mb-3">
          <label>Remarks</label>
          <textarea className="form-control" rows="3" />
        </div>

        <button className="btn btn-success">Submit Evaluation</button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </form>
    </>
  );
}

export default FacultyEvaluation;
