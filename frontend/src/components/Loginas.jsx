import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Loginas = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/023/367/236/original/blood-donor-day-3d-vector-animation-of-giving-blood-to-save-lives-hands-donating-blood-video.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        bgcolor="#bf0811" // Semi-transparent black background for better readability
        p={4} // Padding around the text and buttons
        sx={{
          position: 'absolute',
          right: '10%', // Adjust this value to position the box from the right edge
          width: '40%', // Adjusted width of the box
          color: 'red',
          top: '30%',
          borderRadius: '20px', // Rounded corners
        }}
      >
        <Typography variant="h4" color="white" gutterBottom>
          SaveABeat
        </Typography>
        <Link to="/login" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
          <Button variant="contained" color="primary" size="large" sx={{ width: '100%', height: '50px', borderRadius:"115px" }}>
            Login as Admin
          </Button>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="success" size="large" sx={{ width: '100%', height: '50px' ,borderRadius:"115px"}}>
            Login as User
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Loginas;
