import React from "react";
import { Link } from "react-router-dom";

function ProfileView() {
  const faculty = {
    facultyId: "FAC2024",
    name: "Dr. Rajesh Mehta",
    email: "rajesh.mehta@college.edu",
    phone: "8888888888",
    department: "Computer Engineering",
    designation: "Associate Professor",
  };

  return (
    <div className="col-md-6">
      <p><b>Faculty ID:</b> {faculty.facultyId}</p>
      <p><b>Name:</b> {faculty.name}</p>
      <p><b>Email:</b> {faculty.email}</p>
      <p><b>Phone:</b> {faculty.phone}</p>
      <p><b>Department:</b> {faculty.department}</p>
      <p><b>Designation:</b> {faculty.designation}</p>

      <Link to="update" className="btn btn-primary mt-3">
        Update Profile
      </Link>
    </div>
  );
}

export default ProfileView;
