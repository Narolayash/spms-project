import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentAllDocuments = () => {
  const navigate = useNavigate();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    setDocs([
      {
        docId: 1,
        projectGroupId: 101,
        projectTitle: "AI Attendance System",
        name: "Proposal.pdf"
      },
      {
        docId: 2,
        projectGroupId: 102,
        projectTitle: "Online Voting System",
        name: "SRS.docx"
      }
    ]);
  }, []);

  return (
    <div className="container mt-4">
      <h4>My Documents</h4>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Project</th>
            <th>Document</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((d, i) => (
            <tr key={d.docId}>
              <td>{i + 1}</td>
              <td>{d.projectTitle}</td>
              <td>{d.name}</td>
              <td>
                <Link
                  to={`/student/project-group/${d.projectGroupId}/documents/${d.docId}`}
                  state={{ from: "/student/documents" }}
                  className="btn btn-sm btn-primary"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default StudentAllDocuments;
