import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({ data }) {
  return (
    <Card sx={{ maxWidth: 450, m: " 10% 40%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fieoa.img?w=800&h=435&q=60&m=2&f=jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.goal}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" color="error">Delete</Button>
        <Button size="small" variant="outlined" color="info">Edit</Button>
      </CardActions>
    </Card>
  );
}
