import React from "react";

function FacultyReports() {
  const reports = [
    {
      group: "Group Alpha",
      title: "AI Attendance System",
      meetings: 5,
      attendance: "92%",
      progress: "On Track",
    },
    {
      group: "Group Beta",
      title: "Online Exam Portal",
      meetings: 3,
      attendance: "75%",
      progress: "Needs Attention",
    },
  ];

  return (
    <>
      <h3>Faculty Reports</h3>

      {/* Project Summary */}
      <div className="card mt-3">
        <div className="card-body">
          <h5>Project Summary</h5>

          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Group</th>
                <th>Project Title</th>
                <th>Total Meetings</th>
                <th>Attendance</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r, index) => (
                <tr key={index}>
                  <td>{r.group}</td>
                  <td>{r.title}</td>
                  <td>{r.meetings}</td>
                  <td>{r.attendance}</td>
                  <td>
                    <span
                      className={`badge ${
                        r.progress === "On Track"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {r.progress}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attendance Overview */}
      <div className="card mt-4">
        <div className="card-body">
          <h5>Attendance Overview</h5>

          <ul>
            <li>Above 90% attendance → Excellent</li>
            <li>75% – 90% → Satisfactory</li>
            <li>Below 75% → Warning</li>
          </ul>
        </div>
      </div>

      {/* Progress Note */}
      <div className="alert alert-info mt-4">
        <b>Note:</b> Projects marked as <b>Needs Attention</b> require
        additional meetings or guidance.
      </div>
    </>
  );
}

export default FacultyReports;
