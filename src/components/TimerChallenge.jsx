import React, { useState } from 'react'

const TimerChallenge = ({title,targetTime}) => {
  const [timerStarted,setTimerStarted]=useState(false)
  const[timerExpired,setTimerExpired]=useState(false);
  function handleStart(){
    setTimerStarted(true)
    setTimeout(() => {
      setTimerExpired(true)
    }, targetTime*1000);
  }
  
  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className='challenge-timer'>
        {targetTime} second{targetTime>1?'s':''}
      </p>
      <p>
        <button onClick={handleStart}>
          Start Challenge
        </button>
      </p>
      <p className=''>
        {timerStarted?'Time is running...':'Timer Inactive'}
      </p>
    </section>
  )
}

export default TimerChallenge
