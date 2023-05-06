import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log(name, email, phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        inputProps={{
          pattern: "[a-zA-Z ,.'-]+",
          title: "Please enter a valid name",
        }}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        inputProps={{
          pattern: "[^\\s@]+@[^\\s@]+\\.[^\\s@]+",
          title: "Please enter a valid email address",
        }}
      />
      <TextField
        label="Phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
        inputProps={{
          pattern: "^[(]{0,1}[0-9]{3}[)]{0,1}[-\\s\\./0-9]*",
          title: "Please enter a 10-digit phone number",
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
