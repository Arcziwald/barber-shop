import { Wrapper, StyledImgGallery, StyledTitle } from "./styled";
import secondBox from "./secondBox.jpeg";
import gallery from "./gallery.png";

export const TileSecondBox = ({ title }) => {
  return (
    <Wrapper>
      <StyledTitle src={gallery} />
      <StyledImgGallery src={secondBox} />
    </Wrapper>
  );
};
 