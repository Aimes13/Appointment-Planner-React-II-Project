import React from "react";

export const ContactPicker = ( {contacts, onChange, value, name} ) => {
  return (
    <select value={value} onChange={onChange} name={name}>
      <option key='0' value=''>
        No Contact Selected
      </option>
      {contacts?.map((contact,i) =>
        <option key={i+1} value={contact.name}>
          {contact.name}
        </option>
      )}
    </select>
  );
};
