import { useNavigate, useParams } from "react-router-dom";

const DocumentList = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const documents = [
    {
      id: 1,
      name: "Project Proposal.pdf",
      type: "PDF",
      uploadedBy: "Leader",
      date: "10 Feb 2026"
    },
    {
      id: 2,
      name: "Design Diagram.ppt",
      type: "PPT",
      uploadedBy: "Leader",
      date: "18 Feb 2026"
    }
  ];

  if (documents.length === 0) {
    return <p className="text-muted">No documents uploaded yet.</p>;
  }

  return (
    <div className="mt-3">
      {documents.map(doc => (
        <div
          key={doc.id}
          className="card p-3 mb-2"
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(
              `/student/project-group/${groupId}/documents/${doc.id}`
            )
          }
        >
          <h6>{doc.name}</h6>
          <p className="mb-1"><b>Type:</b> {doc.type}</p>
          <p className="mb-1"><b>Uploaded By:</b> {doc.uploadedBy}</p>
          <small className="text-muted">{doc.date}</small>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
