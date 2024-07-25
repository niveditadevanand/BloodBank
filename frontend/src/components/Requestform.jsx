import React, { useState } from 'react';
import axios from 'axios';
import {
  Typography,
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const Requestform = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    bloodType: '',
    requestCategory: '',
    ailments: '',
    unitsRequired: '',
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4001/add', formData)
      .then(result => {
        console.log(result);
        // Navigate to /uview page upon successful submission
        navigate('/uview');
      })
      .catch(err => console.log(err));

    // Reset form after submission (optional)
    setFormData({
      name: '',
      age: '',
      email: '',
      phone: '',
      bloodType: '',
      requestCategory: '',
      ailments: '',
      unitsRequired: '',
    });
  };

  const { name, age, email, phone, bloodType, requestCategory, ailments, unitsRequired } = formData;

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
          <Toolbar>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MDBIcon fas icon="heartbeat fa-3x" style={{ color: '#ff6219' }} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'pacifico' }}>
              Save a Beat
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Container component="main" maxWidth="sm" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'white',
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
            }
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'bold', color: 'black', fontFamily: 'pacifico' }}>
            Request Form
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '100%' }}
          >
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ mb: 2, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1565C0' } }}
              required
            />

            <TextField
              label="Age"
              name="age"
              value={age}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ mb: 2, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1565C0' } }}
              required
            />

            <TextField
              label="Email"
              name="email"
              value={email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ mb: 2, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1565C0' } }}
              required
            />

            <TextField
              label="Phone Number"
              name="phone"
              value={phone}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ mb: 2, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1565C0' } }}
              required
            />

            <FormControl fullWidth variant="outlined" margin="normal" required>
              <InputLabel>Blood Type</InputLabel>
              <Select
                name="bloodType"
                value={bloodType}
                onChange={handleChange}
                label="Blood Type"
                sx={{ mb: 2, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1565C0' } }}
              >
                {bloodTypes.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal" required>
              <InputLabel>Request Category</InputLabel>
              <Select
                name="requestCategory"
                value={requestCategory}
                onChange={handleChange}
                label="Request Category"
                sx={{ mb: 2, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1565C0' } }}
              >
                <MenuItem value="donor">Donor</MenuItem>
                <MenuItem value="receiver">Receiver</MenuItem>
              </Select>
            </FormControl>

            {requestCategory === 'receiver' && (
              <TextField
                label="Units Required"
                name="unitsRequired"
                value={unitsRequired}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
                sx={{ mb: 2, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1565C0' } }}
                required
              />
            )}

            <TextField
              label="Ailments (if any)"
              name="ailments"
              value={ailments}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ mb: 2, '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1565C0' } }}
            />

            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: '100%', borderRadius: '8px', backgroundColor: '#1565C0', '&:hover': { backgroundColor: '#0d47a1', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' } }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          mt: 4,
          py: 2,
          backgroundColor: 'black',
          textAlign: 'center',
          boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="body2" color="white">
          © {new Date().getFullYear()} Save a Beat. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Requestform;
