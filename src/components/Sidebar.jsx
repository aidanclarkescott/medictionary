import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MedicationIcon from "@mui/icons-material/Medication";

const Sidebar = ({ children }) => {
  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Add Medication", icon: <MedicationIcon />, path: "/add-medication" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
      }}
    >
      <Drawer
        sx={{
          width: 300,
          "& .MuiDrawer-paper": {
            width: 300,
            minWidth: 300,
            border: 0,
            boxShadow: "2px 0 5px -2px #888",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h3">MEDictionary</Typography>

        <List sx={{ paddingTop: 0 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                "&.MuiListItem-root:hover": {
                  backgroundColor: "grey",
                },
                height: "50px",
                paddingLeft: 2,
              }}
            >
              <ListItemButton
                component={Link}
                to={item.path}
                style={{
                  textDecoration: "none",
                  height: "100%",
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ letterSpacing: 6 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {children}
    </Box>
  );
};

export default Sidebar;
