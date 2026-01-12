// Implement a CountdownTimer component using useState and useEffect.
// Timer starts from a given number
// Decreases every second
// Stops at zero
// Has a Reset button

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timer, setTimer] = useState(10);
    useEffect(()=>{
        if(timer===0) return;
        const gap = setInterval(()=>{
            setTimer(timer => timer - 1)
        },1000)
        return()=>clearInterval(gap);
    }, [timer])

    const handleReset = ()=>{
        setTimer(10);
    }
  return (
    <>
      <h1>Countdown Timer</h1>
      <h2>{timer}</h2>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
