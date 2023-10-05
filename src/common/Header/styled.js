import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";

export const Wrapper = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.redArt};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  transition: transform 0.3s ease;
  transform-origin: center;
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 100%;
    justify-content: unset;
    justify-items: center;
  }

 
`;

export const Image = styled(Logo)`
  width: 1200px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 550px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 220px;
  }
`;
