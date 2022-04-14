import Header from "./components/Header";
import styled from "styled-components";
// import './App.css';

import Main from "./components/Main";
import { useContext } from "react";
import ShowContext from "./Context/show-context";

function App() {
  const showCtx = useContext(ShowContext);
  return (
    <Container show={showCtx.showNav}>
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;

  &::-webkit-scrollbar {
    display: ${(props) => (props.show ? "none" : "block")};
  }
`;

export default App;
