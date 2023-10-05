import { Wrapper, Title, StyledImgGallery } from "./styled";
import secondBox from "./secondBox.jpeg";

export const TileSecondBox = ({ title }) => {
  return (
    <Wrapper>
      
        <Title>{title}</Title>
     
      <StyledImgGallery src={secondBox} />
    </Wrapper>
  );
};
