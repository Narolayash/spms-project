import { Outlet } from "react-router-dom";
import FacultyNavbar from "./FacultyNavbar";
import FacultySidebar from "./FacultySidebar";
import { useEffect } from "react";
import Navbar from "../../component/Navbar";

function FacultyLayout() {

  useEffect(() => {
      document.title = `SPMS - Faculty`
  }, []);

  return (
    <>
      <Navbar user="Faculty" background="success" />
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
