import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "70.25%"
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 2
  },
}));

function SimpleCard({ name, href, linkText, image, alt, profession, about }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image}
        alt={alt}
      />
      <CardContent className={classes.content}>
        <Typography align="center">
          <h3>
            {name}
          </h3>
          <h5>
            {profession}
          </h5>
          <p>
            {about}
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SimpleCard;