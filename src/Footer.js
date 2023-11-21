// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = ({ onClick }) => {
  const footerItems = ['About Us', 'Filters', 'Orders', 'Your Wallet', 'Rewards'];

  return (
    <AppBar position="static" style={{ marginTop: 'auto' }}>
      <Toolbar>
        {footerItems.map((item, index) => (
          <Typography
            variant="subtitle1"
            color="inherit"
            style={{ marginRight: '16px', cursor: 'pointer' }}
            key={index}
            onClick={() => onClick(item)}
          >
            {item}
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
