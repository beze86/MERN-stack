import React, { useState, useEffect, createRef } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import Modal from '@material-ui/core/Modal';
import { ModalBody } from './ModalBody/ModalBody';
import { CreateTasksButton } from './CreateTasksButton/CreateTasksButton';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import axios from 'axios';

import "./Calendar.css";

const localizer = momentLocalizer(moment);

export const CalendarNew = () => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({})
  const [open, setOpen] = useState(false);
  const [admin, setAdmin] = useState(false)

  const ref = createRef();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/calendar-events`)
      .then(({ data }) => {
        setEvents(data)
      })
  }, [])

  useEffect(() => {
    if (window.location.href.indexOf('?rank=admin') !== -1) {
      setAdmin(true)
    }
  }, [admin])

  const Event = ({ event }) => {
    return (
      <span data-id={event._id}>
        <strong>{event.title}</strong>
        {event.description && ':  ' + event.description}
      </span>
    )
  }

  const handleOpen = (e) => {
    if (!admin) {
      return
    }
    setEvent(e)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (eventData) => {
    const index = events.findIndex((event) => {
      return event._id === eventData._id
    })

    const updatedData = [...events];
    updatedData[index] = eventData;
    setEvents(updatedData)
    setOpen(false)
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}>
        <div className="">
          <ModalBody user={event} ref={ref} closeModal={handleClose} onSubmitUpdateEvent={handleSubmit} />
        </div>
      </Modal>
      <div>
        { admin && <CreateTasksButton />}
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
            },
          })}
          onSelectEvent={event => handleOpen(event)}
        />
      </div>
    </>
  );
};
