import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import { CreateTasksButton } from './CreateTasksButton/CreateTasksButton';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import moment from "moment";
import axios from 'axios';

const localizer = momentLocalizer(moment);

export const CalendarNew = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/calendar-events')
      .then(({ data }) => {
        setEvents(data)
      })

  }, [])

  function Event({ event }) {
    return (
      <span>
        <strong>{event.title}</strong>
        {event.description && ':  ' + event.description}
      </span>
    )
  }


  return (
    <div>
      <CreateTasksButton />
      <Calendar
        localizer={localizer}
        events={events}
        step={60}
        popup
        showMultiDayTimes
        views={['month']}
        startAccessor="start"
        endAccessor="end"
        components={{
          event: Event,
        }}
        eventPropGetter={event => ({
          style: {
            backgroundColor: event.color,
            textAlign: 'center',
          }
        })}
      />
    </div>
  );
};
