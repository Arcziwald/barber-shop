import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  align-content: stretch;
`;

export const StyledImgHours = styled.img`
  width: 100%;
  border-radius: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 100%;
  }
`;

export const StyledImgcallMe = styled.img`
  width: 50%;
  border-radius: 45px;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  &:hover {
    transform: scale(115%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledImgBooking = styled.img`
  width: 50%;
  border-radius: 35px;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  &:hover {
    transform: scale(115%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 50%;
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
`;
