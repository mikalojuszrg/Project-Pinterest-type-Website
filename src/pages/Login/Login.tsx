import * as Yup from "yup";

import { Avatar, Box, Button, Paper } from "@mui/material";
import { Field, Form, Formik } from "formik";

import LockIcon from "@mui/icons-material/Lock";
import { TextField } from "formik-mui";
import Typography from "@mui/material/Typography";
import { User } from "../../types/user";
import { UserContext } from "../../contexts/UserContext";
import { loginFormInitialValues } from "./const";
import { useContext } from "react";

const Login = () => {
  const { handleLogin, isLoggedIn } = useContext(UserContext);

  const onSubmit = (user: User) => {
    console.log(user);
    handleLogin(user);
    console.log(isLoggedIn);
  };
  return (
    <Paper elevation={24}>
      <Box p={2}>
        <Box display="flex" justifyContent="center" mb={1}>
          <Avatar>
            <LockIcon />
          </Avatar>
        </Box>
        <Typography variant="h6" textAlign="center" mb={2}>
          Sign in
        </Typography>
        <Formik initialValues={loginFormInitialValues} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                type="email"
                name="email"
                label="Email Address"
                sx={{ mb: 2 }}
                fullWidth
                required
              />
              <Field
                component={TextField}
                type="password"
                name="password"
                label="Password"
                sx={{ mb: 2 }}
                fullWidth
                required
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                fullWidth
                sx={{ mb: 2 }}
              >
                Sign in
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Paper>
  );
};

export default Login;
