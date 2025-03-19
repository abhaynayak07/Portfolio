import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

function Forms() {
  const [phone, setPhone] = useState("");

  return (
    <form>
      <section>
        <div className="name-input-container">
          <div className="input-container">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="First Name"
              placeholder="First name"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="Last Name"
              placeholder="Last name"
              required
            />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="you@company.com"
            required
          />
        </div>
        <div className="input-container">
          <label style={{ fontFamily: "Urbanist" }}>Phone Number</label>
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={setPhone}
            inputProps={{
              name: "Phone Number",
              required: true,
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="Message"
            placeholder="Leave a message"
            required
          ></textarea>
        </div>
      </section>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Forms;
