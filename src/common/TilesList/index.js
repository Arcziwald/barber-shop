import { Box } from "../Box";
import { Main } from "../Main";

import {
  MainContainer,
  StyledImgBarber,
  StyledImgEvas,
  StyledImgShop,
  StyledLink,
  Tiles,
} from "./styled";

export const TilesList = () => (
  <Main>
    <Box />
    <MainContainer>
      <Tiles>
        <StyledLink to="/contact">
          <StyledImgEvas />
        </StyledLink>
      </Tiles>
      <Tiles>
        <StyledLink to="/gallery">
          <StyledImgBarber />
        </StyledLink>
      </Tiles>
      <Tiles>
        <StyledLink to="/shop">
          <StyledImgShop />
        </StyledLink>
      </Tiles>
    </MainContainer>
  </Main>
);
