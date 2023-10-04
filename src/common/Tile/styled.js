import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  transition: transform 0.3s ease;
  transform-origin: center;
  border: none;
  border-radius: 5px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: grid;
    grid-template-columns: 130px auto;
    grid-template-rows: auto 100%;
    justify-content: unset;
  }

  &:hover {
    transform: scale(105%);
  }
`;

export const Poster = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 10px;
    height: 10px;
    grid-column: span 1;
    grid-row: span 2;
  }
`;

export const PosterIMG = styled.img`
  aspect-ratio: 0.34;
  width: 50%;
  height: 100%;
  border-radius: 5px;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-column: span 1;
    grid-row: span 1;
    padding-top: 0px;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 16px;
  }
`;

