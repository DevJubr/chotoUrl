import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-size: 0.8rem;
  color: var(--offText);
  background-color: var(--darkDeep);
  margin-top: 4rem;
  @media only screen and (max-width: 500px) {
    font-size: 0.66rem;
    margin-top: 1rem;
  }
`;

export const FooterCon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media only screen and (max-width: 370px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.8rem;
  }
`;

export const FooterRight = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: 370px) {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
  li {
    cursor: pointer;
  }
`;
