import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [values, setValues] = React.useState({
    uname: "",
    email: "",
    password: "",
  });
  const [signUpMode, setSignUpMode] = React.useState(true);

  const { isLoading, errorMsg, sendRequest, clearError } = useHttpClient();

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(values);

    if (signUpMode) {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/users/signup",
          "POST",
          JSON.stringify({
            username: values.uname,
            email: values.email,
            password: values.password,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.userId, responseData.token);
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/users/login",
          "POST",
          JSON.stringify({
            email: values.email,
            password: values.password,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.userId, responseData.token);
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const changeMode = () => {
    setSignUpMode((prevMode) => !prevMode);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Container maxWidth="sm">
      <div className="authContainer">
        <button onClick={changeMode}>Switch mode</button>
        <form noValidate autoComplete="off" onSubmit={authSubmitHandler}>
          <Grid container spacing={3}>
            {signUpMode ? (
              <Grid item xs={12}>
                <TextField
                  id="uname"
                  label="User Name"
                  onChange={handleChange("uname")}
                  value={values.uname}
                  type="text"
                  variant="outlined"
                />
              </Grid>
            ) : null}
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
              {signUpMode ? "Sign In" : "Login"}
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Auth;
