import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "student"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 TEMP login logic (replace with API later)
    if (form.email && form.password) {
      const user = {
        email: form.email,
        role: form.role
      };

      localStorage.setItem("user", JSON.stringify(user));

      // Redirect based on role
      if (form.role === "admin") navigate("/admin");
      else if (form.role === "faculty") navigate("/faculty");
      else navigate("/student");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 col-md-4 mx-auto">
        <h4 className="text-center mb-3">Login</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Role</label>
            <select
              name="role"
              className="form-select"
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
