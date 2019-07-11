import React from "react";

function TimeAlert() {
  const date = new Date();
  const hours = date.getHours();
  let timeMessage = "";

  if (hours < 12) {
    timeMessage = "morning";
  } else if (hours >= 12 && hours < 18) {
    timeMessage = "afternoon";
  } else {
    timeMessage = "night";
  }

  return <span>Good {timeMessage}!</span>;
}

export default TimeAlert;
