import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    bloodGroup: '',
    password: '' // New field for password
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required.";
    tempErrors.age = formData.age ? "" : "Age is required.";
    tempErrors.email = (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) ? "" : "Email is not valid.";
    tempErrors.phone = (/^\d{10}$/.test(formData.phone)) ? "" : "Phone number is not valid (10 digits).";
    tempErrors.bloodGroup = formData.bloodGroup ? "" : "Blood group is required.";
    tempErrors.password = formData.password ? "" : "Password is required."; // Validate password field
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post('http://localhost:4001/register', formData) // Assuming signup endpoint
        .then(result => {
          console.log(result);
          navigate('/login');
        })  
        .catch(err => console.log(err));
      console.log("Form data is valid and submitted:", formData);
    }
  };

  return (
    <MDBContainer className="my-5">
      <form onSubmit={handleSubmit}>
        <MDBCard>
          <MDBRow className='g-0'>
            <MDBCol md='6'>
              <MDBCardImage 
                src='https://img.freepik.com/free-vector/blood-donation-doctor-patient-cartoon-characters-volunteer-donating-blood-transfusion-hospital-healthcare-laboratory-donor_335657-87.jpg' 
                alt="signup form" 
                className='rounded-start w-100'
              />
            </MDBCol>

            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column align-items-center p-5'>
                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="heartbeat fa-3x me-3" style={{ color: '#ff6219' }}/>
                  <span className="h1 fw-bold mb-0">Save a Beat</span>
                </div>

                <h5 className="fw-normal my-4 pb-3 text-center" style={{letterSpacing: '1px'}}>Sign up for an account</h5>
                
                <MDBInput 
                  wrapperClass='mb-4 w-75' 
                  label='Name' 
                  id='name' 
                  type='text' 
                  size="lg" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}

                <MDBInput 
                  wrapperClass='mb-4 w-75' 
                  label='Age' 
                  id='age' 
                  type='number' 
                  size="lg" 
                  value={formData.age} 
                  onChange={handleChange} 
                  required 
                />
                {errors.age && <div className="text-danger">{errors.age}</div>}

                <MDBInput 
                  wrapperClass='mb-4 w-75' 
                  label='Email address' 
                  id='email' 
                  type='email' 
                  size="lg" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}

                <MDBInput 
                  wrapperClass='mb-4 w-75' 
                  label='Phone number' 
                  id='phone' 
                  type='tel' 
                  size="lg" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
                {errors.phone && <div className="text-danger">{errors.phone}</div>}

                <div className='mb-4 w-75'>
                  <label className="form-label" htmlFor="bloodGroup">Blood Group</label>
                  <select 
                    id="bloodGroup" 
                    className="form-select" 
                    value={formData.bloodGroup} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  {errors.bloodGroup && <div className="text-danger">{errors.bloodGroup}</div>}
                </div>

                <MDBInput 
                  wrapperClass='mb-4 w-75' 
                  label='Password' 
                  id='password' 
                  type='password' 
                  size="lg" 
                  value={formData.password} 
                  onChange={handleChange} 
                  required 
                />
                {errors.password && <div className="text-danger">{errors.password}</div>}

                <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Sign Up</MDBBtn>
                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <a href="/login" style={{color: '#393f81'}}>Login here</a></p>

                <div className='d-flex flex-row justify-content-center w-100'>
                  <a href="/terms-of-use" className="small text-muted me-1">Terms of use.</a>
                  <a href="/privacy-policy" className="small text-muted">Privacy policy</a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </form>
    </MDBContainer>
  );
}

export default Signup;
