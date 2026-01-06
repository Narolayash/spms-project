import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { useEffect } from "react";


function AdminLayout() {

    useEffect(() => {
        document.title = `SPMS - Admin`
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            <AdminNavbar />
            {/* <Sidebar /> */}
            <AdminSidebar />

            <main
                className="p-4"
                style={{
                marginLeft: "240px",
                marginTop: "56px",
                minHeight: "100vh",
                background: "#f8f9fa"
                }}
            >
                <Outlet />
            </main>
        </>
    )
}

export default AdminLayout;