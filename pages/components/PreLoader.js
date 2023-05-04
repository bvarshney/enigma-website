import { useEffect, useState } from "react";
import { gsap } from "gsap";

const words = [
  "Namaste! 🙏",
  "Hola",
  "Hello",
  "Jomor",
  "Bonjour",
  "Olá",
  "Ni Hao",
  "Ciao",
  "Salam",
  "Shalom!",
];

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [word, setWord] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          setLoading(false);
          clearInterval(timer);
        }
        const diff = Math.random() * 10;
        return Math.min(prevProgress + diff, 100);
      });
      setWord(words[Math.floor(Math.random() * words.length)]);
    }, 180); // Change this to adjust the interval between progress updates
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      let ctx = gsap.context(() => {
        const svg = document.getElementById("svg");
        const tl = gsap.timeline();
        const curve = "M0, 502S175, 272, 500, 272s500, 230, 500, 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        tl.to(".words-preloader", {
          opacity: 0,
          duration: 0.5,
        });
        // tl.to(".loading-bar-container ", {
        //   opacity: 0,
        //   duration: 0.5,
        // });
        tl.to(svg, {
          duration: 0.5,
          attr: { d: curve },
          ease: "power2.easeIn",
        }).to(svg, {
          duration: 0.5,
          attr: { d: flat },
          ease: "power2.easeOut",
        });
        tl.to(".preloader", {
          y: "-1500",
          opacity: 0,
          ease: "power2.inOut",
        });
      });
      return () => ctx.revert();
    }
  }, [loading]);

  return (
    <div className="preloader" id="loader">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
      </svg>
      <div className="words-preloader">{word}</div>
      {/* <div className="loading-bar-container"> */}
      {/* <div className="loading-bar" style={{ width: `${progress}%` }}></div> */}
      {/* </div> */}
    </div>
  );
};

export default Preloader;
