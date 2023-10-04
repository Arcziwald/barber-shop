import {
  MainContainer,
  StyledImgBarber,
  StyledImgEvas,
  StyledImgShop,
  StyledLink,
} from "./styled";

export const TilesList = () => (
  <MainContainer>
    <StyledLink to={`/evas`}>
      <StyledImgEvas />
    </StyledLink>
    <StyledLink to={`/barber`}>
      <StyledImgBarber />
    </StyledLink>
    <StyledLink to={`/shop`}>
      <StyledImgShop />
    </StyledLink>
  </MainContainer>
);
