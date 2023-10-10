import React from "react";
import { Wrapper, StyledImgHours, StyledImgKontakt, StyledImgRegistration, StyledLink } from "./styled";
import firstBox from "./openhours.svg";
import kontakt from "./kontakt.png";
import registration from "./registration.png";

export const TileFirstBox = ({ title }) => {
  return (
    <Wrapper>
      <div> {/* Pierwszy duży box */}
        <StyledImgHours src={firstBox} />
      </div>
      <div style={{ display: "flex" }}> {/* Kontener dla dwóch mniejszych boxów */}
        <div> {/* Drugi mniejszy box (kontakt) */}
          <StyledLink to={`/kontakt`}>
            <StyledImgKontakt src={kontakt} alt="Kontakt" />
          </StyledLink>
        </div>
        <div> {/* Trzeci mniejszy box (registration) */}
          <StyledLink to={`/registration`}>
            <StyledImgRegistration src={registration} alt="Registration" />
          </StyledLink>
        </div>
      </div>
    </Wrapper>
  );
};
