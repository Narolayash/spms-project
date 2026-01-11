import { Outlet, useNavigate } from "react-router-dom";

const ProjectGroupLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center">
        <h3>Project Group</h3>

        <div className="d-flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() => navigate("create")}
          >
            Create Group
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => navigate("join")}
          >
            Join Group
          </button>
        </div>
      </div>

      <Outlet />
    </div>
    
  );
};

export default ProjectGroupLayout;
