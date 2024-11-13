import { useEffect, useRef, useState } from "react";
import transitions from "../transitions";
import { Link } from "react-router-dom";

const VideoForYou = ({ width = "", height = "360", poster }) => {
  const videoRef = useRef(null);
  const [showOpenButton, setShowOpenButton] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
    }
    const timer1 = () => {
      setTimeout(() => {
        setShowOpenButton(true);
      }, 231000);
    };
    timer1();

    return () => clearInterval(timer1);
  }, []);

  return (
    <div className="flex flex-col justify-center w-screen h-screen bg-black">
      <div className="m-auto">
        <video
          ref={videoRef}
          width="1920"
          height="1080"
          controls
          poster={poster}
          className="border m-auto"
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
      {showOpenButton && (
        <div className="absolute flex justify-center top-[60vh] m-auto  w-[100%] left-0">
          <Link to="/after-flower">
            <div className="btn bg-white">
              <svg
                height="24"
                width="24"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                className="sparkle"
              >
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>
              <span className="text">Continuer</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default transitions(VideoForYou);
