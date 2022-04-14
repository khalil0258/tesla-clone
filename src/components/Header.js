import React, { useContext } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ShowContext from "../Context/show-context";
function Header() {
  const showCtx = useContext(ShowContext);
  return (
    <Container>
      <Logo src="/images/logo.svg"></Logo>
      <NavLinks>
        <li>Model s</li>
        <li>Model 3</li>
        <li>Model x</li>
        <li>Model y</li>
        <li>Solar Roof</li>
        <li>Solar Panel</li>
      </NavLinks>
      <Links>
        <li>Shop</li>
        <li>Account</li>
        <li onClick={() => showCtx.showHandler(true)}>Menu</li>
      </Links>
      <Link onClick={() => showCtx.showHandler(true)}>Menu</Link>

      <Nav show={showCtx.showNav}>
        <CloseNav>
          <Close onClick={() => showCtx.showHandler(false)} />
        </CloseNav>
        <ul>
          <li>Existing Enventory</li>
          <li>Used Invertory</li>
          <li>Trade-in</li>
          <li>Test Drive</li>
          <li>Cybertruck</li>
          <li>Roadster</li>
          <li>Semi</li>
          <li>Charging</li>
          <li>Powerwall</li>
          <li>Commercial Energy</li>
          <li>Utilities</li>
          <li>Find Us</li>
          <li>Support</li>
          <li>Investor Relations</li>
        </ul>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  position: fixed;
  height: 54px;
  padding: 0 1.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;
const Logo = styled.img`
  width: 110px;
  cursor: pointer;
  height: 15px;
`;

const NavLinks = styled.ul`
  display: flex;

  //   font-weight: 550;
  li {
    list-style: none;

    border-radius: 10px;
    border: none;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 8px 15px;
    transition: 0.15s background ease-in-out;
    &: hover {
      background: rgba(93, 93, 93, 0.09);
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
const Links = styled(NavLinks)``;

const Link = styled.button`
  display: none;
  @media (max-width: 1200px) {
    display: flex;
    padding: 8px 15px;
    border-radius: 10px;
    border: none;
    font-weight: 550;
    letter-spacing: 1px;
    background: rgba(93, 93, 93, 0.09);
    cursor: pointer;
  }
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: white;
  display: flex;
  justify-content: center;
  z-index: 100;
  //   overflow-y: scroll;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: 1s all ease-in-out;
  opacity: ${(props) => (props.show ? "1" : "0")};
  ul {
    display: flex;
    flex-direction: column;
    // background: blue;
    width: 80%;
    overflow-y: scroll;
    margin-bottom: 2rem;
    margin-top: 5.5rem;
    height: 80%;
    list-style: none;
    &::-webkit-scrollbar {
      display: none;
      //   height: 100vh;
      //   width: 10px;
    }
  }
  li {
    margin: 0.7rem 0;
    border-radius: 10px;
    border: none;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 7px 11px;
    transition: 0.15s background ease-in-out;
    &: hover {
      background: rgba(93, 93, 93, 0.09);
    }
  }
`;
const CloseNav = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;

  padding-top: 1.4rem;
  width: 80%;
`;
const Close = styled(CloseIcon)`
  cursor: pointer;
`;
