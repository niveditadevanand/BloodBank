import React, { useState, useEffect } from 'react';
import { AppBar, Button, Card, CardContent, CardHeader, Grid, IconButton, Toolbar, Typography, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';
import Footer from './Footer';

const Adminview = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [editingRequest, setEditingRequest] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4001/req')
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error('Error fetching requests:', error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    console.log('Logging out...');
    navigate('/login');
  };

  const handleApprove = (id) => {
    const requestToApprove = requests.find((request) => request._id === id);

    axios.post('http://localhost:4001/approved', requestToApprove)
      .then((response) => {
        console.log(`Request with ID: ${id} approved`);
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === id ? { ...request, status: 'Approved' } : request
          )
        );
      })
      .catch((error) => {
        console.error(`Error approving request with ID: ${id}`, error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4001/req/delete/${id}`)
      .then((response) => {
        console.log(`Request with ID: ${id} deleted`);
        setRequests((prevRequests) =>
          prevRequests.filter((request) => request._id !== id)
        );
      })
      .catch((error) => {
        console.error(`Error deleting request with ID: ${id}`, error);
      });
  };

  const toggleEdit = (id) => {
    setEditingRequest(id === editingRequest ? null : id);
  };

  const handleUpdate = (id) => {
    const updatedRequest = requests.find(request => request._id === id);

    axios.put(`http://localhost:4001/req/update/${id}`, updatedRequest)
      .then((response) => {
        console.log(`Request with ID: ${id} updated`);
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === id ? { ...request, ...updatedRequest } : request
          )
        );
        setEditingRequest(null);
      })
      .catch((error) => {
        console.error(`Error updating request with ID: ${id}`, error);
      });
  };

  const handleChange = (event, field, id) => {
    const updatedValue = event.target.value;
    setRequests(prevRequests =>
      prevRequests.map(request =>
        request._id === id ? { ...request, [field]: updatedValue } : request
      )
    );
  };

  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#0d0506', boxShadow: 'none' }}>
        <Toolbar>
        <div className='d-flex flex-row ps-3 '>
            <MDBIcon fas icon="heartbeat fa-3x me-3" style={{ color: '#ff6219' }} />
            {/* <span className="h1 fw-bold mb-0">Save a Beat</span> */}
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Pacifico' }}>
            Save A Beat
          </Typography>
          <div>
            <Button color="primary" onClick={handleLogout} variant="contained" sx={{ marginRight: 1 }}>
              Logout
            </Button>
            <Button component={Link} to="/req" color="primary" variant='contained' sx={{ marginRight: 1 }}>
              Add Donors
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <div style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#0d0506', textAlign: 'center', marginBottom: '20px', fontFamily: 'Pacifico' }}>
          Requests List
        </Typography>
        <Grid container spacing={4}>
          {requests.map((request, i) => (
            <Grid item key={request._id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: i % 2 === 0 ? '#ffffff' : '#f8f9fa',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardHeader
                  title={request.name}
                  titleTypographyProps={{ align: 'center', fontFamily: 'Roboto', fontWeight: 'bold', color: '#fffff' }}
                  sx={{ backgroundColor: '#0d0506', color: 'white' }}
                />
                <CardContent>
                  {editingRequest === request._id ? (
                    <>
                      <TextField
                        label="Name"
                        value={request.name}
                        onChange={(e) => handleChange(e, 'name', request._id)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        label="Age"
                        value={request.age}
                        onChange={(e) => handleChange(e, 'age', request._id)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        label="Email"
                        value={request.email}
                        onChange={(e) => handleChange(e, 'email', request._id)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        label="Phone Number"
                        value={request.phone}
                        onChange={(e) => handleChange(e, 'phone', request._id)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        label="Blood Type"
                        value={request.bloodType}
                        onChange={(e) => handleChange(e, 'bloodType', request._id)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        label="Request Category"
                        value={request.requestCategory}
                        onChange={(e) => handleChange(e, 'requestCategory', request._id)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        label="Units Required"
                        value={request.unitsRequired}
                        onChange={(e) => handleChange(e, 'unitsRequired', request._id)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        label="Ailments"
                        value={request.ailments}
                        onChange={(e) => handleChange(e, 'ailments', request._id)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    </>
                  ) : (
                    <Typography variant="body2" color="text.secondary" component="p">
                      Age: {request.age}<br />
                      Email: {request.email}<br />
                      Phone Number: {request.phone}<br />
                      Blood Type: {request.bloodType}<br />
                      Request Category: {request.requestCategory}<br />
                      Ailments: {request.ailments}<br />
                      Units Required: {request.unitsRequired}<br />
                      Status: {request.status}
                    </Typography>
                  )}
                  <div style={{ marginTop: '10px', textAlign: 'center' }}>
                    {editingRequest === request._id ? (
                      <Button onClick={() => handleUpdate(request._id)} variant="contained" color="primary" style={{ marginRight: '10px' }}>Save</Button>
                    ) : (
                      <>
                        <Button variant="contained" color="primary" style={{ marginRight: '10px' }} onClick={() => handleApprove(request._id)}>Approve</Button>
                        <Button variant="contained" color="secondary" style={{ marginRight: '10px' }} onClick={() => handleDelete(request._id)}>Delete</Button>
                        <Button variant="contained" style={{ backgroundColor: 'orange', marginTop: '5px' }} onClick={() => toggleEdit(request._id)}>Edit</Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </div>
    
  );
};

export default Adminview;
