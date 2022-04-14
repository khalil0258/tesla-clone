import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section(props) {
  return (
    <Wraper img={props.image}>
      <TitleContainer>
        <Fade bottom>
          <h1>{props.title}</h1>
        </Fade>
        <Fade bottom delay={1000}>
          <p>{props.description}</p>
        </Fade>
      </TitleContainer>
      <ButtonsContainer arrow={props.arrow}>
        <Buttons>
          <Fade left duration={1000} distance={"3em"}>
            <RightButton color={props.color}>{props.btnRight}</RightButton>{" "}
          </Fade>
          {props.btnLeft && (
            <Fade right duration={1000} distance={"3em"}>
              <LeftButton>{props.btnLeft} </LeftButton>
            </Fade>
          )}
        </Buttons>
        {props.arrow && (
          <Fade top delay={1000}>
            <ArrowDown src="/images/down-arrow.svg"></ArrowDown>{" "}
          </Fade>
        )}
      </ButtonsContainer>
    </Wraper>
  );
}

export default Section;

const Wraper = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("images/${(props) => props.img}");
`;

const TitleContainer = styled.div`
  padding: 4rem 0;
  h1 {
    font-size: 40px;
    padding: 1rem 0;
    letter-spacing: 1px;
    font-weight: 300;
  }
  p {
    letter-spacing: 1px;
    span {
      border-bottom: 1.5px solid #171a20;
      transition: 0.2s border-bottom ease-in-out;
      cursor: pointer;
      &:hover {
        border-bottom: 2.3px solid #171a20;
      }
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (!props.arrow ? "4.3rem" : "0")};
`;

const Buttons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightButton = styled.div`
  background-color: ${(props) =>
    props.color ? props.color : "rgba(23, 26, 32, 0.8)"};
  height: 38px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  //   opacity: 0.9;
  color: white;
  border-radius: 100px;
  margin-right: 1rem;
  font-size: 12px;
  font-weight: 550;
  letter-spacing: 1px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 0 0 15px;
  }
`;
const LeftButton = styled(RightButton)`
  color: rgba(23, 26, 32, 0.9);
  background-color: white;
  opacity: 0.6;
`;
const ArrowDown = styled.img`
  height: 35px;
  color: black;

  animation: animate infinite 1.5s;
`;
