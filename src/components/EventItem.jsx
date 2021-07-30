import React from 'react';

const EventItem =({MeetingTitle,MeetingTime,MeetingLocation})=>{
    return(
        <div className="event-item">
            <div className="event-bar"></div>
            <div className="event-details">
            <h4>{MeetingTitle}</h4>
            <p>{MeetingTime}</p>
            <p>at {MeetingLocation}</p>
            </div>
        </div>
    );
}

export  default EventItem;