import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const MainContainer = styled.div`
  display: grid;
  justify-items: stretch;
  align-content: stretch;
  grid-gap: 14px;
  margin: 10px 10px;
 
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
  }
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 40px;
  font-weight: 600;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.white};

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

export const Tiles = styled.div`
  padding: 16px;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
  }
`;

export const StyledLink = styled(NavLink)`
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-bottom: 16px;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 15px;
  width: 200px;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  &:hover {
    transform: scale(115%);
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%; /* Ustaw szerokość na 100% */
`;

export const Input = styled.input`
  border-radius:15px;
  margin-bottom:15px;
 padding: 0 15px;
  height:45px;
  width: auto;
  width: 250px;
`;

export const Label = styled.label`
  font-size: 15px;
  margin-bottom: 8px;
  margin-top: 8px;
  margin-right: 20px;
  line-height: 130%;
`;

export const Textarea = styled.textarea`
  margin-bottom: 16px;
  padding: 15px 15px;
  height: 100px;
  width: 500px;
`;