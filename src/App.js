import React,{useState} from "react";
import Clock from "./Clock";
import './App.css';

function App() {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [periodSymbol, setPeriodSymbol] = useState(0);

  setInterval(() => {
    const todayTime = new Date();
    if (todayTime.getHours() > 12 && todayTime.getHours() < 25){
        setPeriodSymbol('PM');
    }else {
        setPeriodSymbol('AM');
    }
    setHours(zeroPadding(period(todayTime.getHours()), 2));
    setMinutes(zeroPadding(todayTime.getMinutes(), 2));
    setSeconds(zeroPadding(todayTime.getSeconds(), 2));
  }, 1000);
  function zeroPadding(num, digit) {
      let zero = '';
      for(let i = 0; i < digit; i++) {
          zero += '0';
      }
      return (zero + num).slice(-digit);
  }
  function period(ampm){
      if (ampm > 12 && ampm < 25){
          return ampm - 12;
      }
      else return ampm;
  }

  return (
    <div className="App">
      <Clock minutes={minutes} hours={hours} seconds={seconds} periodSymbol={periodSymbol}/>
      
    </div>
  );
}

export default App;
