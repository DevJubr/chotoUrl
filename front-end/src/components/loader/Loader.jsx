import styled, { keyframes } from "styled-components";

const LoaderContainer = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 10px;
  margin: 0.55rem 0 0 0;
`;

const fadeAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.25;
  }
`;

const LoaderBar = styled.div`
  width: 8%;
  height: 24%;
  background: rgb(128, 128, 128);
  position: absolute;
  left: 50%;
  top: 30%;
  opacity: 0;
  border-radius: 50px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  animation: ${fadeAnimation} 1s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderBar style={{ transform: "rotate(0deg) translate(0, -130%)" }} />
      <LoaderBar style={{ transform: "rotate(30deg) translate(0, -130%)" }} />
      <LoaderBar style={{ transform: "rotate(60deg) translate(0, -130%)" }} />
      <LoaderBar style={{ transform: "rotate(90deg) translate(0, -130%)" }} />
      <LoaderBar style={{ transform: "rotate(120deg) translate(0, -130%)" }} />
      <LoaderBar style={{ transform: "rotate(150deg) translate(0, -130%)" }} />
      <LoaderBar style={{ transform: "rotate(180deg) translate(0, -130%)" }} />
      <LoaderBar style={{ transform: "rotate(210deg) translate(0, -130%)" }} />
      <LoaderBar style={{ transform: "rotate(240deg) translate(0, -130%)" }} />
      <LoaderBar style={{ transform: "rotate(270deg) translate(0, -130%)" }} />
      <LoaderBar style={{ transform: "rotate(300deg) translate(0, -130%)" }} />
      <LoaderBar style={{ transform: "rotate(330deg) translate(0, -130%)" }} />
    </LoaderContainer>
  );
};

export default Loader;
