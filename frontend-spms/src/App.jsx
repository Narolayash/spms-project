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
import FacultyProfile from "./pages/Faculty/Profile/ProfileLayout";

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
import MeetingLayout from "./pages/Student/ProjectGroup/Meeting/MeetingLayout";
import StudentMeetings from "./pages/Student/ProjectGroup/Meeting/StudentMeetings";
import MeetingDetail from "./pages/Student/ProjectGroup/Meeting/MeetingDetail";
import ProposalLayout from "./pages/Student/ProjectGroup/Proposal/ProposalLayout";
import ProposalStatus from "./pages/Student/ProjectGroup/Proposal/ProposalStatus";
import ProposalForm from "./pages/Student/ProjectGroup/Proposal/ProposalForm";
import ProposalView from "./pages/Student/ProjectGroup/Proposal/ProposalView";
import DocumentLayout from "./pages/Student/ProjectGroup/Documents/DocumentLayout";
import DocumentList from "./pages/Student/ProjectGroup/Documents/DocumentList";
import UploadDocument from "./pages/Student/ProjectGroup/Documents/UploadDocument";
import DocumentPreview from "./pages/Student/ProjectGroup/Documents/DocumentPreview";
import ProtectedRoute from "./routes/ProtectedRoute";
import StudentAllProposals from "./pages/Student/Proposals/StudentAllProposals";
import StudentAllMeetings from "./pages/Student/Meetings/StudentAllMeetings";
import StudentAllDocuments from "./pages/Student/Documents/StudentAllDocuments";

import FacultyProfileLayout from "./pages/Faculty/Profile/ProfileLayout";
import FacultyProfileView from "./pages/Faculty/Profile/ProfileView";
import FacultyProfileUpdate from "./pages/Faculty/Profile/ProfileUpdate";
import FacultyProjectGroups from "./pages/Faculty/Profile/projectGroups/FacultyProjectGroups";
import FacultyProjectGroupDetail from "./pages/Faculty/Profile/projectGroups/FacultyProjectGroupDetail";
import FacultyProjectProposal from "./pages/Faculty/Profile/projectGroups/Proposal/FacultyProjectProposal";
import FacultyMeetings from "./pages/Faculty/FacultyMeetings";
import FacultyAddMeeting from "./pages/Faculty/FacultyAddMeeting";
import FacultyMeetingDetail from "./pages/Faculty/FacultyMeetingDetail";
import FacultyProjectDocuments from "./pages/Faculty/FacultyProjectDocuments";
import FacultyDocumentDetail from "./pages/Faculty/FacultyDocumentDetail";
import FacultyReports from "./pages/Faculty/FacultyReports";
import FacultyEvaluation from "./pages/Faculty/FacultyEvaluation";
import ProjectGroupList from "./pages/Admin/ProjectGroups/ProjectGroupList";
import ProjectGroupDetail from "./pages/Admin/ProjectGroups/ProjectGroupDetail";
import ProjectGroupMembers from "./pages/Admin/ProjectGroups/ProjectGroupMembers";
import ProjectGroupApproval from "./pages/Admin/ProjectGroups/ProjectGroupApproval";
import AssignStaff from "./pages/Admin/ProjectGroups/AssignStaff";
import MeetingList from "./pages/Admin/Meeetings/MeetingList";
import MeetingAttendance from "./pages/Admin/Meeetings/MeetingAttendance";
import ReportsDashboard from "./pages/Admin/Reports/ReportsDashboard";
import ProjectReport from "./pages/Admin/Reports/ProjectReport";
import GuideReport from "./pages/Admin/Reports/GuideReport";
import AttendanceReport from "./pages/Admin/Reports/AttendanceReport";


