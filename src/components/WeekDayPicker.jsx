import React from "react";
import { Box, Typography } from "@mui/material";

const weekDayStyle = {
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "gray",
  },
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

const WeekdayPicker = ({ weeklyFrequency, toggleDay }) => {
  return (
    <Box>
      <Typography variant="body1">Select Days</Typography>

      <Box sx={{ display: "flex" }}>
        {weekDays.map((day, idx) => (
          <Box
            key={idx}
            sx={{
              ...weekDayStyle,
              backgroundColor: weeklyFrequency[day.fullName] ? "forestgreen" : "lightgray",
            }}
            onClick={() => toggleDay(day.fullName)}
          >
            <Typography variant="body1">{day.shortName}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WeekdayPicker;
