import React, { useEffect, useState } from "react";
import "./App.css";
import Clock from "./components/ClockCompont";

const App = () => {
  const [secondRatio, setSecondRatio] = useState(0);
  const [minuteRatio, setMinuteRatio] = useState(0);
  const [hourRatio, setHourRatio] = useState(0);

  const setClock = () => {
    const currentDate = new Date();
    setSecondRatio(currentDate.getSeconds() / 60);
    setMinuteRatio((secondRatio + currentDate.getMinutes()) / 60);
    setHourRatio((minuteRatio + currentDate.getHours()) / 12);
  };


  //Every second should clock executes 
  useEffect(() => {
    setInterval(() => {
      setClock();
    }, 1000);
  }, []);

  return (
    <Clock
      secondRatio={secondRatio}
      minuteRatio={minuteRatio}
      hourRatio={hourRatio}
    />
  );
};

export default App;
