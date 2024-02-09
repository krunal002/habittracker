import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345, m: " 10% 40%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1hsEti.img?w=768&h=432&m=6&x=131&y=225&s=807&d=330"
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
