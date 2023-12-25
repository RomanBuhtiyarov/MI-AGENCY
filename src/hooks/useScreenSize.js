import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window?.outerWidth,
    height: window?.outerHeight,
    isMobile: window?.outerWidth < 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window?.outerWidth,
        height: window?.outerHeight,
        isMobile: window?.outerWidth < 768,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};