function App() {
    
  return (
    <>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" replace />} />
        <Route path="/login" element={ <Login /> } />

        <Route 
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
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

          <Route path="project-groups" element={<ProjectGroupList />} />
          <Route path="project-groups/:id" element={<ProjectGroupDetail />} />
          <Route path="project-groups/:id/members" element={<ProjectGroupMembers />} />
          <Route path="project-groups/:id/approval" element={<ProjectGroupApproval />} />
          <Route
            path="project-groups/:id/assign-staff"
            element={<AssignStaff />}
          />
          <Route path="/admin/meetings" element={<MeetingList />} />
          <Route path="/admin/meetings/:id" element={<MeetingDetail />} />
          <Route path="/admin/meetings/:id/attendance" element={<MeetingAttendance />} />

          <Route path="/admin/reports" element={<ReportsDashboard />} />
          <Route path="/admin/reports/projects" element={<ProjectReport />} />
          <Route path="/admin/reports/guides" element={<GuideReport />} />
          <Route path="/admin/reports/attendance" element={<AttendanceReport />} />



          {/* <Route path="group" element={  } />
          <Route path="reports" element={  } /> */}
        </Route>


        {/* Student Routes */}
        <Route 
          path="/student"
          element={
            <ProtectedRoute role="student">
              <StudentLayout />
            </ProtectedRoute>
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
          </Route>
          {/* meeting */}
          <Route path="project-group/:groupId/meetings" element={<MeetingLayout />}>
            <Route index element={<StudentMeetings />} />
            <Route path=":meetingId" element={<MeetingDetail />} />
          </Route>
          {/* DOCUMENTS */}
          <Route path="project-group/:groupId/documents" element={<DocumentLayout />}>
            <Route index element={<DocumentList />} />
            <Route path="upload" element={<UploadDocument />} />
            <Route path=":docId" element={<DocumentPreview />} />
          </Route>
          {/* proposal */}
          <Route path="project-group/:groupId/proposal" element={<ProposalLayout />}>
            <Route index element={<ProposalStatus />} />
            <Route path="submit" element={<ProposalForm />} />
            <Route path="view" element={<ProposalView />} />
          </Route>

          {/* STUDENT – ALL PROPOSALS */}
          <Route path="proposal" element={<StudentAllProposals />} />

          {/* STUDENT – ALL MEETINGS */}
          <Route path="meetings" element={<StudentAllMeetings />} />

          {/* STUDENT – ALL DOCUMENTS */}
          <Route path="documents" element={<StudentAllDocuments />} />

        </Route>

        <Route 
          path="/faculty" 
          element={
          <ProtectedRoute role="faculty">
            <FacultyLayout />
          </ProtectedRoute>
          }
        >
          <Route index element={ <Navigate to="dashboard" replace /> } />
          <Route path="dashboard" element={ <FacultyDashboard /> } />
          <Route path="profile" element={<FacultyProfileLayout />}>
            <Route index element={<FacultyProfileView />} />
            <Route path="update" element={<FacultyProfileUpdate />} />
          </Route>

          <Route>
            <Route path="project-groups" element={<FacultyProjectGroups />} />
            <Route path="project-groups/:groupId" element={<FacultyProjectGroupDetail />} />
            <Route path="project-groups/:groupId/proposal" element={<FacultyProjectProposal />} />
          </Route>

          <Route
            path="/faculty/project-groups/:groupId/meetings"
            element={<FacultyMeetings />}
          />
          <Route
            path="/faculty/project-groups/:groupId/meetings/add"
            element={<FacultyAddMeeting />}
          />
          <Route
            path="/faculty/project-groups/:groupId/meetings/:meetingId"
            element={<FacultyMeetingDetail />}
          />

          <Route
            path="/faculty/project-groups/:groupId/documents"
            element={<FacultyProjectDocuments />}
          />
          <Route
            path="/faculty/project-groups/:groupId/documents/:documentId"
            element={<FacultyDocumentDetail />}
          />

          <Route
            path="/faculty/reports"
            element={<FacultyReports />}
          />

          <Route
            path="/faculty/project-groups/:groupId/evaluation"
            element={<FacultyEvaluation />}
          />



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
