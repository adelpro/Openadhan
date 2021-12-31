import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import logo from "../logo.svg";
export default function Config() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={logo} alt="Adhan" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Geotagging API:
        </Typography>
      </CardContent>
    </Card>
  );
}
