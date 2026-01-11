import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  // Dummy data (later API se aayega)
  const project = {
    groupName: "Avengers",
    projectTitle: "THE AVENGERS INITIATIVE",
    projectType: "Major",
    projectArea: "AI & Defense",
    description: "Earth protection system using AI",
    guide: {
      name: "Dr. Strange",
      email: "strange@college.edu",
      phone: "9999999999"
    },
    members: [
      { name: "Doctor Strange", role: "Leader" },
      { name: "Scarlet Witch", role: "Member" },
      { name: "Vision", role: "Member" }
    ]
  };

  return (
    <div className="card mt-4 p-4">
      <button
        className="btn btn-sm btn-outline-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h4>{project.projectTitle}</h4>
      <p className="text-muted">{project.groupName}</p>

      <p><b>Type:</b> {project.projectType}</p>
      <p><b>Area:</b> {project.projectArea}</p>
      <p><b>Description:</b> {project.description}</p>

      <hr />

      <h5>Guide Allocated</h5>
      <p><b>Name:</b> {project.guide.name}</p>
      <p><b>Email:</b> {project.guide.email}</p>
      <p><b>Phone:</b> {project.guide.phone}</p>

      <hr />

      <h5>Group Members</h5>
      <ul>
        {project.members.map((m, i) => (
          <li key={i}>
            {m.name} — <small>{m.role}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;
