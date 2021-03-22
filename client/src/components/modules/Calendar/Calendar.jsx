import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import { CreateTasksButton } from './CreateTasksButton/CreateTasksButton';
import moment from "moment";
// import events from "../../../api/events";
import axios from 'axios';

const localizer = momentLocalizer(moment);
// let allViews = Object.keys(Views).map((k) => Views[k]);

// useful example to keep in mind
// const ColoredDateCellWrapper = ({ children }) =>
//   cloneElement(Children.only(children), {
//     style: {
//       backgroundColor: 'lightblue',
//     },
//   })


export const CalendarNew = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/calendar-events')
    .then(({data}) => {
      setEvents(data)
    })
  }, [])

  return (
    <div>
      <CreateTasksButton />
      <Calendar
        localizer={localizer}
        events={events}
        // views={allViews}
        step={60}
        popup
        showMultiDayTimes
        startAccessor="start"
        endAccessor="end"
        // components={{
        //     timeSlotWrapper: ColoredDateCellWrapper,
        //   }}
      />
    </div>
  );
};
