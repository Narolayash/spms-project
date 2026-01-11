import React from "react";
import { Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <>
      <h2 className="mb-4">Student Profile</h2>
      <Outlet />
    </>
  );
}

export default ProfileLayout;
