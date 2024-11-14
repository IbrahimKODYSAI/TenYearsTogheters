import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home";
import Flowers from "./components/Flowers";
import FlowersCanvas from "./components/Flowers/FlowersCanvas";
import { useEffect, useRef, useState } from "react";
import AuroraScene from "./components/Aurora";
import Loading from "./components/Loading";
import AfterFlower from "./components/AfterFlower";
import PruplePage from "./components/PurplePage";
import Paralax from "./components/Paralax";
import { AnimatePresence } from "framer-motion";
import Paralax1 from "./components/Paralax1";
import VideoForYou from "./components/VideoForYou";

function App() {
  const [isFullscreenApplied, setIsFullscreenApplied] = useState(false);
  const [isSoundPlaying, setSoundPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [percentage, setPercentage] = useState(false);

  const [passCode, setPassCode] = useState("");
  const location = useLocation();
  const routesWithAurora = [
    "/",
    "/something-for-you",
    "/flowers-for-you",
    "/after-flower",
    "/videoforyou",
  ];
  // Initialize sounds
  const bgMusicAuddio = useRef(new Audio("./sounds/bg-music.mp3"));
  const bgMusicAuddio2 = useRef(new Audio("./sounds/bg-music2.mp3"));

  const fireworksAudio = useRef(new Audio("./sounds/fireworks1.mp3"));

  useEffect(() => {
    // Set looping and volume for each audio
    bgMusicAuddio.current.loop = true;
    bgMusicAuddio.current.volume = 0.3;
    bgMusicAuddio2.current.loop = true;
    bgMusicAuddio2.current.volume = 0.2;
    fireworksAudio.current.volume = 0.3;
  }, []);

  const formatDate = (value) => {
    // Remove any non-numeric characters
    const cleanedValue = value.replace(/\D/g, "");

    // Split into day, month, and year parts
    const day = cleanedValue.slice(0, 2);
    const month = cleanedValue.slice(2, 4);
    const year = cleanedValue.slice(4, 8);

    let formattedDate = day;
    if (month) formattedDate += `/${month}`;
    if (year) formattedDate += `/${year}`;
    return formattedDate;
  };

  const handleInputChange = (e) => {
    const formattedValue = formatDate(e.target.value);
    setPassCode(formattedValue);
  };

  useEffect(() => {
    if (["01/11/2014", "01-11-2014", "01112014"].includes(passCode)) {
      setShowButton(true);
    }
  }, [passCode]);

  const enterFullscreen = () => {
    const element = document.documentElement; // Fullscreen on the entire page

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen(); // Firefox
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(); // Chrome, Safari, Opera
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen(); // IE/Edge
    }

    setIsFullscreenApplied(true);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreenApplied(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  const playTheSound = () => {
    if (isSoundPlaying) {
      if (location.pathname === "/") {
        bgMusicAuddio2.current.play();
        fireworksAudio.current.play();
      }
    }
  };

  useEffect(() => {
    // Stop background music on the specific page
    if (!["/"].includes(location.pathname) && isSoundPlaying) {
      bgMusicAuddio2.current.pause();
      bgMusicAuddio.current.play();
    } else if (isSoundPlaying) {
      playTheSound();
    }
    return () => {
      bgMusicAuddio.current.pause();
      bgMusicAuddio2.current.pause();
      fireworksAudio.current.pause();
    };
  }, [location.pathname, isSoundPlaying]);

  useEffect(() => {
    if (showButton === true) {
      setTimeout(() => {
        setPercentage(true);
      }, 6000);
    }
  }, [showButton]);

  return (
    <div>
      {routesWithAurora.includes(location.pathname) && <AuroraScene />}
      {isFullscreenApplied && (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/souvenirs" element={<Paralax1 />} />
            <Route path="/videoforyou" element={<VideoForYou />} />
            <Route path="/something-for-you" element={<Flowers />} />
            <Route path="/flowers-for-you" element={<FlowersCanvas />} />
            <Route path="/after-flower" element={<AfterFlower />} />
            <Route path="/iloevyou" element={<PruplePage />} />
            <Route path="/paralax" element={<Paralax />} />
          </Routes>
        </AnimatePresence>
      )}
      {!isFullscreenApplied && (
        <div>
          {!showButton && (
            <div className="flex justify-center m-auto  w-[100vw] h-[100vh] bg-black">
              <input
                type="text"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                value={passCode}
                className="border rounded-lg bg-transparent py-1 px-2 w-[280px] h-max m-auto z-50"
                placeholder="La date de notre anniversaire..."
              />
            </div>
          )}
          {showButton && (
            <div>
              <div className="absolute flex justify-center top-[50vh] m-auto  w-[100%] left-0 text-3xl">
                {percentage === true ? (
                  <button
                    onClick={() => {
                      enterFullscreen();
                      setSoundPlaying(true);
                    }}
                    className="text-white px-4 py-2 rounded-lg btn2"
                  >
                    Commencer
                  </button>
                ) : (
                  <div>
                    <p className="mb-4">
                      Pendant le chargement, prends le temps d'admirer ce ciel
                      étoilé scintillant,
                    </p>
                    <p>et cette aurore boréale spécialement faite pour toi</p>
                  </div>
                )}
              </div>
              <div>
                {percentage === true ? (
                  <div className="absolute flex justify-center top-[65vh] m-auto  w-[100%] left-0">
                    <div>
                      <div className="flex space-x-7 m-auto  justify-center mb-4">
                        <i className="fas fa-headphones-alt text-5xl"></i>
                        <i className="fas fa-volume-up text-5xl"></i>
                      </div>
                      <p>
                        Pour une meilleure immersion, pour entendre & ressentir
                        ce que j'avais en tête pour toi.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="absolute flex justify-center top-[65vh] m-auto  w-[100%] left-0">
                    <Loading /> <p className=" self-end text-4xl pb-2">%</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
