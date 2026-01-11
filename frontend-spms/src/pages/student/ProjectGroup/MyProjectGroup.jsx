import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectGroup = () => {
  const navigate = useNavigate();

  const myGroups = [
    {
      id: 1,
      groupName: "Avengers",
      projectTitle: "THE AVENGERS INITIATIVE",
      projectType: "Movie",
      members: ["Doctor Strange", "Scarlet Witch", "Vision"]
    }
  ];

  return (
    <div className="mt-4">
      {myGroups.map(group => (
        <div
          key={group.id}
          className="card p-3 mb-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`${group.id}`)}
        >
          <h5>{group.groupName}</h5>
          <p><b>Title:</b> {group.projectTitle}</p>
          <p><b>Type:</b> {group.projectType}</p>
          {/* <span className="badge bg-info">{group.projectType}</span> */}
        </div>
      ))}
    </div>
  );
};

export default ProjectGroup;
