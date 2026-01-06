import { Route, Routes } from "react-router-dom";
import Faculties from "./pages/Faculty/Faculties";
import FacultyForm from "./pages/Faculty/FacultyForm";


function App() {
    
  return (
    <>
      <Routes>
        <Route path="/faculty" >
          <Route path="add" element={ <FacultyForm /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
