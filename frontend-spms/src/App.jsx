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

import ProfileLayout from "./pages/Student/Profile/ProfileLayout";
import ProfileView from "./pages/Student/Profile/ProfileView";
import ProfileUpdate from "./pages/Student/Profile/ProfileUpdate";

import ProjectDetail from "./pages/Student/ProjectGroup/ProjectDetail";
import ProjectGroupLayout from "./pages/Student/ProjectGroup/ProjectGroupLayout";
import ProjectGroup from "./pages/Student/ProjectGroup/MyProjectGroup";
import JoinGroup from "./pages/Student/ProjectGroup/JoinGroup";
import CreateGroupForm from "./pages/Student/ProjectGroup/CreateGroup";
import MeetingLayout from "./pages/Student/Meeting/MeetingLayout";
import StudentMeetings from "./pages/Student/Meeting/StudentMeetings";
import MeetingDetail from "./pages/Student/Meeting/MeetingDetail";




function App() {
    
  return (
    <>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" replace />} />
        <Route path="/login" element={ <Login /> } />

        <Route 
          path="/admin"
          element={
            <AdminLayout />
          }
        >
          <Route index element={ <Navigate to="dashboard" replace /> } />
          <Route path="dashboard" element={ <AdminDashboard /> } />
          <Route path="profile" element={ <AdminProfile /> } />
          <Route path="faculty" element={ <Faculties /> } />
          <Route path="faculty-form" element={ <FacultyForm /> } />
          <Route path="students" element={ <Students /> } />
          <Route path="student-form" element={ <StudentForm /> } />
          <Route path="project-types" element={ <ProjectTypeList /> } />
          <Route path="project-type-form" element={ <ProjectTypeForm /> } />
          {/* <Route path="group" element={  } />
          <Route path="reports" element={  } /> */}
        </Route>

        <Route 
          path="/student"
          element={
          <StudentLayout />
          }
        >
          <Route index element={ <Navigate to="dashboard" replace /> } />
          {/* student/dashboard */}
          <Route path="dashboard" element={ <StudentDashboard /> } />

          {/* student/profile */}
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<ProfileView />} />
            <Route path="update" element={<ProfileUpdate />} />
          </Route>

          {/* student/project-group */}
          <Route path="project-group" element={<ProjectGroupLayout />}>
            <Route index element={<ProjectGroup />} />
            <Route path="create" element={<CreateGroupForm />} />
            <Route path="join" element={<JoinGroup />} />
            <Route path=":groupId" element={<ProjectDetail />} />

            {/* student meeting */}
            <Route path=":groupId/meetings" element={<MeetingLayout />}>
              <Route index element={<StudentMeetings />} />
              <Route path=":meetingId" element={<MeetingDetail />} />
            </Route>
          </Route>

          {/* <Route path="proposal" element= {  }/> */}
          {/*<Route path="documents" element={  } />
          <Route path="attendance" element={ } /> */}
        </Route>

        <Route 
          path="/faculty" 
          element={
          <FacultyLayout />
          }
        >
          <Route index element={ <Navigate to="dashboard" replace /> } />
          <Route path="dashboard" element={ <FacultyDashboard /> } />
          <Route path="profile" element={ <FacultyProfile /> } />
          {/* <Route path="proposals" element={  } />
          <Route path="meetings" element={  } />
          <Route path="attendance" element={  } />
          <Route path="reports" element={  } />
          <Route path="documents" element={  } /> */}
        </Route>


      </Routes>
    </>
  );
}

export default App;
