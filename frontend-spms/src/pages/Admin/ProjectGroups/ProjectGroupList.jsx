import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectGroupList = () => {
  const navigate = useNavigate();

  const projectGroups = [
    {
      id: 1,
      name: "AI Innovators",
      type: "Major Project",
      guide: "Dr. Raj Sharma",
      title: "AI Based Attendance System",
      status: "Pending",
    },
    {
      id: 2,
      name: "Web Wizards",
      type: "Mini Project",
      guide: "Prof. Neha Mehta",
      title: "Student Portal",
      status: "Approved",
    },
  ];

  return (
    <>
      <h3>Project Groups</h3>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Group Name</th>
            <th>Project Type</th>
            <th>Guide</th>
            <th>Project Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {projectGroups.map((group, index) => (
            <tr key={group.id}>
              <td>{index + 1}</td>
              <td>{group.name}</td>
              <td>{group.type}</td>
              <td>{group.guide}</td>
              <td>{group.title}</td>
              <td>
                <span
                  className={`badge ${
                    group.status === "Approved"
                      ? "bg-success"
                      : "bg-warning"
                  }`}
                >
                  {group.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() =>
                    navigate(`/admin/project-groups/${group.id}`)
                  }
                >
                  View
                </button>

                <button
                  className="btn btn-sm btn-info me-2"
                  onClick={() =>
                    navigate(`/admin/project-groups/${group.id}/members`)
                  }
                >
                  Members
                </button>

                <button
                  className="btn btn-sm btn-success"
                  onClick={() =>
                    navigate(`/admin/project-groups/${group.id}/approval`)
                  }
                >
                  Approval
                </button>

                <button
                  className="btn btn-sm btn-warning ms-2"
                  onClick={() =>
                    navigate(`/admin/project-groups/${group.id}/assign-staff`)
                  }
                >
                  Assign Staff
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProjectGroupList;
