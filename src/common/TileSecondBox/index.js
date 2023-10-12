import { Wrapper, StyledImgGallery, StyledTitle } from "./styled";
import { useImageSlider } from "../TilesList/useImageSlider";
import secondBox from "./secondBox.jpeg";
import salon from "./salon.jpg";
import salonwashing from "./salonwashing.jpeg";
import gallery from "./gallery.png";

export const TileSecondBox = () => {
  const images = [salon, secondBox, salonwashing];
  const currentImageIndex = useImageSlider(images, 5000);

  return (
    <Wrapper>
      <StyledTitle src={gallery} />
      <StyledImgGallery
        src={images[currentImageIndex]}
        alt={`Obrazek ${currentImageIndex + 1}`}
      />
    </Wrapper>
  );
};
