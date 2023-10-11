import React from "react";
import {
  Wrapper,
  StyledImgHours,
  StyledImgcallMe,
  StyledImgBooking,
  StyledLink,
} from "./styled";
import firstBox from "./openhours.svg";
import callMe from "./callMe.png";
import booking from "./booking.png";

export const TileFirstBox = ({ title }) => {
  return (
    <Wrapper>
      <div>
        {" "}
        {/* Pierwszy duży box */}
        <StyledImgHours src={firstBox} />
      </div>
      <div style={{ display: "flex" }}>
        {" "}
        {/* Kontener dla dwóch mniejszych boxów */}
        <div>
          {" "}
          {/* Drugi mniejszy box (callMe) */}
          <StyledLink to={`/callMe`}>
            <StyledImgcallMe src={callMe} alt="callMe" />
          </StyledLink>
        </div>
        <div>
          {" "}
          {/* Trzeci mniejszy box (booking) */}
          <StyledLink to={`/booking`}>
            <StyledImgBooking src={booking} alt="booking" />
          </StyledLink>
        </div>
      </div>
    </Wrapper>
  );
};
