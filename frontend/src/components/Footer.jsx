import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 4,
        py: 2,
        backgroundColor: 'black',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Pacifico, cursive', // Ensure correct font family
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2" style={{fontFamily:'pacafico',color:'white'}}>
        © {new Date().getFullYear()} Save a Beat. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
