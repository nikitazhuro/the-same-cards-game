import React, { useEffect, useRef, useState } from "react"

const Statistics = () => {
  const [currentStep, setCurrentStep] = useState();
  const [currentTime, setCurrentTime] = useState(0);
  const interval = useRef(null);

  console.log(currentTime);

  const startCounter = () => interval.current = setInterval(() => {
    setCurrentTime(prev => prev + 1)
  }, 1000)

  const stopCounter = () => clearInterval(interval.current)
  
  useEffect(() => {
    startCounter()
    return stopCounter()
  }, [currentTime])
  return (
    <div className="Statistics">
      {currentTime}
    </div>
  )
}

export default Statistics;