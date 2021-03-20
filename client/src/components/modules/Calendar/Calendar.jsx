import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import moment from "moment";
import events from "../../../api/events";

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
  return (
    <div>
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
