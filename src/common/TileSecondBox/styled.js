import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  transition: transform 0.3s ease;
  transform-origin: center;
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: column-reverse;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
  }

  &:hover {
    transform: scale(105%);
  }
`;

export const StyledTitle = styled.img`
  width: 80%;
`;

export const StyledImgGallery = styled.img`
  border-radius: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 100%;
  }
`;
