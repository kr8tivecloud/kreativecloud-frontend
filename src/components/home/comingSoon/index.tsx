"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure rendering happens only after client-side mount

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [targetDate]);

  // Avoid rendering until mounted on client
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className="text-2xl md:text-3xl lg:text-[2rem]"
      style={{ textAlign: "center", color: "#fff" }}
    >
      <div className="flex items-center gap-2 xs:gap-4 font-sans">
        <div className="flex items-center gap-1">
          {timeLeft.days} <span className="text-sm opacity-90">Days</span>{" "}
        </div>
        <div className="flex items-center gap-1">
          {timeLeft.hours} <span className="text-sm opacity-90">Hours</span>
        </div>
        <div className="flex items-center gap-1">
          {timeLeft.minutes} <span className="text-sm opacity-90">Minutes</span>
        </div>

        <div className="flex items-center gap-1">
          {timeLeft.seconds} <span className="text-sm opacity-90">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
