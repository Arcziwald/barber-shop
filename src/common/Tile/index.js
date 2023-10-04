import { Wrapper, Poster, Title, DescriptionBox, PosterIMG } from "./styled";

export const Tile = ({ title, svg }) => {
  return (
    <Wrapper>
      <DescriptionBox>
        <Title>{title}</Title>
      </DescriptionBox>
      <Poster>
        <PosterIMG src={svg} />
      </Poster>
    </Wrapper>
  );
};
