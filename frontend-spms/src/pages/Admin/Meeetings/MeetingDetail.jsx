import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MeetingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const meeting = {
    group: "AI Innovators",
    guide: "Dr. Raj Sharma",
    dateTime: "2026-02-10 11:00 AM",
    location: "Lab 301",
    purpose: "Progress Review",
    notes: "Good progress, improve documentation.",
    status: "Completed",
  };

  return (
    <>
      <h3>Meeting Details</h3>

      <div className="card mt-3">
        <div className="card-body">
          <p><b>Project Group:</b> {meeting.group}</p>
          <p><b>Guide:</b> {meeting.guide}</p>
          <p><b>Date & Time:</b> {meeting.dateTime}</p>
          <p><b>Location:</b> {meeting.location}</p>
          <p><b>Purpose:</b> {meeting.purpose}</p>
          <p><b>Status:</b> {meeting.status}</p>
          <p><b>Notes:</b> {meeting.notes}</p>

          <button
            className="btn btn-secondary mt-2"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default MeetingDetail;
