"use client";
import { useEffect, useState } from "react";

const useWidth = () => {
  const [isOnDesktop, setIsOnDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOnDesktop(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { isOnDesktop, setIsOnDesktop };
};

export default useWidth;
