import React, { useState } from "react";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import RegistrationForm from "./RegistrationForm";

const Navbar = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegistrationClick = () => {
    setShowRegistrationForm(true);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" to="/">
          Home
        </Button>
        <Button color="inherit" to="/about">
          About
        </Button>
        <Button color="inherit" onClick={handleRegistrationClick}>
          Register
        </Button>
      </Toolbar>
      {showRegistrationForm && (
        <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
      )}
    </AppBar>
  );
};

export default Navbar;
