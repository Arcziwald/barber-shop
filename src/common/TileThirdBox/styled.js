import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.white};
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  transition: transform 0.3s ease;
  transform-origin: center;
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 40px;
  font-weight: 600;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 16px;
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
