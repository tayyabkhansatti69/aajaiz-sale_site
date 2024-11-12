// import { useEffect } from "react";
// import Image from "next/image";
import { preloader } from "../utilits";

// const PreLoader = () => {
//   useEffect(() => {
//     preloader();
//   }, []);

//   return (
//     <div id="preloader">
//       <div className="loader_line"></div>
//     </div>
//   );
// };
// export default PreLoader;
import { useState, useEffect } from "react";

const PreLoader = () => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    // Hide the GIF after 3 seconds
    const timer = setTimeout(() => {
      setShowGif(false);
      preloader();
    }, 6000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader">
      {showGif ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
          }}
        >
          <img
            src="/gif/Flow 6@1x-25fps.gif"
            alt="Splash Screen"
            style={{
              width: "100%", 
              maxWidth: "1080px", 
              height: "auto", 
              maxHeight: "887px", 
            }}
          />
        </div>
      ) : (
        <div className="loader_line"></div>
      )}
    </div>
  );
};

export default PreLoader;
