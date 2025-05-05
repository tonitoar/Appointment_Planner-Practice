import React, { useState, useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);


    // Log contacts after it has been updated
    useEffect(() => {
      console.log("Updated contacts:", contacts);
    }, [contacts]); // This will log contacts whenever they change

  /*
  Implement functions to add data to
  contacts and appointments
  */

  // const addContact = (name, phone, email) => {
  //   setContacts((prevContacts) => [...prevContacts, {name, phone, email}]);
  // };

  const addContact = (name, phone, email) => {
    setContacts((prevContacts) => {
      const newContacts = [...prevContacts, { name, phone, email }];
      console.log("New contacts after addContact:", newContacts);  // Log here to track state changes
      return newContacts;
    });
  };
  

  const addAppointment = (name, contact, date, time) => {
    setAppointments((prevAppointments) => [...prevAppointments, {name, contact, date, time}]);
  };

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
          <Route
            path={ROUTES.CONTACTS}
            element={<ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */}
          />
          <Route
            path={ROUTES.APPOINTMENTS}
            element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/> /* Add props to AppointmentsPage */}
          />
        </Route>
      )
    );

    return <RouterProvider router={router} />;
  }


export default App;
