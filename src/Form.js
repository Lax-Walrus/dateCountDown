import React, { useState } from "react";
export default function Form(props) {
  const [date, setDate] = useState("2021-12-25");

  const userDate = date;

  const submitButton = (e) => {
    e.preventDefault();
    props.onSaveDate(userDate);
    console.log(userDate);
  };

  return (
    <form className="form" onSubmit={submitButton}>
      <input
        className="dateBox"
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
        name="dayInput"
      ></input>

      <button className="button" type="submit">
        {" "}
        Submit
      </button>
    </form>
  );
}
