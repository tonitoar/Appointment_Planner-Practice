import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState(""); 
  const [phone, setPhone] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [duplicate, setDuplicate] = useState(false);

  // Using useEffect to check for duplicate contacts
  useEffect(() => {
    const isDuplicate = contacts.some(
      (contact) => name.toLowerCase() === contact.name.toLowerCase()
    );
    setDuplicate(isDuplicate);
  }, [name, contacts]); // Ensure this doesn't update while rendering

  useEffect(() => {
    console.log("Contacts received in ContactsPage:", contacts);
  }, [contacts]);
  
  console.log("Rendering ContactsPage with contacts:", contacts);
  

  // Handle form submission safely
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log values for debugging
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);

    // Add contact only if it's not a duplicate
    if (!duplicate) {
      addContact(name, phone, email); 
      setName(""); 
      setPhone("");
      setEmail(""); 
    } else {
      console.log("Duplicate contact found, not adding.");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};
