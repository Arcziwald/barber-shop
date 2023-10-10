import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";

export const Wrapper = styled.div`
  
  background: ${({ theme }) => theme.colors.redArt};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  transition: transform 0.3s ease;
  transform-origin: center;
  border: none;
  margin-top: 5px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 10px;
  }
`;

export const Image = styled(Logo)`
  width: 900px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 250px;
  }
`;
