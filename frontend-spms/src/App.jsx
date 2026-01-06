  import { Navigate, Route, Routes } from "react-router-dom";

  import Login from "./pages/Login";

  // Admin Routes
  import AdminLayout from "./pages/Admin/AdminLayout";
  import AdminDashboard from "./pages/Admin/AdminDashboard";
  import AdminProfile from "./pages/Admin/AdminProfile";
  import Faculties from "./pages/Admin/Faculties";
  import FacultyForm from "./pages/Admin/FacultyForm";
  import Students from "./pages/Admin/Students";
  import StudentForm from "./pages/Admin/StudentForm";
  import ProjectTypeList from "./pages/Admin/ProjectTypes";
  import ProjectTypeForm from "./pages/Admin/ProjectTypeForm";

  // Faculty Routes
  import FacultyLayout from "./pages/Faculty/FacultyLayout";
  import FacultyDashboard from "./pages/Faculty/FacultyDashboard";
  import FacultyProfile from "./pages/Faculty/FacultyProfile";

  // Student Routes
  import StudentLayout from "./pages/Student/StudentLayout";
  import StudentDashboard from "./pages/Student/StudentDashboard";
  import StudentProfile from "./pages/Student/StudentProfile";

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
            <Route index element={ <Navigate to="dashboard" /> } />
            <Route path="dashboard" element={ <AdminDashboard /> } />
            <Route path="profile" element={ <AdminProfile /> } />
            <Route path="faculty" element={ <Faculties /> } />
            <Route path="faculty-form" element={ <FacultyForm /> } />
            <Route path="students" element={ <Students /> } />
            <Route path="student-form" element={ <StudentForm /> } />
            <Route path="project-types" element={ <ProjectTypeList /> } />
            <Route path="project-type-form" element={ <ProjectTypeForm /> } />
          </Route>

          <Route 
            path="/student" 
            element={
            <StudentLayout />
            }
          >
            <Route index element={ <Navigate to="dashboard" /> } />
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={ <StudentDashboard /> } />
            <Route path="profile" element={ <StudentProfile /> } />
            {/* <Route path="profile" element={<StudentProfile />} /> */}
            {/* <Route path="project-group" element={<StudentProjectGroup />} /> */}
            {/* <Route path="project-details" element={<StudentProjectDetails />} /> */}
            {/* <Route path="meetings" element={<StudentMeetings />} /> */}
            {/* <Route path="documents" element={<StudentDocuments />} /> */}
          </Route>

          <Route 
            path="/faculty" 
            element={
            <FacultyLayout />
            }
          >
            <Route path="dashboard" element={ <FacultyDashboard /> } />
            <Route path="profile" element={ <FacultyProfile /> } />
            {/* <Route path="profile" element={<StudentProfile />} /> */}
            {/* <Route path="project-group" element={<StudentProjectGroup />} /> */}
            {/* <Route path="project-details" element={<StudentProjectDetails />} /> */}
            {/* <Route path="meetings" element={<StudentMeetings />} /> */}
            {/* <Route path="documents" element={<StudentDocuments />} /> */}
          </Route>


        </Routes>
      </>
    );
  }

  export default App;
