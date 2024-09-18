import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 500) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    window.addEventListener("resize", checkSize);
    checkSize();

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [breakpoint]);
  return [isMobile, setIsMobile];
};
