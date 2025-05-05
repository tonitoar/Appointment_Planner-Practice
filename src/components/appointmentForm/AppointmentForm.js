import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Tim Bach" value={name} onChange={(e) => setName(e.target.value)}/>

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} min={getTodayString()}/>

        <ContactPicker contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)}/>

        <button type="submit">Upload Data</button>
      </form>
    </div>
  );
};
