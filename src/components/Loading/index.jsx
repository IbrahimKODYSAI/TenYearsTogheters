import React, { useState, useEffect } from "react";

const Loading = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const keyframes = [
      { time: 0, percentage: 0 },
      { time: 0.06, percentage: 1 },
      { time: 0.12, percentage: 2 },
      { time: 0.18, percentage: 3 },
      { time: 0.24, percentage: 4 },
      { time: 0.32, percentage: 5 },
      { time: 0.48, percentage: 15 },
      { time: 0.8, percentage: 15 }, // Pause from 0.48s to 0.8s
      { time: 1.12, percentage: 22 },
      { time: 1.44, percentage: 22 }, // Pause from 1.12s to 1.44s
      { time: 1.76, percentage: 36 },
      { time: 2.08, percentage: 36 }, // Pause from 1.76s to 2.08s
      { time: 2.72, percentage: 75 },
      { time: 3.04, percentage: 75 }, // Pause from 2.72s to 3.04s
      { time: 3.2, percentage: 80 },
      { time: 3.36, percentage: 80 }, // Pause from 3.2s to 3.36s
      { time: 4.01, percentage: 99 },
      { time: 4.32, percentage: 99 }, // Pause from 4.01s to 4.32s
      { time: 6, percentage: 100 },
    ];

    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = (Date.now() - startTime) / 1000; // in seconds
      if (elapsedTime >= 6) {
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
