import styled from "styled-components";

export const StyledH1 = styled.h1`
  text-align: center;
  line-height: 78px;
  font-size: 4rem;
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

export const StyledError = styled.span`
  color: red;
  opacity: 0.8;
  margin-top: -1.375rem;
`;

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderCon = styled.div`
  width: 100%;
  height: calc(80vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  @media only screen and (max-width: 370px) {
    padding-top: 2.2rem;
    padding-bottom: 1.2rem;
  }
`;

export const FormGroup = styled.div`
  opacity: 1;
  width: 80%;
  padding: 8.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #232228;
  gap: 2.5rem;
  border-radius: 1.5rem;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  @media only screen and (max-width: 680px) {
    width: 100%;
    padding: 8.8rem 3rem;
  }
  @media only screen and (max-width: 370px) {
    width: 100%;
    padding: 5.8rem 2rem;
  }
`;

export const Input = styled.input`
  border-radius: 0.5rem;
  background: #232228;
  box-shadow: inset 7px 7px 15px #141317, inset -7px -7px 15px #323139;
  border: none;
  outline: none;
  padding: 1.5rem 0 1.5rem 1.5rem;
  width: 70%;
  text-transform: lowercase;
  font-size: 1rem;
  letter-spacing: 1px;
  color: white;
  @media only screen and (max-width: 1000px) {
    width: 85%;
  }
  @media only screen and (max-width: 680px) {
    width: 95%;
  }
  @media only screen and (max-width: 360px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 1.2rem 2rem;
  border-radius: 0.5rem;
  background: #232228;
  box-shadow: inset -8px -8px 14px #17171b, inset 8px 8px 14px #2f2d35;
  color: var(--offText);
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  &:hover {
    box-shadow: inset 8px 8px 14px #17171b, -4px -4px 14px #2f2d35;
    transition: box-shadow 0.3s;
  }
  @media only screen and (max-width: 360px) {
    padding: 1rem 1.55rem;
    font-size: 0.8rem;
  }
`;
