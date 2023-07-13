import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  width: 300px;
  height: 200px;
  padding: 2rem;
  border-radius: 0.6rem;
  background: #27262c;
  box-shadow: 9px 9px 17px #222126, -9px -9px 17px #2c2b32;
`;

export const Links = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const Dot = styled.div`
  border-radius: 19px;
  width: 8px;
  height: 8px;
`;

export const RedDot = styled(Dot)`
  background: #ff7575;
  box-shadow: inset -1px -1px 3px #db6565, inset 1px 1px 3px #ff8585;
`;

export const GreenDot = styled(Dot)`
  background: #75ff91;
  box-shadow: inset -1px -1px 3px #65db7d, inset 1px 1px 3px #85ffa5;
`;

export const Url = styled.p`
  color: white;
`;

export const UrlContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: var(--offText);
  text-transform: capitalize;
  border: 0.3px solid #ffffff38;
  padding: 0.322rem 0.6rem;
  border-radius: 0.2rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
`;
export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 4rem 0;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 0.55rem;
  background: #27262c;
  box-shadow: inset 6px 6px 7px #1b1b1f, inset -6px -6px 7px #333139;
  color: aliceblue;
  padding: 0.6rem;
`;
