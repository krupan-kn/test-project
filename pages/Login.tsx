import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Login() {
  return (
    <Box p={3} maxWidth={420}>
      <Typography variant="h4">Login</Typography>
      <Box mt={2} display="flex" flexDirection="column" gap={2}>
        <TextField label="Email" />
        <TextField label="Password" type="password" />
        <Button variant="contained">Sign in</Button>
      </Box>
    </Box>
  );
}
