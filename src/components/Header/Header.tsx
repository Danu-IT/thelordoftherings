import Logo from "../Logo";
import User from "../User";
import { useAppSelector } from "../../hooks/redux";
import AuthButtons from "../AuthButtons/AuthButtons";

import { styled } from "styled-components";

const Header = () => {
  const isAuth = useAppSelector((state) => state.authSlice.isAuth);

  return (
    <Container>
      <Logo />
      <Right>
        {isAuth ? <>Избранное</> : <AuthButtons />}
        <User />
      </Right>
    </Container>
  );
};

const Container = styled.header`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;

export default Header;
