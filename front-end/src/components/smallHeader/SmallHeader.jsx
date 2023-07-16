import React from "react";
import { styled } from "styled-components";
const StyledH1 = styled.h1`
  text-align: center;
  line-height: 60px;
  font-size: 3rem;
  background-image: linear-gradient(to right, #dbe2e7 0%, #8e9ca2 100%);
  -webkit-background-clip: text; /* For Safari */
  -webkit-text-fill-color: transparent; /* For Safari */
  color: transparent;
  width: 70%;
  @media only screen and (max-width: 1000px) {
    width: 80%;
    font-size: 3.66rem;
  }
  @media only screen and (max-width: 680px) {
    width: 100%;
    font-size: 2.88rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 2.6rem;
    line-height: 60px;
  }

  @media only screen and (max-width: 370px) {
    font-size: 2rem;
    line-height: 45px;
  }
`;
const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const SmallHeader = ({ title }) => {
  return (
    <StyledHeader>
      <StyledH1>{title}</StyledH1>
    </StyledHeader>
  );
};

export default SmallHeader;
