import { Outlet } from "react-router-dom";
import FacultyNavbar from "./FacultyNavbar";
import FacultySidebar from "./FacultySidebar";

function FacultyLayout() {
  return (
    <>
      <FacultyNavbar />
      <FacultySidebar />

      <main
        className="p-4"
        style={{
          marginLeft: "240px",
          marginTop: "56px",
          minHeight: "100vh",
          background: "#f8f9fa",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}

export default FacultyLayout;
