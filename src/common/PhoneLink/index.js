import { Link } from "react-router-dom";

function PhoneLink() {
  const currentPath = window.location.hash;
  return (
    <Link to={currentPath === "#/callMe" ? "#" : "tel:+353897074465"}></Link>
  );
}

export default PhoneLink;
