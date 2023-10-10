import styled from "styled-components";

export const Main = styled.div`
  width: 1368px;
  max-width: calc(100% - 2 * 12px);
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 16px auto;
  }
`;
