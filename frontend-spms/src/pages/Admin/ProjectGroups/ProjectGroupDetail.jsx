import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectGroupDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const group = {
    name: "AI Innovators",
    projectType: "Major Project",
    projectTitle: "AI Based Attendance System",
    projectArea: "Artificial Intelligence",
    description: "Face recognition based attendance system",
    guide: "Dr. Raj Sharma",
    convener: "Prof. Amit Verma",
    expert: "Dr. Neha Mehta",
  };

  return (
    <>
      <h3>Project Group Details</h3>

      <div className="card mt-3">
        <div className="card-body">
          <p><b>Group Name:</b> {group.name}</p>
          <p><b>Project Type:</b> {group.projectType}</p>
          <p><b>Project Title:</b> {group.projectTitle}</p>
          <p><b>Project Area:</b> {group.projectArea}</p>
          <p><b>Description:</b> {group.description}</p>
          <p><b>Guide:</b> {group.guide}</p>
          <p><b>Convener:</b> {group.convener}</p>
          <p><b>Expert:</b> {group.expert}</p>

          <button
            className="btn btn-secondary mt-2"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectGroupDetail;
