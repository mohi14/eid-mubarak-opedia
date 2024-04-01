import './App.css'
import { useCountdown } from './hooks/useCountdown';
import audio from "./assets/audio1.mp3"
import audio1 from "./assets/audio.mp3"
import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti'

function App() {

  const targetDate = new Date('April 7, 2024 14:00:00 GMT +0600').toISOString();
  const [days, hours, minutes, seconds] = useCountdown(targetDate);



  const audioRef = useRef(null);
  const audioRef1 = useRef(null);





  if ((days + hours + minutes + seconds <= 0)) {
    return <section className='banner' onClick={() => audioRef1.current.play()}>
      <Confetti />
      <audio ref={audioRef1} autoPlay loop preload='auto' style={{ display: "none" }} >
        <source src={audio1} type="audio/mp3" />
      </audio>
      <div>
        <h1>Eid Vacation</h1>

        <div className='timerContainer'>
          <div>
            <p className='timerNumber'>0</p>
            <p className='timerLabel'>DAYS</p>
          </div>
          <div>
            <p className='timerNumber'>0</p>
            <p className='timerLabel'>HOURS</p>
          </div>
          <div>
            <p className='timerNumber'>0</p>
            <p className='timerLabel'>MINUTES</p>
          </div>
          <div>
            <p className='timerNumber'>0</p>
            <p className='timerLabel'>SECONDS</p>
          </div>
        </div>
      </div>
    </section>
  }



  return (
    <section className='banner' onClick={() => audioRef.current.play()}>
      <audio ref={audioRef} autoPlay loop preload='auto' style={{ display: "none" }} >
        <source src={audio} type="audio/mp3" />
      </audio>
      <div>
        <h1>Eid Vacation</h1>

        <div className='timerContainer'>
          <div>
            <p className='timerNumber'>{days}</p>
            <p className='timerLabel'>DAYS</p>
          </div>
          <div>
            <p className='timerNumber'>{hours}</p>
            <p className='timerLabel'>HOURS</p>
          </div>
          <div>
            <p className='timerNumber'>{minutes}</p>
            <p className='timerLabel'>MINUTES</p>
          </div>
          <div>
            <p className='timerNumber'>{seconds}</p>
            <p className='timerLabel'>SECONDS</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
