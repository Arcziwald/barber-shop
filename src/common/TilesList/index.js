import {
  MainContainer,
  StyledImgBarber,
  StyledImgEvas,
  StyledImgShop,
  StyledLink,
  Tiles,
} from "./styled";

export const TilesList = () => (
  <MainContainer>
    <Tiles>
      <StyledLink to={`/evas`}>
        <StyledImgEvas />
      </StyledLink>
    </Tiles>
    <Tiles>
      <StyledLink to={`/barber`}>
        <StyledImgBarber />
      </StyledLink>
    </Tiles>
    <Tiles>
      <StyledLink to={`/shop`}>
        <StyledImgShop />
      </StyledLink>
    </Tiles>
  </MainContainer>
);
