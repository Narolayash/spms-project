import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinGroup = () => {
  const navigate = useNavigate();
  const [groupCode, setGroupCode] = useState("");

  return (
    <div className="card mt-4 p-3">
      <h5>Join Project Group</h5>

      <input
        className="form-control"
        placeholder="Enter Group Code"
        onChange={e => setGroupCode(e.target.value)}
      />

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-primary">
          Join
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/student/project-group")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default JoinGroup;
