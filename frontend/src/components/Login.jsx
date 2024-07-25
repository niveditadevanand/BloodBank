import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) ? "" : "Email is not valid.";
    tempErrors.password = password ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post('http://localhost:4001/login', { email, password })
        .then(result => {
          if (result.data.role) {
            if (result.data.role === 'admin') {
              navigate('/aview');
            } else if (result.data.role === 'user') {
              navigate('/uview');
            }
          } else {
            alert(result.data.message || "Invalid credentials. Please try again.");
          }
        })
        .catch(err => {
          console.error('Login error:', err);
          alert("An error occurred. Please try again later.");
        });
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm='6'>
          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="heartbeat fa-3x me-3" style={{ color: '#ff6219' }} />
            <span className="h1 fw-bold mb-0">Save a Beat</span>
          </div>
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
            <form onSubmit={handleSubmit} className="ps-5">
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                label='Email address'
                id='email'
                type='email'
                size="lg"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              {errors.email && <div className="text-danger ps-5">{errors.email}</div>}
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                label='Password'
                id='password'
                type='password'
                size="lg"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              {errors.password && <div className="text-danger ps-5">{errors.password}</div>}
              <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' type="submit">Login</MDBBtn>
            </form>
          </div>
        </MDBCol>
        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img
            src="https://www.shutterstock.com/image-vector/people-blood-donation-concept-volunteers-600nw-2465102413.jpg"
            alt="Login image"
            className="w-100"
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
