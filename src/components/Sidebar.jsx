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
import AddBoxIcon from "@mui/icons-material/AddBox";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

const Sidebar = ({ children }) => {
  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "My Medications", icon: <MedicationIcon />, path: "/my-medications" },
    { text: "Add Medication", icon: <AddBoxIcon />, path: "/add-medication" },
    { text: "My Information", icon: <MedicalInformationIcon />, path: "/personal-info" },
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "20px",
          }}
        >
          <Typography variant="h3">MEDictionary</Typography>
        </Box>

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
