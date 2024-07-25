import { Button, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { MDBIcon } from 'mdb-react-ui-kit';
import Footer from './Footer';

const Userview = () => {
  const [input, setInput] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4001/approved")
      .then((res) => {
        console.log(res);
        setInput(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    console.log("Logging out...");
    navigate('/login');
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#0d0506', boxShadow: 'none' }}>
        <Toolbar>
        <div className='d-flex flex-row ps-3 '>
            <MDBIcon fas icon="heartbeat fa-3x me-3" style={{ color: '#ff6219' }} />
            {/* <span className="h1 fw-bold mb-0">Save a Beat</span> */}
          </div>
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Pacifico' }}>
            Save A Beat
          </Typography>

          <div>
            <Button component={Link} to="/req" color="primary" variant='contained' sx={{ marginRight: 1 }}>
              Request Form
            </Button>
            <Button color="primary" onClick={handleLogout} variant='contained'>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <div style={{ margin: '2%' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'black', textAlign: 'center', marginBottom: '20px', fontFamily: 'Pacifico' }}>
          Approved Requests
        </Typography>
        <Grid container spacing={4}>
          {input.map((val, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card 
                sx={{ 
                  minWidth: 275, 
                  backgroundColor: '#f0f4f8', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#0d0506' }}>
                    {val.name}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary', marginBottom: '8px' }}>
                    Age: {val.age}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary', marginBottom: '8px' }}>
                    Email: {val.email}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary', marginBottom: '8px' }}>
                    Phone Number: {val.phone}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary', marginBottom: '8px' }}>
                    Blood Type: {val.bloodType}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: 'text.secondary', marginBottom: '8px' }}>
                    Request Category: {val.requestCategory}
                  </Typography>
                  {val.requestCategory === 'receiver' && (
                    <Typography sx={{ fontSize: 14, color: 'text.secondary', marginBottom: '8px' }}>
                      Units Required: {val.unitsRequired}
                    </Typography>
                  )}
                  <Typography sx={{ fontSize: 14, color: 'text.secondary', marginBottom: '8px' }}>
                    Ailments: {val.ailments}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default Userview;
