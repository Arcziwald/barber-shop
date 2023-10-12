import { Wrapper, StyledImgGallery } from "./styled";
import { useImageSlider } from "../TilesList/useImageSlider";
import standingsolar from "./standingsolar.jpeg";
import lyingsolar from "./lyingsolar.jpeg";
import solar from "./solar.jpg";

export const TileThirdBox = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [lyingsolar,standingsolar, solar];
  const currentImageIndex = useImageSlider(images, 3000);

  return (
    <Wrapper>
      <StyledImgGallery
        src={images[currentImageIndex]}
        alt={`Obrazek ${currentImageIndex + 1}`}
      />
    </Wrapper>
  );
};
