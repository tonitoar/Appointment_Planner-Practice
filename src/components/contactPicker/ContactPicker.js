import React from "react";

export const ContactPicker = ({contacts, value, onChange, name}) => {
  return (
    <div>
      <select name={name} id={name} value={value} onChange={onChange}>
        <option value="">No Contact Selected</option>
        {contacts.map((contact, i) => (
          <option key={i} value={contact.name}>{contact.name}</option>
        ))}
      </select>
    </div>
  );
};
