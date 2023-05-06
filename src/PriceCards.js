import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";

const PriceCard = ({ title, price, features, buttonText }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "0 10px", padding: "8px" }}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h4" component="div" sx={{ mb: 2 }}>
          {price}
        </Typography>
        <ul>
          {features.map((feature) => (
            <li key={feature}>
              <Typography variant="body1" color="textSecondary" component="p">
                {feature}
              </Typography>
            </li>
          ))}
        </ul>
        <Button variant="contained" color="primary">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

const PriceCards = () => {
  const priceCards = [
    {
      title: "Basic",
      price: "$9.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      buttonText: "Sign Up",
    },
    {
      title: "Pro",
      price: "$19.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      buttonText: "Sign Up",
    },
    {
      title: "Premium",
      price: "$29.99/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      buttonText: "Sign Up",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {priceCards.map((priceCard) => (
        <PriceCard key={priceCard.title} {...priceCard} />
      ))}
    </div>
  );
};

export default PriceCards;
