import React, { useState } from 'react';

function Signup() {
  const [form, setForm] = useState({ email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    if (!form.confirm) errs.confirm = 'Confirm your password';
    else if (form.password !== form.confirm) errs.confirm = 'Passwords do not match';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="fw-bold mb-4">Signup</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className={`form-control${errors.email ? ' is-invalid' : ''}`}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  className={`form-control${errors.password ? ' is-invalid' : ''}`}
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
              <div className="mb-4">
                <label className="form-label">Confirm Password</label>
                <input
                  className={`form-control${errors.confirm ? ' is-invalid' : ''}`}
                  name="confirm"
                  type="password"
                  value={form.confirm}
                  onChange={handleChange}
                />
                {errors.confirm && <div className="invalid-feedback">{errors.confirm}</div>}
              </div>
              <button className="btn btn-primary w-100 fw-bold" type="submit">Signup</button>
              {submitted && <div className="alert alert-success mt-3">Signup successful (mock)!</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup; 