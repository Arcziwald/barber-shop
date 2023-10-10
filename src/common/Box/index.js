import { TileThirdBox } from "../TileThirdBox";
import { TileSecondBox } from "../TileSecondBox";
import { TileFirstBox } from "../TileFirstBox";
import { MainContainer } from "./styled";
import { Main } from "../Main";

export const Box = () => (
  <Main>
    <MainContainer>
      <TileFirstBox />
      <TileSecondBox />
      <TileThirdBox />
    </MainContainer>
  </Main>
);
