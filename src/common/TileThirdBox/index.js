import { Wrapper, StyledImgGallery } from "./styled";
import { useEffect, useState } from "react";
import standingsolar from "./standingsolar.jpeg";
import lyingsolar from "./lyingsolar.jpeg";

export const TileThirdBox = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [standingsolar, lyingsolar];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <Wrapper>
      <StyledImgGallery
        src={images[currentImageIndex]}
        alt={`Obrazek ${currentImageIndex + 1}`}
      />
    </Wrapper>
  );
};
