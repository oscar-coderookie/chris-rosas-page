import React,{useState, useEffect} from "react";
import "./CounterComponent.scss";

const CounterComponent = ({label, number, duration}) => {
const [count, setCount] = useState('0');

useEffect(() => {
  const start = 0;
  const end = parseInt(number.substring(0,3));

  if (start === end) return;

  const totalMilSecDur = parseInt(duration);
  const incrementTime = (totalMilSecDur / end) * 1000;

  const timer = setInterval(()=> {
      start += 1;
      setCount(String(start) + Number.substring(3))
      if(start === end) clearInterval(timer)
  }, incrementTime);

}, [number, duration])

  return (
    <div className="counter">
      <h3>
      <span> {label}: {count}</span></h3>
    </div>
  );
};

export default CounterComponent;
