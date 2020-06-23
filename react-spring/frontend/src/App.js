import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  card: {
    minWidth: '400',
    justifyContent: 'left'
  },
}));

export default function AddEmployee() {
  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);


  const [email, setemail] = React.useState("");

  const handleEmailChange = event => setemail(event.target.value);

  const handleSubmit = (e) => {
    if (email === "") {
      alert("Email cannot be empty")
    }
    else {
      axios.post('http://localhost:8080/getWithRequestParam?email=' + email)
        .then(res => console.log(res));
      setemail("")
      alert("Email Sent")
    }
  };

  if (firstLoad) {
    setLoad(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          React Spring Boot
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                value={email}
                id="email"
                label="email"
                onChange={handleEmailChange}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => handleSubmit(e)}
          >
            Send Email
          </Button>
        </form>
      </div>
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
            SUBJECT
              </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            THIS IS A TEST MESSAGE
        </Typography>
            <Typography variant="h5" component="h2">
            MESSAGE
              </Typography>
            <Typography className={classes.pos} color="textSecondary">
              This message proves the connectivity of react and spring, done by ahsan ilyas
          </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
