import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Evas } from "./evas.svg";
import { ReactComponent as Barber } from "./barber.svg";
import { ReactComponent as Shop } from "./shop.svg";

export const MainContainer = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: stretch;
  grid-gap: 24px;

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
  display: grid;
  align-content: center;
  justify-content: center;
  margin-top: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.boxTiles};
`;

export const StyledImgEvas = styled(Evas)`
  width: 562px;
  height: 120px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 120px;
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 100px;
  }
`;

export const StyledImgBarber = styled(Barber)`
  width: 562px;
  height: 120px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 120px;
    
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 100px;
    
  }
`;
export const StyledImgShop = styled(Shop)`
  width: 562px;
  height: 120px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 100px;
  }
`;