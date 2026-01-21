import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AssignStaff = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    guide: "",
    convener: "",
    expert: "",
  });

  // Dummy staff list (later from API)
  const staffList = [
    { id: 1, name: "Dr. Raj Sharma" },
    { id: 2, name: "Prof. Neha Mehta" },
    { id: 3, name: "Dr. Amit Verma" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Assigned Successfully\nGuide: ${form.guide}\nConvener: ${form.convener}\nExpert: ${form.expert}`
    );

    navigate(-1);
  };

  return (
    <>
      <h3>Assign Guide / Convener / Expert</h3>

      <form onSubmit={handleSubmit} className="col-md-6 mt-3">
        <div className="mb-3">
          <label>Guide</label>
          <select
            name="guide"
            className="form-control"
            required
            value={form.guide}
            onChange={handleChange}
          >
            <option value="">Select Guide</option>
            {staffList.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Convener</label>
          <select
            name="convener"
            className="form-control"
            value={form.convener}
            onChange={handleChange}
          >
            <option value="">Select Convener</option>
            {staffList.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Expert</label>
          <select
            name="expert"
            className="form-control"
            value={form.expert}
            onChange={handleChange}
          >
            <option value="">Select Expert</option>
            {staffList.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary me-2">Save</button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default AssignStaff;
