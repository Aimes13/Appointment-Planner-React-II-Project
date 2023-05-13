import {  Outlet, NavLink } from "react-router-dom";
import React from "react";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

function Root() {
    return (
        <>
            <nav>
                <NavLink to={ROUTES.CONTACTS} >
                Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} >
                Appointments
                </NavLink>
            </nav>
            <Outlet/>
      </>
    );

}

export default Root;