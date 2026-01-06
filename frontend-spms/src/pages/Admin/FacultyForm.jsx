import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import facultyData from "../../data/faculty.json";

function FacultyForm() {
    const navigate = useNavigate();

    const location = useLocation();
    const editData = location.state || {};

    const [faculty, setFaculty] = useState(facultyData);
    const [form, setForm] = useState({
        StaffID: editData.StaffID || null,
        StaffName: editData.StaffName || "",
        Phone: editData.Phone || "",
        Email: editData.Email || "",
        Description: editData.Description || ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.StaffID) {
            setFaculty(faculty.map(f =>
                f.StaffID === form.StaffID ? form : f
            ));
        } else {
            setFaculty([...faculty, { ...form, StaffID: Date.now() }]);
        }

        setForm({ StaffID: null, StaffName: "", Phone: "", Email: "", Description: "" });

        navigate("/admin/faculty");
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="card p-3 mb-3">
                <input className="form-control mb-2" name="StaffName" placeholder="Name" value={form.StaffName} onChange={handleChange} />
                <input className="form-control mb-2" name="Phone" placeholder="Phone" value={form.Phone} onChange={handleChange} />
                <input className="form-control mb-2" name="Email" placeholder="Email" value={form.Email} onChange={handleChange} />
                <input className="form-control mb-2" name="Description" placeholder="Description" value={form.Description} onChange={handleChange} />
                <button className="btn btn-primary">
                    {form.StaffID ? "Update" : "Add"}
                </button>
            </form>
        
        </>
    )
}

export default FacultyForm;