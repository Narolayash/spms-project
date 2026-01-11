    import React, { useState, useEffect } from "react";

const JoinRequestNotification = () => {
  const [open, setOpen] = useState(false);
  const [requests, setRequests] = useState([]);

  const isLeader = true; // 🔥 later backend se aayega

  useEffect(() => {
    if (isLeader) {
      // Dummy data (API later)
      setRequests([
        { id: 1, studentName: "Rahul Sharma" },
        { id: 2, studentName: "Neha Verma" }
      ]);
    }
  }, [isLeader]);

  if (!isLeader) return null; // ❌ non-leader ko icon nahi dikhega

  const approve = (id) => {
    console.log("Approved", id);
    setRequests(prev => prev.filter(r => r.id !== id));
  };

  const reject = (id) => {
    console.log("Rejected", id);
    setRequests(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="position-relative">
      {/* 🔔 Bell Icon */}
      <button
        className="btn btn-light position-relative"
        onClick={() => setOpen(!open)}
      >
        🔔
        {requests.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {requests.length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="card position-absolute end-0 mt-2 p-2"
          style={{ width: "260px", zIndex: 1000 }}
        >
          <h6>Join Requests</h6>

          {requests.length === 0 && (
            <p className="text-muted mb-0">No new requests</p>
          )}

          {requests.map(req => (
            <div key={req.id} className="border-bottom pb-2 mb-2">
              <p className="mb-1">{req.studentName}</p>

              <button
                className="btn btn-success btn-sm"
                onClick={() => approve(req.id)}
              >
                Accept
              </button>

              <button
                className="btn btn-danger btn-sm ms-2"
                onClick={() => reject(req.id)}
              >
                Reject
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JoinRequestNotification;
