import { useEffect, useState } from "react";

export const CountDownerApp = () => {
  const [timeLeft, setTimeLeft] = useState(3600); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)); 
    }, 1000);

    return () => clearInterval(timer); 
  }, []);


  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="p-4 text-xl">
      <p>Countdown Timer</p>
      <p>
        Time Left: {hours} hour{hours !== 1 ? "s" : ""}, {minutes} minute
        {minutes !== 1 ? "s" : ""}, {seconds} second{seconds !== 1 ? "s" : ""}
      </p>
    </div>
  );
};
