import React, { useEffect, useState } from 'react'

const CountDown = () => {
  const deadline = "December 31, 2025 23:59:59"
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimeRemaining = () => {
    const difference = Date.parse(deadline) - Date.now();

    setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((difference / (1000 * 60 * 60)) % 24))
    setMins(Math.floor((difference / (1000 * 60)) % 60))
    setSeconds(Math.floor((difference / 1000) % 60))
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getTimeRemaining(deadline)
    }, 1000)
    return () => clearInterval(interval); // Cleanup timer on unmount
  }, []);
  return (
    <div className="bg-gray-900 h-screen w-screen flex justify-center items-center">
      <div className="bg-gray-500 rounded-md font-bold text-xl w-[40%] h-[20rem] flex justify-center items-center p-4">
        <div className="bg-gray-100 flex  justify-center items-center rounded-md font-bold text-xl w-full h-full p-6 gap-8">
          <div className="text-center ">
            <h1>Days</h1>
            <h6>{days < 10 ? "0" + days : days}</h6>
          </div>
          <div className="text-center">
            <h1>Hours</h1>
            <h6>{hours < 10 ? "0" + hours : hours}</h6>
          </div>
          <div className="text-center">
            <h1>Minutes</h1>
            <h6>{mins < 10 ? "0" + mins : mins}</h6>
          </div>
          <div className="text-center">
            <h1>Seconds</h1>
            <h6>{seconds < 10 ? "0" + seconds : seconds}</h6>
          </div>
        </div>
      </div>
    </div>


  )
}

export default CountDown