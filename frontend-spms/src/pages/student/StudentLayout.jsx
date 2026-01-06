import { Outlet } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";
import StudentSidebar from "./StudentSidebar";
import { useEffect } from "react";

function StudentLayout() {

  useEffect(() => {
      document.title = `SPMS - Student`
  }, []);

  return (
    <>
      <StudentNavbar />
      <StudentSidebar />

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

export default StudentLayout;
