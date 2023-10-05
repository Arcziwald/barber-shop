import { Tile } from "../Tile";
import { TileSecondBox } from "../TileSecondBox";
import { MainContainer } from "./styled";

export const Box = () => (
  <MainContainer>
    <Tile title="Opening Hours" />

    <TileSecondBox title="Gallery" />

    <Tile title="Shop Title" />
  </MainContainer>
);
