import React from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { Box, List, ListItemButton, ListItemText, AppBar, Toolbar, Typography } from "@mui/material";

export default function MainLayout() {
  return (
    <Box display="flex" height="100vh">
      <Box component="nav" sx={{ width: 220, borderRight: "1px solid rgba(0,0,0,0.08)" }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">Demo App</Typography>
        </Box>
        <List>
          <ListItemButton component={RouterLink} to="/">
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/projects">
            <ListItemText primary="Projects" />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/tasks">
            <ListItemText primary="Tasks" />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/settings">
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Box>

      <Box component="main" sx={{ flex: 1, overflow: "auto" }}>
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flex: 1 }}>
              Dashboard Demo
            </Typography>
          </Toolbar>
        </AppBar>

        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
