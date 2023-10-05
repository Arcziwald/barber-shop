import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Evas } from "../TilesList/evas.svg";
import { ReactComponent as Barber } from "../TilesList/barber.svg";
import { ReactComponent as Shop } from "../TilesList/shop.svg";

export const MainContainer = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: stretch;
  grid-gap: 24px;
  margin: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
  }
`;

export const Tiles = styled.div`
  padding: 16px;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  transition: transform 0.3s ease;
  transform-origin: center;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 5px;
  
`;

export const StyledImgEvas = styled(Evas)`
  width: 100%; 
  

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 40%; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 30%; 
  }
`;


export const StyledImgBarber = styled(Barber)`
  width: 110%;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 40%;
  }
`;
export const StyledImgShop = styled(Shop)`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 40%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 30%;
  }
`;
