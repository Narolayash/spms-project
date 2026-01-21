import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function FacultyProjectDocuments() {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const documents = [
    {
      id: 1,
      name: "Project Proposal",
      type: "PDF",
      uploadedOn: "05 Feb 2026",
      status: "Submitted",
    },
    {
      id: 2,
      name: "SRS Document",
      type: "DOCX",
      uploadedOn: "15 Feb 2026",
      status: "Reviewed",
    },
    {
      id: 3,
      name: "Final Report",
      type: "PDF",
      uploadedOn: "Pending",
      status: "Not Submitted",
    },
  ];

  return (
    <>
      <h3>Project Documents</h3>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Document Name</th>
            <th>Type</th>
            <th>Uploaded On</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.name}</td>
              <td>{doc.type}</td>
              <td>{doc.uploadedOn}</td>
              <td>
                <span
                  className={`badge ${
                    doc.status === "Reviewed"
                      ? "bg-success"
                      : doc.status === "Submitted"
                      ? "bg-warning text-dark"
                      : "bg-secondary"
                  }`}
                >
                  {doc.status}
                </span>
              </td>
              <td>
                {doc.status !== "Not Submitted" && (
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() =>
                      navigate(
                        `/faculty/project-groups/${groupId}/documents/${doc.id}`
                      )
                    }
                  >
                    View
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="btn btn-secondary"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
}

export default FacultyProjectDocuments;
