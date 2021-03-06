import React, { useState, useEffect, createRef } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import Modal from '@material-ui/core/Modal';
import { ModalBody } from './ModalBody/ModalBody';
import { CreateTasksButton } from './CreateTasksButton/CreateTasksButton';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import axios from 'axios';

import { useAdminState } from '../../../contexts/Admin/AdminProvider';

import styles from "./Calendar.module.scss";

const localizer = momentLocalizer(moment);

export const CalendarNew = () => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({})
  const [open, setOpen] = useState(false);
  const { admin } = useAdminState();

  const ref = createRef();

  useEffect(() => {
    axios.get(`/api/calendar-events`)
      .then(({ data }) => {
        setEvents(data)
      })
  }, [])

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
        {admin && <CreateTasksButton />}
        <Calendar
          className={styles.wrapper}
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
