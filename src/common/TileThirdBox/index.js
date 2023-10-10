import { Wrapper, StyledImgGallery } from "./styled";
import thirdBox from "./standingsolar.jpeg";

export const TileThirdBox = ({ title }) => {
  return (
    <Wrapper>
      <StyledImgGallery src={thirdBox} />
    </Wrapper>
  );
};
