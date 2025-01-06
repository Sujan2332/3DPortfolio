import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [earthCanvasLoaded, setEarthCanvasLoaded] = useState(false);

  useEffect(() => {
    // Function to check if the screen is mobile size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set threshold for mobile screens
    };

    // Set initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Refresh the page if on mobile and EarthCanvas is not loaded
    if (isMobile && !earthCanvasLoaded) {
      const refreshInterval = setInterval(() => {
        window.location.reload();
      }, 2000); // Refresh every 2 seconds

      return () => clearInterval(refreshInterval); // Cleanup interval on component unmount
    }
  }, [isMobile, earthCanvasLoaded]);

  const handleEarthCanvasLoad = () => {
    setEarthCanvasLoaded(true); // Mark EarthCanvas as loaded
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sai Sujan S</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build responsive and scalable web applications with a focus{" "}
            <br className="sm:block hidden" /> on user experience and
            functionality.
          </p>
        </div>
      </div>

      {/* Render Canvas based on device type */}
      {isMobile ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh", // Full viewport height
          }}
        >
          <div
            style={{
              width: "100%",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "-140px",
            }}
          >
            <EarthCanvas onLoad={handleEarthCanvasLoad} />
          </div>
        </div>
      ) : (
        <ComputersCanvas />
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
  