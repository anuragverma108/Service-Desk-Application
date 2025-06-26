import React, { useState } from 'react';

const categories = ['Access', 'Hardware', 'Software', 'Network', 'Other'];
const priorities = ['Low', 'Medium', 'High'];

function CreateTicket() {
  const [form, setForm] = useState({
    subject: '',
    description: '',
    category: '',
    priority: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.subject) errs.subject = 'Subject is required';
    if (!form.description) errs.description = 'Description is required';
    if (!form.category) errs.category = 'Category is required';
    if (!form.priority) errs.priority = 'Priority is required';
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
      setForm({ subject: '', description: '', category: '', priority: '' });
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="fw-bold mb-4">Create New Ticket</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  className={`form-control${errors.subject ? ' is-invalid' : ''}`}
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                />
                {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className={`form-control${errors.description ? ' is-invalid' : ''}`}
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                />
                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className={`form-select${errors.category ? ' is-invalid' : ''}`}
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && <div className="invalid-feedback">{errors.category}</div>}
              </div>
              <div className="mb-4">
                <label className="form-label">Priority</label>
                <select
                  className={`form-select${errors.priority ? ' is-invalid' : ''}`}
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                >
                  <option value="">Select Priority</option>
                  {priorities.map(pri => (
                    <option key={pri} value={pri}>{pri}</option>
                  ))}
                </select>
                {errors.priority && <div className="invalid-feedback">{errors.priority}</div>}
              </div>
              <button className="btn btn-primary w-100 fw-bold" type="submit">Submit Ticket</button>
              {submitted && <div className="alert alert-success mt-3">Ticket submitted!</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket; 