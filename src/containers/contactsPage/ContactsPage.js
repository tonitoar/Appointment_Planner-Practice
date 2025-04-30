import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState(""); 
 const [phone, setPhone] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [duplicate, setDuplicate] = useState(false); 

 /*
 Using hooks, check for contact name in the 
 contacts array variable in props
 */
 useEffect(()=> {
 const isDuplicate = contacts.some((contact) => name.toLowerCase() === contact.name.toLowerCase());
 setDuplicate(isDuplicate);  
 }, [name, contacts]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (duplicate === false) {
    addContact(name, phone, email); 
    setName("");
    setPhone("");
    setEmail(""); 
   }
  };


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm onSubmit={handleSubmit} name={name} phone={phone} email={email} newName={setName} newPhone={setPhone} newEmail={setEmail}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
