import { Outlet, useParams } from "react-router-dom";

const MeetingLayout = () => {
  const { groupId } = useParams();

  return (
    <div className="mt-4">
      <h4>Project Meetings</h4>
      <p className="text-muted">Group ID: {groupId}</p>
      <Outlet />
    </div>
  );
};

export default MeetingLayout;
