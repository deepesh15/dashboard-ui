import React from "react";
import EventItem from "./EventItem";
import { ReactComponent as SideDrop } from "../svg/DropDown-side.svg";
const ScheduleCard = ({ EventList }) => {
  return (
    <div className="schedule-card Card">
        <div className="schedule-header">
            <h2>Today's Schedule</h2>
            <p>See all <SideDrop/></p>
        </div>
      <div className="schedule-body">
        {EventList.map((event) => {return <EventItem MeetingTitle={event.title} MeetingLocation={event.location} MeetingTime ={event.timing}/>})}
      </div>
    </div>
  );
};

export default ScheduleCard;