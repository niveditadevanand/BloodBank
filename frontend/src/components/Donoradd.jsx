import React, { useState } from 'react';
import axios from 'axios';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const AddDonorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    bloodType: '',
    ailments: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required.';
    tempErrors.age = formData.age ? '' : 'Age is required.';
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)
      ? ''
      : 'Email is not valid.';
    tempErrors.phone = /^\d{10}$/.test(formData.phone)
      ? ''
      : 'Phone number is not valid (10 digits).';
    tempErrors.bloodType = formData.bloodType ? '' : 'Blood type is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Replace with your API call logic (e.g., axios.post)
      console.log('Form submitted:', formData);
      // axios.post('/api/addDonor', formData)
      //   .then(response => {
      //     console.log(response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error adding donor:', error);
      //   });
    }
  };

  const { name, age, email, phone, bloodType, ailments } = formData;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{color:'red'}}>Add New Donor</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
            id="age"
            name="age"
            value={age}
            onChange={handleChange}
            required
          />
          {errors.age && <div className="invalid-feedback">{errors.age}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone number</label>
          <input
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="bloodType" className="form-label">Blood Type</label>
          <select
            className={`form-select ${errors.bloodType ? 'is-invalid' : ''}`}
            id="bloodType"
            name="bloodType"
            value={bloodType}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Type</option>
            {bloodTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.bloodType && <div className="invalid-feedback">{errors.bloodType}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="ailments" className="form-label">Ailments (if any)</label>
          <textarea
            className="form-control"
            id="ailments"
            name="ailments"
            value={ailments}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Donor</button>
      </form>
    </div>
  );
};

export default AddDonorForm;
