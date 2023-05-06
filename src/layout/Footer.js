import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Link,
} from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#2196f3", color: "#fff", marginTop: "auto" }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              Links
            </Typography>
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              123 Main Street
              <br />
              Anytown, USA 12345
              <br />
              (555) 555-5555
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              Follow Us
            </Typography>
            <ul>
              <li>
                <Link href="#">Facebook</Link>
              </li>
              <li>
                <Link href="#">Twitter</Link>
              </li>
              <li>
                <Link href="#">Instagram</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
