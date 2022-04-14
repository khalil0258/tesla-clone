import React, { useContext } from "react";
import { createPortal } from "react-dom";
import Section from "./Section";
import styled from "styled-components";
import ShowContext from "../Context/show-context";

const Portal = (props) => {
  return createPortal(
    <Back show={props.show} />,
    document.getElementById("backdrop")
  );
};

function Main() {
  const showCtx = useContext(ShowContext);
  const show = showCtx.showNav;
  console.log(show);
  return (
    <Container show={show}>
      <Portal show={show} />
      <Section
        title="Model 3"
        description={` Order Online for Touchless Delivery`}
        image="model-3.jpg"
        btnRight="CUSTOM ORDER"
        btnLeft="EXISTING INVENTORY"
        arrow={true}
      />
      <Section
        title="Model Y"
        description={` Order Online for Touchless Delivery`}
        image="model-y.jpg"
        btnRight="CUSTOM ORDER"
        btnLeft="EXISTING INVENTORY"
        arrow={false}
      />
      <Section
        title="Model S"
        description={` Order Online for Touchless Delivery`}
        image="model-s.jpg"
        btnRight="CUSTOM ORDER"
        btnLeft="EXISTING INVENTORY"
        arrow={false}
      />
      <Section
        title="Model X"
        description={` Order Online for Touchless Delivery`}
        image="model-x.jpg"
        btnRight="CUSTOM ORDER"
        btnLeft="EXISTING INVENTORY"
        arrow={false}
      />
      <Section
        title="Solar Panels"
        description={` Lowest Cost Solar Panels in America`}
        image="solar-panel.jpg"
        btnRight="ORDER NOW"
        btnLeft="LEARN MORE"
        arrow={false}
      />
      <Section
        title="Solar Roof"
        description={` Produce Clean Energy From Your Roof`}
        image="solar-roof.jpg"
        btnRight="ORDER NOW"
        btnLeft="LEARN MORE"
        arrow={false}
      />
      <Section
        title="Accessories"
        image="accessories.jpg"
        btnRight="Shop Now"
        arrow={false}
        color="black"
      />
    </Container>
  );
}

export default Main;

const Back = styled.div`
  postition: fixed;
  top: 0;
  left: 0;
  margin-top: -100vh;
  height: 700vh;
  width: 700vw;
  background-color: ${(props) =>
    props.show ? "rgba(0, 0, 0, 0.3)" : "transparent"};
  // filter: blur(88px);
  -webkit-backdrop-filter: ${(props) => (props.show ? "blur(4px)" : "none")};
  backdrop-filter: ${(props) => (props.show ? "blur(4px)" : "none")};
  z-index: 100;
  transition: 1s;
`;

const Container = styled.div`
  &::-webkit-scrollbar {
    display: ${(props) => (props.show ? "none" : "block")};
  }
`;
