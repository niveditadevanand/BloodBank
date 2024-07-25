import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardHeader, CardContent, Grid } from '@mui/material';

const Userview = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/approved")
      .then((res) => {
        console.log(res.data); // Log the data received from the backend
        setUsers(res.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    console.log("Logging out...");
    navigate('/login');
  };

  console.log(users); // Log users to check if data is fetched correctly

  return (
    <div style={{
      backgroundImage: `url('https://example.com/your-background-image.jpg')`, // Replace with your image URL
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <AppBar position="static" sx={{ backgroundColor: '#0d0506', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Save A Beat
          </Typography>
          <div sx={{ display: 'flex' }}>
            <Button component={Link} to="/req" color="primary" variant='contained' sx={{ marginRight: 1 }}>
              Request Form
            </Button>
            <Button color="primary" onClick={handleLogout} variant='contained'>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <div style={{ padding: '20px', flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom style={{ color: 'black', fontFamily: 'Pacifico, cursive' }}>Approved Requests</Typography>
        <Grid container spacing={3}>
          {users.map((user) => (
            <Grid item key={user._id} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  title={user.name}
                  subheader={`Age: ${user.age}`}
                  titleTypographyProps={{ align: 'center', fontFamily: 'Pacifico, cursive' }} // Applying Pacifico font
                  subheaderTypographyProps={{ align: 'center' }}
                  sx={{ backgroundColor: '#f7929a', color: 'black' }}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: 'Pacifico, cursive' }}>
                    Email: {user.email}<br />
                    Phone Number: {user.phone}<br />
                    Blood Type: {user.bloodType}<br />
                    {/* Donor/Receiver: {user.requestCategory}<br />
                    Ailments: {user.ailments} */}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Userview;
