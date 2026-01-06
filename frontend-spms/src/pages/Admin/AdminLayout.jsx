import { Outlet } from "react-router-dom";


function AdminLayout() {

    return (
        <>
            {/* navebar and side bar for admin baki chhe...  */}
            <Outlet />
        </>
    )
}

export default AdminLayout;