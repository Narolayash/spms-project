import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FacultyDocumentDetail() {
  const { documentId } = useParams();
  const navigate = useNavigate();

  const [remarks, setRemarks] = useState("");

  const handleSave = () => {
    alert("Remarks saved successfully");
    navigate(-1);
  };

  return (
    <>
      <h3>Document Review</h3>

      <div className="card mb-3">
        <div className="card-body">
          <p><b>Document Name:</b> Project Proposal</p>
          <p><b>Uploaded By:</b> Group Leader</p>
          <p><b>Uploaded On:</b> 05 Feb 2026</p>

          <a href="#" className="btn btn-outline-primary btn-sm">
            View / Download Document
          </a>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <label>Faculty Remarks</label>
          <textarea
            className="form-control"
            rows="4"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />

          <button
            className="btn btn-success mt-3"
            onClick={handleSave}
          >
            Save Remarks
          </button>

          <button
            className="btn btn-secondary mt-3 ms-2"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default FacultyDocumentDetail;
