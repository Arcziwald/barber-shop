import { Link } from "react-router-dom";
import { Main } from "../Main";
import { Wrapper, Image } from "./styled";

export const Header = () => (
  <Main>
    <Wrapper>
      <Link to="/evas">
        <Image />
      </Link>
    </Wrapper>
  </Main>
);
