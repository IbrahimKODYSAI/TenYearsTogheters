import React, { useState, useEffect } from "react";

const Loading = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const keyframes = [
      { time: 0, percentage: 0 },
      { time: 0.1, percentage: 1 },
      { time: 0.2, percentage: 2 },
      { time: 0.3, percentage: 3 },
      { time: 0.4, percentage: 4 },
      { time: 0.53, percentage: 5 },
      { time: 0.8, percentage: 15 },
      { time: 1.33, percentage: 15 }, // Pause from 0.8s to 1.33s
      { time: 1.87, percentage: 22 },
      { time: 2.4, percentage: 22 }, // Pause from 1.87s to 2.4s
      { time: 2.93, percentage: 36 },
      { time: 3.47, percentage: 36 }, // Pause from 2.93s to 3.47s
      { time: 4.53, percentage: 75 },
      { time: 5.07, percentage: 75 }, // Pause from 4.53s to 5.07s
      { time: 5.33, percentage: 80 },
      { time: 5.6, percentage: 80 }, // Pause from 5.33s to 5.6s
      { time: 6.67, percentage: 99 },
      { time: 7.2, percentage: 99 }, // Pause from 6.67s to 7.2s
      { time: 8, percentage: 100 },
    ];

    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = (Date.now() - startTime) / 1000; // in seconds
      if (elapsedTime >= 15) {
        setPercentage(100);
        clearInterval(interval);
        return;
      }

      const getPercentageAtTime = (t) => {
        for (let i = 0; i < keyframes.length - 1; i++) {
          const kf1 = keyframes[i];
          const kf2 = keyframes[i + 1];
          if (t >= kf1.time && t < kf2.time) {
            const timeDiff = kf2.time - kf1.time;
            const percentageDiff = kf2.percentage - kf1.percentage;
            if (timeDiff === 0) return kf1.percentage; // Avoid division by zero
            const timeSinceKf1 = t - kf1.time;
            const percentage =
              kf1.percentage + (percentageDiff * timeSinceKf1) / timeDiff;
            return percentage;
          }
        }
        return 100; // If time t >= last keyframe time
      };

      setPercentage(getPercentageAtTime(elapsedTime));
    }, 100); // update every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="text-white text-7xl w-32"> {percentage.toFixed(0)}</p>
    </div>
  );
};

export default Loading;
