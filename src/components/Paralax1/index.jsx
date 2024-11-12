import { useEffect } from "react";
import "./style.css";
import Intro from "./Intro";
import Library from "./Library";
import Banner from "./Banner";
import transitions from "../transitions";

function Paralax1() {
  useEffect(() => {
    const listBg = document.querySelectorAll(".bg");
    const listTab = document.querySelectorAll(".tab");
    const titleBanner = document.querySelector(".banner h1");

    const handleScroll = () => {
      const top = window.scrollY;

      listBg.forEach((bg, index) => {
        if (index !== 0 && index !== 8) {
          bg.style.transform = `translateY(${(top * index) / 2}px)`;
        } else if (index === 0) {
          bg.style.transform = `translateY(${top / 3}px)`;
        }
      });

      titleBanner.style.transform = `translateY(${(top * 4) / 2}px)`;

      listTab.forEach((tab) => {
        if (tab.offsetTop - top < 550) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <Banner />
      <Intro />
      <Library />
    </div>
  );
}

export default transitions(Paralax1);
