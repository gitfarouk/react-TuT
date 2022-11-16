import React from 'react';
import { useState, useEffect } from 'react';

const Footer = () => {
  /* const currentTime = () => {
    let date = new Date();
    let hh = date.getHours();
    let hoursAP = hh % 12;
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = (hoursAP < 12) ? "AM" : "PM";


    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    
    return hh + ":" + mm + ":" + ss + session;

  } */
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <footer>
      <p>Copyright &copy; and time {date.toLocaleTimeString()}</p>
    </footer>
  )
}

export default Footer
