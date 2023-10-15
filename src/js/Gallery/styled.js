import styled from "styled-components";


export const Wrapper = styled.div`
  /* Twoje style CSS tutaj */
  .pswp-gallery a {
    margin: 10px;
    display: flex;
    width: 100%;
    border-radius: 15px;
  }
`;

export const StyledImgGallery = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 100%;
  }
`;