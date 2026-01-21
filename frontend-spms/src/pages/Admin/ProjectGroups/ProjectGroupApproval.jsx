import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectGroupApproval = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [remark, setRemark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Status: ${status}\nRemark: ${remark}`);
    navigate(-1);
  };

  return (
    <>
      <h3>Project Group Approval</h3>

      <form onSubmit={handleSubmit} className="col-md-6 mt-3">
        <div className="mb-3">
          <label>Status</label>
          <select
            className="form-control"
            required
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Approved">Approve</option>
            <option value="Rejected">Reject</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Remark</label>
          <textarea
            className="form-control"
            rows="3"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>

        <button className="btn btn-success me-2">Submit</button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default ProjectGroupApproval;
