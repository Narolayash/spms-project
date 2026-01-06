import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/commanpages/Login";

import FacultyDashboard from "./pages/Faculty/FacultyDashboard";

// Admin Routes
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Faculties from "./pages/Admin/Faculties";
import FacultyForm from "./pages/Admin/FacultyForm";


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
        </Route>

      </Routes>
    </>
  );
}

export default App;
