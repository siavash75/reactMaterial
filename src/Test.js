import React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

export function Test() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: 0,
    gender: "",
  });
  const handelChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <form
        onSubmit={handelSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          onChange={handelChange}
          name="name"
          value={inputs.name}
          placeholder="name"
          type="text"
          variant="standard"
          size="medium"
          sx={{ marginRight: "6px" }}
        />
        <TextField
          onChange={handelChange}
          name="email"
          value={inputs.email}
          placeholder="email"
          type="email"
          variant="standard"
          size="medium"
          sx={{ marginRight: "6px" }}
        />
        <TextField
          onChange={handelChange}
          name="password"
          value={inputs.password}
          placeholder="password"
          type="password"
          variant="standard"
          size="medium"
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    subscribe: !inputs.subscribe,
                  }))
                }
              />
            }
            label="Subscribe To Newsletter"
          />
        </FormGroup>
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handelChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup onChange={handelChange} name="gender">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
