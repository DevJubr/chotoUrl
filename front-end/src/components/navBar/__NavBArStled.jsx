import { styled } from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
     @media only screen and (max-width: 370px) {
  height: 60px;
     
    }
`;

export const Nav__Con = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 2rem;
    font-family: "Ubuntu", sans-serif;
    @media only screen and (max-width: 500px) {
      font-size: 1.6rem;
    }
    @media only screen and (max-width: 370px) {
      font-size: 1.2rem;
    }
  }
`;
