import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

export default function EventDateCalendar() {
  // Set default event date
  const eventDate = dayjs("2025-02-22");

  return (
    <div className="md:w-2/5 bg-gray-700 p-8 md:p-12 flex justify-center items-center">
    <div>
      <h2 className="text-2xl font-bold text-white text-center mb-4">
        Event Date
      </h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={eventDate}
          readOnly // Makes the calendar view-only
          className="rounded-lg shadow-lg bg-gray-800 text-white"
        />
      </LocalizationProvider>
      <p className="text-center mt-4 text-gray-300">
        Mark your calendar for{" "}
        <span className="font-semibold text-white">
          22nd February 2025
        </span>
        .
      </p>
    </div>
  </div>
  );
}
