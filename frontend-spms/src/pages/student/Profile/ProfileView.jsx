import React from "react";
import { Link } from "react-router-dom";

function ProfileView() {
  const student = {
    studentId: "STU2024",
    name: "Amit Patel",
    email: "amit.patel@college.edu",
    phone: "7777777777",
    department: "IT",
    cgpa: "8.2",
  };

  return (
    <div className="col-md-6">
      <p><b>Student ID:</b> {student.studentId}</p>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Phone:</b> {student.phone}</p>
      <p><b>Department:</b> {student.department}</p>
      <p><b>CGPA:</b> {student.cgpa}</p>

      <Link to="update" className="btn btn-primary mt-3">
        Edit Profile
      </Link>
    </div>
  );
}

export default ProfileView;
