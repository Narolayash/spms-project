import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/commanpages/Login";

// Admin Routes
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Faculties from "./pages/Admin/Faculties";
import FacultyForm from "./pages/Admin/FacultyForm";
import Students from "./pages/Admin/Students";
import StudentForm from "./pages/Admin/StudentForm";

// Faculty Routes
import FacultyDashboard from "./pages/Faculty/FacultyDashboard";

function App() {
    
  return (
    <>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" />} />
        <Route path="/login" element={ <Login /> } />

        <Route 
          path="/admin"
          element={
            <AdminLayout />
          }
        >
          <Route path="dashboard" element={ <AdminDashboard /> } />
          <Route path="faculty" element={ <Faculties /> } />
          <Route path="faculty-form" element={ <FacultyForm /> } />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/student-form" element={<StudentForm />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
