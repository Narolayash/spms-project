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
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white fw-bold">
                            {form.StaffID ? "Edit Faculty" : "Add Faculty"}
                        </div>

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <input
                                className="form-control mb-3"
                                name="StaffName"
                                placeholder="Faculty Name"
                                value={form.StaffName}
                                onChange={handleChange}
                                />

                                <input
                                className="form-control mb-3"
                                name="Phone"
                                placeholder="Phone"
                                value={form.Phone}
                                onChange={handleChange}
                                />

                                <input
                                className="form-control mb-3"
                                name="Email"
                                placeholder="Email"
                                value={form.Email}
                                onChange={handleChange}
                                />

                                <textarea
                                className="form-control mb-3"
                                name="Description"
                                placeholder="Description"
                                value={form.Description}
                                onChange={handleChange}
                                rows="3"
                                />

                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-success">
                                        {form.StaffID ? "Update Faculty" : "Add Faculty"}
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => navigate("/admin/faculty")}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FacultyForm;