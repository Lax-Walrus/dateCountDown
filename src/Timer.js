import React, { useEffect, useState } from "react";
import Form from "./Form";
import TimeCalculate from "./TimeCalculate";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(TimeCalculate());
  const [year] = useState(new Date().getFullYear());
  const [date, setDate] = useState(`${year}-12-25`);

  const saveDateHandler = (userDate) => {
    console.log(userDate);
    setDate(userDate);
    console.log("notice this " + userDate);
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(TimeCalculate(date));
    }, 1000);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span className="countdown">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  console.log(timeLeft + " timeLeft");

  return (
    <div>
      <Form onSaveDate={saveDateHandler} />
      <h1 className="title">
        {" "}
        <span className="year">{year}</span> DATE COUNTDOWN{" "}
      </h1>
      <div className="countdown_container">
        {}
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span className="completed"> Count down completed! </span>
        )}
      </div>
    </div>
  );
}
