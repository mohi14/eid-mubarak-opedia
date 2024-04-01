import './App.css'
import { useCountdown } from './hooks/useCountdown';
import audio from "./assets/audio1.mp3"
import { useEffect, useRef, useState } from 'react';

function App() {

  const targetDate = new Date('April 10, 2024 23:59:00 GMT+0600').toISOString();
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const [audioLoaded, setAudioLoaded] = useState(false);

  const audioRef = useRef(null);

  const banner = useRef(null)

  const handlePlay = () => {

    setTimeout(() => {
      audioRef.current.play();
    }, 2000);


  };

  useEffect(() => {
    // Check if audio is loaded
    if (audioRef.current.readyState >= 3) {
      setAudioLoaded(true);
    } else {
      // If not loaded, listen for 'canplaythrough' event to set loaded state
      audioRef.current.addEventListener('canplaythrough', () => {
        setAudioLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    // Play audio if loaded and countdown reaches zero
    if ((days + hours + minutes + seconds <= 0) && audioLoaded) {
      audioRef.current.play();
    }
  }, [days, hours, minutes, seconds, audioLoaded]);



  if ((days + hours + minutes + seconds <= 0)) {
    return <div>okay</div>
  }



  return (
    <section className='banner' ref={banner}>
      <audio ref={audioRef} autoPlay loop preload='on' style={{ display: "none" }} >
        <source src={audio} type="audio/mp3" />
      </audio>
      <div>
        <h1>Eid Mubarak</h1>

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
