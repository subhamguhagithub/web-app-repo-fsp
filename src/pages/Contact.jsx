import React, { useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import classNames from "classnames";

import './Contact.css';

function Contact(props) {
  const [value, setValue] = useState('');
  const [data, setData] = useState('');
  const { success, normal, alert } = props;

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('A name was submitted:' + inputRef.current.value);
    setData(inputRef.current.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "18px", padding: "12px" }}>
      
      <Link
        to="profile"
        style={{
          padding: "14px",
          backgroundColor: "coral",
          color: "#fff",
          textDecoration: "none",
          marginRight: "10px"
        }}
      >
        Profile
      </Link>

      <Link
        to="accounts"
        style={{
          padding: "14px",
          backgroundColor: "#c2c3c3",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        Accounts
      </Link>

      <Outlet />
      <hr />

      <h1> Controlled Form </h1>

      <form>
        <input
          type="text"
          name="name"
          value={value}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <button type="submit">Click</button>
      </form>

      <h3>{value}</h3>

      <hr />

      <h2>Uncontrolled form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter name"
        />
        <button type="submit">Click</button>
      </form>

      <h3>{data}</h3>

      <br />

      <hr />

      <div
        className={classNames('container', {
          success: true,
          alert: true,
          normal: normal,
        })}
      >
      </div>

    </div>
  );
}

export default Contact;
