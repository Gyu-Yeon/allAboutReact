import { Component } from "react";
import "./ValidationSample.css";
import { useState } from "react";

const ValidationSample = () => {
  const [form, setForm] = useState({
    password: "",
    clicked: false,
    validated: false,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      password: e.target.value,
    });
  };

  const handleButtonClick = () => {
    setForm({
      ...form,
      clicked: true,
      validated: form.password === "0000",
    });
  };
  return (
    <div>
      <input
        type="password"
        name="pw"
        value={form.password}
        onChange={handleChange}
        className={form.clicked ? (form.validated ? "success" : "faliure") : ""}
      />
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
