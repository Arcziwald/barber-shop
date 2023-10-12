import { useEffect, useState } from "react";

export const useImageSlider = (images, intervalTime) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [images, intervalTime]);

  return currentImageIndex;
};
