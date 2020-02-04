import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const Auth = () => {
  const [values, setValues] = React.useState({
    uname: "",
    email: "",
    password: ""
  });
  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(values);
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Container maxWidth="sm">
      <form noValidate autoComplete="off" onSubmit={authSubmitHandler}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="User Name"
              onChange={handleChange("uname")}
              value={values.uname}
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              onChange={handleChange("email")}
              value={values.email}
              type="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="Password"
              onChange={handleChange("password")}
              value={values.password}
              type="password"
              variant="outlined"
            />
          </Grid>
          <Button variant="outlined" color="primary" type="submit">
            Sign In
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default Auth;
