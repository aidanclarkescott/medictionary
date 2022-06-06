import React from "react";
import { Box, Typography } from "@mui/material";

const weekDayStyle = {
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const weekDays = [
  { fullName: "Sunday", shortName: "S" },
  { fullName: "Monday", shortName: "M" },
  { fullName: "Tuesday", shortName: "T" },
  { fullName: "Wednesday", shortName: "W" },
  { fullName: "Thursday", shortName: "T" },
  { fullName: "Friday", shortName: "F" },
  { fullName: "Saturday", shortName: "S" },
];

const WeekdayPicker = ({ weeklyFrequency }) => {
  return (
    <Box sx={{ display: "flex", border: "solid 1px", width: 210 }}>
      {weekDays.map((day, idx) => (
        <Box
          key={idx}
          sx={{
            ...weekDayStyle,
            backgroundColor: weeklyFrequency[day.fullName] ? "forestgreen" : "lightgray",
          }}
        >
          <Typography variant="body1">{day.shortName}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default WeekdayPicker;
