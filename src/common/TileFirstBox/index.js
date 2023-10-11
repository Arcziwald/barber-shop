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
import PhoneLink from "../PhoneLink";

export const TileFirstBox = () => {
  return (
    <Wrapper>
      <div> {/* Pierwszy duży box */}
        <StyledImgHours src={firstBox} />
      </div>
      <div style={{ display: "flex" }}> {/* Kontener dla dwóch mniejszych boxów */}
        <div> {/* Drugi mniejszy box (callMe) */}
          <StyledLink to={PhoneLink}>
            <StyledImgcallMe src={callMe} alt="callMe" />
            {/* Tutaj umieść funkcjonalność do dzwonienia */}
          </StyledLink>
        </div>
        <div> {/* Trzeci mniejszy box (booking) */}
          <StyledLink to={`/booking`}>
            <StyledImgBooking src={booking} alt="booking" />
          </StyledLink>
        </div>
      </div>
    </Wrapper>
  );
};
