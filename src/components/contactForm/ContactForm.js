import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit, 
  duplicate
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          {duplicate && <span style={ {color: 'red'} }>&nbsp;&nbsp; This contact already exists</span>}
        </label>
        <label>
          <input 
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contact Name"
            aria-label="Contact Name"
            required />
        </label>
        <label>
          <input 
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            // regex for phone number
            pattern="[0-9]{10}"
            placeholder="Contact Number (0123456789)"
            aria-label="Contact Number"
            required />
        </label>
        <label>
          <input 
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Contact Email"
            aria-label="Contact Email"
            required />
        </label>
        <input type="submit" placeholder="Add Contact" aria-label="Add Contact" />
      </form>
    </>
  );
};

