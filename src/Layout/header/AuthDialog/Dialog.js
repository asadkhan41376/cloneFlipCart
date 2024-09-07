import * as React from "react";
import Button from "@mui/material/Button";

import { Box, TextField, Grid, Dialog, Typography } from "@mui/material";
import Form from "./loginForm";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

export default function AuthDialog() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState("login");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box p={2}>


        {step === "signup" && (
        <RegisterForm setStep={setStep} handleClose={handleClose} />
      )}
      {step === "login" && (
        <LoginForm handleClose={handleClose} setStep={setStep} />
      )}
         

        </Box>
      </Dialog>
    </React.Fragment>
  );
}
