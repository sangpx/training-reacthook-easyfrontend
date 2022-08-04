import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

Clock.propTypes = {};

function Clock() {
  const [timeString, setTimeString] = useState("");

  const formatDate = (date) => {
    if (!date) return "";

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours} : ${minutes}: ${seconds}`;
  };

  // moi lan sau moi giay, cap nhat lai timeString
  useEffect(() => {
    const closeInterval = setInterval(() => {
      const now = new Date();
      //HH:mm:ss
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);

    return () => {
      //cleanup
      console.log("clock clean");
      clearInterval(closeInterval);
    };
  }, []);

  return (
    <div>
      <h3> {timeString} </h3>
    </div>
  );
}

export default Clock;
