import React from "react";

const ProjectGroup = () => {

  // multiple groups supported
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
      {myGroups.length === 0 ? (
        <p className="text-muted">You are not part of any project group.</p>
      ) : (
        myGroups.map(group => (
          <div key={group.id} className="card p-3 mb-3">
            <p><b>Group:</b> {group.groupName}</p>
            <p><b>Title:</b> {group.projectTitle}</p>
            <p><b>Type:</b> {group.projectType}</p>

            <b>Members:</b>
            <ul>
              {group.members.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectGroup;
