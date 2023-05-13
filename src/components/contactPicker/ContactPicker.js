import React from "react";

export const ContactPicker = ( {name, value, contacts, onChange} ) => {
  return (
    <select name={name} value={value} onChange={onChange} >
      <option key='0' value=''>
        No Contact Selected
      </option>
      {contacts.map((contact,i) => 
        <option key={i+1} value={contact.name}>
          {contact.name}
        </option>
      )}
    </select>
  );
};
